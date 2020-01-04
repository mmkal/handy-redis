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

it("scripts/redis-doc/commands/getbit.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getbit.md");
    let snapshot: any;
    const commands = [
        `await client.setbit("mykey", 7, 1)`,
        `await client.getbit("mykey", 0)`,
        `await client.getbit("mykey", 7)`,
        `await client.getbit("mykey", 100)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.setbit("mykey", 7, 1));
        output.push(await client.getbit("mykey", 0));
        output.push(await client.getbit("mykey", 7));
        output.push(await client.getbit("mykey", 100));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
