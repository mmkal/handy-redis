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

test("scripts/redis-doc/commands/georadius.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/georadius.md");
    let snapshot: any;
    const commands = [
        `await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])`,
        `await handy.georadius("Sicily", 15, 37, 200, "km", "WITHDIST")`,
        `await handy.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD")`,
        `await handy.georadius("Sicily", 15, 37, 200, "km", "WITHDIST", "WITHCOORD")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]));
        output.push(await handy.georadius("Sicily", 15, 37, 200, "km", "WITHDIST"));
        output.push(await handy.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD"));
        output.push(await handy.georadius("Sicily", 15, 37, 200, "km", "WITHDIST", "WITHCOORD"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 99)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});