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

test("scripts/redis-doc/commands/incrbyfloat.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/incrbyfloat.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "10.50")`,
        `await handy.incrbyfloat("mykey", 0.1)`,
        `await handy.incrbyfloat("mykey", -5)`,
        `await handy.set("mykey", "5.0e3")`,
        `await handy.incrbyfloat("mykey", 200)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "10.50"));
        output.push(await handy.incrbyfloat("mykey", 0.1));
        output.push(await handy.incrbyfloat("mykey", -5));
        output.push(await handy.set("mykey", "5.0e3"));
        output.push(await handy.incrbyfloat("mykey", 200));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
