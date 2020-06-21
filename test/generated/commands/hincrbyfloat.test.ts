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

it("scripts/redis-doc/commands/hincrbyfloat.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hincrbyfloat.md");
    let snapshot: any;
    const commands = [
        `await client.hset("mykey", ["field", "10.50"])`,
        `await client.hincrbyfloat("mykey", "field", 0.1)`,
        `await client.hincrbyfloat("mykey", "field", -5)`,
        `await client.hset("mykey", ["field", "5.0e3"])`,
        `await client.hincrbyfloat("mykey", "field", 200)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.hset("mykey", ["field", "10.50"]));
        output.push(await client.hincrbyfloat("mykey", "field", 0.1));
        output.push(await client.hincrbyfloat("mykey", "field", -5));
        output.push(await client.hset("mykey", ["field", "5.0e3"]));
        output.push(await client.hincrbyfloat("mykey", "field", 200));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
