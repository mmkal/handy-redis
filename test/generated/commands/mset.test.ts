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

test("scripts/redis-doc/commands/mset.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/mset.md");
    let snapshot: any;
    const commands = [
        `await handy.mset(["key1", "Hello"], ["key2", "World"])`,
        `await handy.get("key1")`,
        `await handy.get("key2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.mset(["key1", "Hello"], ["key2", "World"]));
        output.push(await handy.get("key1"));
        output.push(await handy.get("key2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 55)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
