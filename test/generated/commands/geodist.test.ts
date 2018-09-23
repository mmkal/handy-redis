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

test("scripts/redis-doc/commands/geodist.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/geodist.md");
    let snapshot: any;
    const commands = [
        `await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])`,
        `await handy.geodist("Sicily", "Palermo", "Catania")`,
        `await handy.geodist("Sicily", "Palermo", "Catania", "km")`,
        `await handy.geodist("Sicily", "Palermo", "Catania", "mi")`,
        `await handy.geodist("Sicily", "Foo", "Bar")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]));
        output.push(await handy.geodist("Sicily", "Palermo", "Catania"));
        output.push(await handy.geodist("Sicily", "Palermo", "Catania", "km"));
        output.push(await handy.geodist("Sicily", "Palermo", "Catania", "mi"));
        output.push(await handy.geodist("Sicily", "Foo", "Bar"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 99)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
