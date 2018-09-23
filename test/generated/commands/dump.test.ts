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

it("scripts/redis-doc/commands/dump.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/dump.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "10")`,
        `await handy.dump("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "10"));
        output.push(await handy.dump("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 31)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
