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

it("scripts/redis-doc/commands/bitcount.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/bitcount.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "foobar")`,
        `await client.bitcount("mykey")`,
        `await client.bitcount("mykey", [0, 0])`,
        `await client.bitcount("mykey", [1, 1])`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "foobar"));
        output.push(await client.bitcount("mykey"));
        output.push(await client.bitcount("mykey", [0, 0]));
        output.push(await client.bitcount("mykey", [1, 1]));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 39)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
