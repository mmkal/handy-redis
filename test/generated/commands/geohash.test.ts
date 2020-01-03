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

it("scripts/redis-doc/commands/geohash.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/geohash.md");
    let snapshot: any;
    const commands = [
        `await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo")`,
        `await client.geohash("Sicily", "Palermo", "Catania")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo"));
        output.push(await client.geohash("Sicily", "Palermo", "Catania"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 63)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
