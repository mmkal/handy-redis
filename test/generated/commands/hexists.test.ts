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

test("scripts/redis-doc/commands/hexists.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/hexists.md");
    let snapshot: any;
    const commands = [
        `await handy.hset("myhash", "field1", "foo")`,
        `await handy.hexists("myhash", "field1")`,
        `await handy.hexists("myhash", "field2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hset("myhash", "field1", "foo"));
        output.push(await handy.hexists("myhash", "field1"));
        output.push(await handy.hexists("myhash", "field2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 44)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
