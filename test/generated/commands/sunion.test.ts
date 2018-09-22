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

test("scripts/redis-doc/commands/sunion.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/sunion.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("key1", "a")`,
        `await handy.sadd("key1", "b")`,
        `await handy.sadd("key1", "c")`,
        `await handy.sadd("key2", "c")`,
        `await handy.sadd("key2", "d")`,
        `await handy.sadd("key2", "e")`,
        `await handy.sunion("key1", "key2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("key1", "a"));
        output.push(await handy.sadd("key1", "b"));
        output.push(await handy.sadd("key1", "c"));
        output.push(await handy.sadd("key2", "c"));
        output.push(await handy.sadd("key2", "d"));
        output.push(await handy.sadd("key2", "e"));
        output.push(await handy.sunion("key1", "key2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
