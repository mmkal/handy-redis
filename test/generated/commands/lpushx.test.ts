import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/redis-doc/commands/lpushx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lpushx.md");
    let snapshot: any;
    const commands = [
        `await client.lpush("mylist", "World")`,
        `await client.lpushx("mylist", "Hello")`,
        `await client.lpushx("myotherlist", "Hello")`,
        `await client.lrange("mylist", 0, -1)`,
        `await client.lrange("myotherlist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.lpush("mylist", "World"));
        output.push(await client.lpushx("mylist", "Hello"));
        output.push(await client.lpushx("myotherlist", "Hello"));
        output.push(await client.lrange("mylist", 0, -1));
        output.push(await client.lrange("myotherlist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 44)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
