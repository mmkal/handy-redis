import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let handy: IHandyRedis;
beforeAll(async () => {
    handy = createHandyClient();
    await handy.ping("ping");
});
beforeEach(async () => {
    await handy.flushall();
});

it.skip("scripts/redis-doc/commands/swapdb.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/swapdb.md");
    let snapshot: any;
    const commands = [
        "await handy.swapdb(0, 1)",
    ];
    const output: any[] = [];
    try {
        output.push(await handy.swapdb(0, 1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 25)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
