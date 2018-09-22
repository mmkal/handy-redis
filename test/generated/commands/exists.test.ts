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

test("scripts/redis-doc/commands/exists.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/exists.md");
    let snapshot: any;
    const commands = [
        `await handy.set("key1", "Hello")`,
        `await handy.exists("key1")`,
        `await handy.exists("nosuchkey")`,
        `await handy.set("key2", "World")`,
        `await handy.exists("key1", "key2", "nosuchkey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("key1", "Hello"));
        output.push(await handy.exists("key1"));
        output.push(await handy.exists("nosuchkey"));
        output.push(await handy.set("key2", "World"));
        output.push(await handy.exists("key1", "key2", "nosuchkey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 48)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
