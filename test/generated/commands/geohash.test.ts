import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/geohash.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);
    outputs.r1 = await client.geohash("Sicily", "Palermo", "Catania");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r1": "ignoreDecimals => sqc8b49rny0,sqdtr74hyu0",
        }
    `);
});
