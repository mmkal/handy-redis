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

it("scripts/redis-doc/commands/hincrby.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hincrby.md");
    let snapshot: any;
    const commands = [
        `await handy.hset("myhash", "field", "5")`,
        `await handy.hincrby("myhash", "field", 1)`,
        `await handy.hincrby("myhash", "field", -1)`,
        `await handy.hincrby("myhash", "field", -10)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hset("myhash", "field", "5"));
        output.push(await handy.hincrby("myhash", "field", 1));
        output.push(await handy.hincrby("myhash", "field", -1));
        output.push(await handy.hincrby("myhash", "field", -10));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 44)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
