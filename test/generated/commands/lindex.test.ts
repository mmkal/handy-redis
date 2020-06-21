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

it("scripts/redis-doc/commands/lindex.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lindex.md");
    let snapshot: any;
    const commands = [
        `await client.lpush("mylist", "World")`,
        `await client.lpush("mylist", "Hello")`,
        `await client.lindex("mylist", 0)`,
        `await client.lindex("mylist", -1)`,
        `await client.lindex("mylist", 3)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.lpush("mylist", "World"));
        output.push(await client.lpush("mylist", "Hello"));
        output.push(await client.lindex("mylist", 0));
        output.push(await client.lindex("mylist", -1));
        output.push(await client.lindex("mylist", 3));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
