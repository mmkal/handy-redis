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

test("scripts/redis-doc/commands/pfmerge.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/pfmerge.md");
    let snapshot: any;
    const commands = [
        `await handy.pfadd("hll1", "foo", "bar", "zap", "a")`,
        `await handy.pfadd("hll2", "a", "b", "c", "foo")`,
        `await handy.pfmerge("hll3", "hll1", "hll2")`,
        `await handy.pfcount("hll3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.pfadd("hll1", "foo", "bar", "zap", "a"));
        output.push(await handy.pfadd("hll2", "a", "b", "c", "foo"));
        output.push(await handy.pfmerge("hll3", "hll1", "hll2"));
        output.push(await handy.pfcount("hll3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 52)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
