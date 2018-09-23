import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../../src";
import { getOverride } from "../../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/more-cli-examples/setwithexpiry.md example 1", async () => {
    const overrider = getOverride("scripts/more-cli-examples/setwithexpiry.md");
    let snapshot: any;
    const commands = [
        `await client.set("foo", "bar", ["EX", 60])`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("foo", "bar", ["EX", 60]));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 43)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
