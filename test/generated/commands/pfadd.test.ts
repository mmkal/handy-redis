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

test("scripts/redis-doc/commands/pfadd.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/pfadd.md");
    let snapshot: any;
    const commands = [
        `await handy.pfadd("hll", "a", "b", "c", "d", "e", "f", "g")`,
        `await handy.pfcount("hll")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.pfadd("hll", "a", "b", "c", "d", "e", "f", "g"));
        output.push(await handy.pfcount("hll"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 60)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
