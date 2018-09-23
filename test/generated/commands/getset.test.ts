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

it("scripts/redis-doc/commands/getset.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getset.md");
    let snapshot: any;
    const commands = [
        `await client.incr("mycounter")`,
        `await client.getset("mycounter", "0")`,
        `await client.get("mycounter")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.incr("mycounter"));
        output.push(await client.getset("mycounter", "0"));
        output.push(await client.get("mycounter"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
it("scripts/redis-doc/commands/getset.md example 2", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getset.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "Hello")`,
        `await client.getset("mykey", "World")`,
        `await client.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "Hello"));
        output.push(await client.getset("mykey", "World"));
        output.push(await client.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
