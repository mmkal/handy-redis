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

it("scripts/redis-doc/commands/del.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/del.md");
    let snapshot: any;
    const commands = [
        `await client.set("key1", "Hello")`,
        `await client.set("key2", "World")`,
        `await client.del("key1", "key2", "key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("key1", "Hello"));
        output.push(await client.set("key2", "World"));
        output.push(await client.del("key1", "key2", "key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 41)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
