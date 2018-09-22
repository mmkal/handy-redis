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

test("scripts/redis-doc/commands/srandmember.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/srandmember.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "one", "two", "three")`,
        `await handy.srandmember("myset")`,
        `await handy.srandmember("myset", 2)`,
        `await handy.srandmember("myset", -5)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "one", "two", "three"));
        output.push(await handy.srandmember("myset"));
        output.push(await handy.srandmember("myset", 2));
        output.push(await handy.srandmember("myset", -5));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
