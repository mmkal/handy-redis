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

it("scripts/redis-doc/commands/xtrim.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xtrim.md");
    let snapshot: any;
    const commands = [
        `await client.xadd("mystream", "*", ["field1", "A"], ["field2", "B"], ["field3", "C"], ["field4", "D"])`,
        `await client.xtrim("mystream", "MAXLEN", 2)`,
        `await client.xrange("mystream", "-", "+")`,
    ];
    const output: any[] = [];
    try {
        output.push(
            await client.xadd("mystream", "*", ["field1", "A"], ["field2", "B"], ["field3", "C"], ["field4", "D"])
        );
        output.push(await client.xtrim("mystream", "MAXLEN", 2));
        output.push(await client.xrange("mystream", "-", "+"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 103)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
