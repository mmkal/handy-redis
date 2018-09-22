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

test("scripts/redis-doc/commands/sismember.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/sismember.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "one")`,
        `await handy.sismember("myset", "one")`,
        `await handy.sismember("myset", "two")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "one"));
        output.push(await handy.sismember("myset", "one"));
        output.push(await handy.sismember("myset", "two"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
