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

it("scripts/redis-doc/commands/setbit.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setbit.md");
    let snapshot: any;
    const commands = [
        `await client.setbit("mykey", 7, 1)`,
        `await client.setbit("mykey", 7, 0)`,
        `await client.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.setbit("mykey", 7, 1));
        output.push(await client.setbit("mykey", 7, 0));
        output.push(await client.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
