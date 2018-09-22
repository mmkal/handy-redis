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

test("scripts/redis-doc/commands/getset.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/getset.md");
    let snapshot: any;
    const commands = [
        `await handy.incr("mycounter")`,
        `await handy.getset("mycounter", "0")`,
        `await handy.get("mycounter")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.incr("mycounter"));
        output.push(await handy.getset("mycounter", "0"));
        output.push(await handy.get("mycounter"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 37)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
test("scripts/redis-doc/commands/getset.md example 2", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/getset.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "Hello")`,
        `await handy.getset("mykey", "World")`,
        `await handy.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "Hello"));
        output.push(await handy.getset("mykey", "World"));
        output.push(await handy.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 37)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
