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

it("scripts/redis-doc/commands/setrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setrange.md");
    let snapshot: any;
    const commands = [
        `await client.set("key1", "Hello World")`,
        `await client.setrange("key1", 6, "Redis")`,
        `await client.get("key1")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("key1", "Hello World"));
        output.push(await client.setrange("key1", 6, "Redis"));
        output.push(await client.get("key1"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 42)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
it("scripts/redis-doc/commands/setrange.md example 2", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setrange.md");
    let snapshot: any;
    const commands = [`await client.setrange("key2", 6, "Redis")`, `await client.get("key2")`];
    const output: any[] = [];
    try {
        output.push(await client.setrange("key2", 6, "Redis"));
        output.push(await client.get("key2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 42)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
