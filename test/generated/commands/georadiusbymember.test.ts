import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let handy: IHandyRedis;
beforeAll(async () => {
    handy = createHandyClient();
    await handy.ping("ping");
});
beforeEach(async () => {
    await handy.flushall();
});

it("scripts/redis-doc/commands/georadiusbymember.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/georadiusbymember.md");
    let snapshot: any;
    const commands = [
        `await handy.geoadd("Sicily", [13.583333, 37.316667, "Agrigento"])`,
        `await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])`,
        `await handy.georadiusbymember("Sicily", "Agrigento", 100, "km")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.geoadd("Sicily", [13.583333, 37.316667, "Agrigento"]));
        output.push(await handy.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]));
        output.push(await handy.georadiusbymember("Sicily", "Agrigento", 100, "km"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 99)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
