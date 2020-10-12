import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/geoadd.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);
    outputs.r1 = await client.geodist("Sicily", "Palermo", "Catania");
    outputs.r2 = await client.georadius("Sicily", 15, 37, 100, "km");
    outputs.r3 = await client.georadius("Sicily", 15, 37, 200, "km");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r1": "ignoreDecimals => 166274.??",
          "r2": Array [
            "Catania",
          ],
          "r3": Array [
            "Palermo",
            "Catania",
          ],
        }
    `);
});
