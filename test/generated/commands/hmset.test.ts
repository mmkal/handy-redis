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

test("scripts/redis-doc/commands/hmset.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/hmset.md");
    let snapshot: any;
    const commands = [
        `await handy.hmset("myhash", ["field1", "Hello"], ["field2", "World"])`,
        `await handy.hget("myhash", "field1")`,
        `await handy.hget("myhash", "field2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hmset("myhash", ["field1", "Hello"], ["field2", "World"]));
        output.push(await handy.hget("myhash", "field1"));
        output.push(await handy.hget("myhash", "field2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 70)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
