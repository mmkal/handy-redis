import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/redis-doc/commands/geodist.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/geodist.md");
    let snapshot: any;
    const commands = [
        `await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])`,
        `await client.geodist("Sicily", "Palermo", "Catania")`,
        `await client.geodist("Sicily", "Palermo", "Catania", "km")`,
        `await client.geodist("Sicily", "Palermo", "Catania", "mi")`,
        `await client.geodist("Sicily", "Foo", "Bar")`,
    ];
    const output: any[] = [];
    try {
        output.push(
            await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"])
        );
        output.push(await client.geodist("Sicily", "Palermo", "Catania"));
        output.push(await client.geodist("Sicily", "Palermo", "Catania", "km"));
        output.push(await client.geodist("Sicily", "Palermo", "Catania", "mi"));
        output.push(await client.geodist("Sicily", "Foo", "Bar"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 100)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
