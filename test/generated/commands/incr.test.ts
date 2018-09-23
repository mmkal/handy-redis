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

it("scripts/redis-doc/commands/incr.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/incr.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "10")`,
        `await handy.incr("mykey")`,
        `await handy.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "10"));
        output.push(await handy.incr("mykey"));
        output.push(await handy.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 31)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
