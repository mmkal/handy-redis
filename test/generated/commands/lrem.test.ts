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

test("scripts/redis-doc/commands/lrem.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/lrem.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "hello")`,
        `await handy.rpush("mylist", "hello")`,
        `await handy.rpush("mylist", "foo")`,
        `await handy.rpush("mylist", "hello")`,
        `await handy.lrem("mylist", -2, "hello")`,
        `await handy.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.rpush("mylist", "foo"));
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.lrem("mylist", -2, "hello"));
        output.push(await handy.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 40)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
