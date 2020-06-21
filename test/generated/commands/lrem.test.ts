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

it("scripts/redis-doc/commands/lrem.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lrem.md");
    let snapshot: any;
    const commands = [
        `await client.rpush("mylist", "hello")`,
        `await client.rpush("mylist", "hello")`,
        `await client.rpush("mylist", "foo")`,
        `await client.rpush("mylist", "hello")`,
        `await client.lrem("mylist", -2, "hello")`,
        `await client.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.rpush("mylist", "hello"));
        output.push(await client.rpush("mylist", "hello"));
        output.push(await client.rpush("mylist", "foo"));
        output.push(await client.rpush("mylist", "hello"));
        output.push(await client.lrem("mylist", -2, "hello"));
        output.push(await client.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 41)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
