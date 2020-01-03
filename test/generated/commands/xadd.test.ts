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

it("scripts/redis-doc/commands/xadd.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xadd.md");
    let snapshot: any;
    const commands = [
        `await client.xadd("mystream", "*", "name", "Sara")`,
        `await client.xadd("mystream", "*", ["field1", "value1"], ["field2", "value2"], ["field3", "value3"])`,
        `await client.xlen("mystream")`,
        `await client.xrange("mystream", "-", "+")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.xadd("mystream", "*", "name", "Sara"));
        output.push(await client.xadd("mystream", "*", ["field1", "value1"], ["field2", "value2"], ["field3", "value3"]));
        output.push(await client.xlen("mystream"));
        output.push(await client.xrange("mystream", "-", "+"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 101)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
