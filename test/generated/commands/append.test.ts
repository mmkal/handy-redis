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

it("scripts/redis-doc/commands/append.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/append.md");
    let snapshot: any;
    const commands = [
        `await client.exists("mykey")`,
        `await client.append("mykey", "Hello")`,
        `await client.append("mykey", " World")`,
        `await client.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.exists("mykey"));
        output.push(await client.append("mykey", "Hello"));
        output.push(await client.append("mykey", " World"));
        output.push(await client.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 39)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
it("scripts/redis-doc/commands/append.md example 2", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/append.md");
    let snapshot: any;
    const commands = [
        `await client.append("ts", "0043")`,
        `await client.append("ts", "0035")`,
        `await client.getrange("ts", 0, 3)`,
        `await client.getrange("ts", 4, 7)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.append("ts", "0043"));
        output.push(await client.append("ts", "0035"));
        output.push(await client.getrange("ts", 0, 3));
        output.push(await client.getrange("ts", 4, 7));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 34)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
