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

it("scripts/redis-doc/commands/incrbyfloat.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/incrbyfloat.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "10.50")`,
        `await client.incrbyfloat("mykey", 0.1)`,
        `await client.incrbyfloat("mykey", -5)`,
        `await client.set("mykey", "5.0e3")`,
        `await client.incrbyfloat("mykey", 200)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "10.50"));
        output.push(await client.incrbyfloat("mykey", 0.1));
        output.push(await client.incrbyfloat("mykey", -5));
        output.push(await client.set("mykey", "5.0e3"));
        output.push(await client.incrbyfloat("mykey", 200));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 39)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
