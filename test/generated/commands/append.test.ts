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

test("scripts/redis-doc/commands/append.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/append.md");
    let snapshot: any;
    const commands = [
        `await handy.exists("mykey")`,
        `await handy.append("mykey", "Hello")`,
        `await handy.append("mykey", " World")`,
        `await handy.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.exists("mykey"));
        output.push(await handy.append("mykey", "Hello"));
        output.push(await handy.append("mykey", " World"));
        output.push(await handy.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
test("scripts/redis-doc/commands/append.md example 2", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/append.md");
    let snapshot: any;
    const commands = [
        `await handy.append("ts", "0043")`,
        `await handy.append("ts", "0035")`,
        `await handy.getrange("ts", 0, 3)`,
        `await handy.getrange("ts", 4, 7)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.append("ts", "0043"));
        output.push(await handy.append("ts", "0035"));
        output.push(await handy.getrange("ts", 0, 3));
        output.push(await handy.getrange("ts", 4, 7));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 33)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
