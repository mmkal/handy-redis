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

it("scripts/redis-doc/commands/geoadd.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/geoadd.md");
    let snapshot: any;
    const commands = [
        `await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo")`,
        `await client.geodist("Sicily", "Palermo", "Catania")`,
        `await client.georadius("Sicily", 15, 37, 100, "km")`,
        `await client.georadius("Sicily", 15, 37, 200, "km")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo"));
        output.push(await client.geodist("Sicily", "Palermo", "Catania"));
        output.push(await client.georadius("Sicily", 15, 37, 100, "km"));
        output.push(await client.georadius("Sicily", 15, 37, 200, "km"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 63)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
