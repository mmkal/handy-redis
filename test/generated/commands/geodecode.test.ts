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

test("scripts/redis-doc/commands/geodecode.md example 1", async t => {
    const overrider = getOverride("scripts/redis-doc/commands/geodecode.md");
    let snapshot: any;
    const commands = [
        `await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])`,
        `await handy.zscore("Sicily", "Palermo")`,
        "// not implemented by node redis: await handy.geodecode(`Couldn't format arguments: Couldn't find command \"geodecode\"`)",
    ];
    const output: any[] = [];
    try {
        output.push(await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]));
        output.push(await handy.zscore("Sicily", "Palermo"));
        output.push("// not implemented by node redis: await handy.geodecode(`Couldn't format arguments: Couldn't find command \"geodecode\"`)");
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 120)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    t.snapshot(snapshot);
});
