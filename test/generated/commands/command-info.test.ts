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

test("scripts/redis-doc/commands/command-info.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/command-info.md");
    let snapshot: any;
    const commands = [
        `await handy.command("INFO", "get", "set", "eval")`,
        `await handy.command("INFO", "foo", "evalsha", "config", "bar")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.command("INFO", "get", "set", "eval"));
        output.push(await handy.command("INFO", "foo", "evalsha", "config", "bar"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 63)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
