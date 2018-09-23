import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../../src";
import { getOverride } from "../../../_manual-overrides";
let handy: IHandyRedis;
beforeAll(async () => {
    handy = createHandyClient();
    await handy.ping("ping");
});
beforeEach(async () => {
    await handy.flushall();
});

it("scripts/more-cli-examples/dbsize.md example 1", async () => {
    const overrider = getOverride("scripts/more-cli-examples/dbsize.md");
    let snapshot: any;
    const commands = [
        "await handy.dbsize()",
    ];
    const output: any[] = [];
    try {
        output.push(await handy.dbsize());
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 21)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
