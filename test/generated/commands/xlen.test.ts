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

it("scripts/redis-doc/commands/xlen.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xlen.md");
    let snapshot: any;
    const commands = [
        `await client.xadd("mystream", "*", "item", "1")`,
        `await client.xadd("mystream", "*", "item", "2")`,
        `await client.xadd("mystream", "*", "item", "3")`,
        `await client.xlen("mystream")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.xadd("mystream", "*", "item", "1"));
        output.push(await client.xadd("mystream", "*", "item", "2"));
        output.push(await client.xadd("mystream", "*", "item", "3"));
        output.push(await client.xlen("mystream"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 48)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
