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

test("scripts/redis-doc/commands/rpoplpush.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/rpoplpush.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "one")`,
        `await handy.rpush("mylist", "two")`,
        `await handy.rpush("mylist", "three")`,
        `await handy.rpoplpush("mylist", "myotherlist")`,
        `await handy.lrange("mylist", 0, -1)`,
        `await handy.lrange("myotherlist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "one"));
        output.push(await handy.rpush("mylist", "two"));
        output.push(await handy.rpush("mylist", "three"));
        output.push(await handy.rpoplpush("mylist", "myotherlist"));
        output.push(await handy.lrange("mylist", 0, -1));
        output.push(await handy.lrange("myotherlist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 47)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
