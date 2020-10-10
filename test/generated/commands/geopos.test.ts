import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/geopos.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd(
        "Sicily",
        [13.361389, 38.115556, "Palermo"],
        [15.087269, 37.502669, "Catania"]
    );
    outputs.r1 = await client.geopos(
        "Sicily",
        "Palermo",
        "Catania",
        "NonExisting"
    );

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r1": "ignoreDecimals => 13.??,38.??,15.??,37.??,",
        }
    `);
});
