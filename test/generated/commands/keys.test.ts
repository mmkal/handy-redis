import ava from "ava";
import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let handy: IHandyRedis;
ava.before(async t => {
    handy = createHandyClient();
    await handy.ping("ping");
});
ava.beforeEach(async t => {
    await handy.flushall();
});
const test = ava.serial;

test("scripts/redis-doc/commands/keys.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/keys.md");
    let snapshot: any;
    const commands = [
        `await handy.mset(["one", "1"], ["two", "2"], ["three", "3"], ["four", "4"])`,
        `await handy.keys("*o*")`,
        `await handy.keys("t??")`,
        `await handy.keys("*")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.mset(["one", "1"], ["two", "2"], ["three", "3"], ["four", "4"]));
        output.push(await handy.keys("*o*"));
        output.push(await handy.keys("t??"));
        output.push(await handy.keys("*"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 76)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
