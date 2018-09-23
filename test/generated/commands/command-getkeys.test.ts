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

test("scripts/redis-doc/commands/command-getkeys.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/command-getkeys.md");
    let snapshot: any;
    const commands = [
        `await handy.command("GETKEYS", "MSET", "a", "b", "c", "d", "e", "f")`,
        `await handy.command("GETKEYS", "EVAL", "not consulted", "3", "key1", "key2", "key3", "arg1", "arg2", "arg3", "argN")`,
        `await handy.command("GETKEYS", "SORT", "mylist", "ALPHA", "STORE", "outlist")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.command("GETKEYS", "MSET", "a", "b", "c", "d", "e", "f"));
        output.push(await handy.command("GETKEYS", "EVAL", "not consulted", "3", "key1", "key2", "key3", "arg1", "arg2", "arg3", "argN"));
        output.push(await handy.command("GETKEYS", "SORT", "mylist", "ALPHA", "STORE", "outlist"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 117)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
