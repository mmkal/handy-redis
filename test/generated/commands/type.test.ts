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

it("scripts/redis-doc/commands/type.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/type.md");
    let snapshot: any;
    const commands = [
        `await client.set("key1", "value")`,
        `await client.lpush("key2", "value")`,
        `await client.sadd("key3", "value")`,
        `await client.type("key1")`,
        `await client.type("key2")`,
        `await client.type("key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("key1", "value"));
        output.push(await client.lpush("key2", "value"));
        output.push(await client.sadd("key3", "value"));
        output.push(await client.type("key1"));
        output.push(await client.type("key2"));
        output.push(await client.type("key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 36)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
