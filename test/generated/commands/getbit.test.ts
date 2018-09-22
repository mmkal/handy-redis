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

test("scripts/redis-doc/commands/getbit.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/getbit.md");
    let snapshot: any;
    const commands = [
        `await handy.setbit("mykey", 7, "1")`,
        `await handy.getbit("mykey", 0)`,
        `await handy.getbit("mykey", 7)`,
        `await handy.getbit("mykey", 100)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.setbit("mykey", 7, "1"));
        output.push(await handy.getbit("mykey", 0));
        output.push(await handy.getbit("mykey", 7));
        output.push(await handy.getbit("mykey", 100));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 36)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
