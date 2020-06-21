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

it("scripts/redis-doc/commands/exists.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/exists.md");
    let snapshot: any;
    const commands = [
        `await client.set("key1", "Hello")`,
        `await client.exists("key1")`,
        `await client.exists("nosuchkey")`,
        `await client.set("key2", "World")`,
        `await client.exists("key1", "key2", "nosuchkey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("key1", "Hello"));
        output.push(await client.exists("key1"));
        output.push(await client.exists("nosuchkey"));
        output.push(await client.set("key2", "World"));
        output.push(await client.exists("key1", "key2", "nosuchkey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
