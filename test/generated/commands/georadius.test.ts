import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/georadius.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);
    outputs.r1 = await client.georadius("Sicily", 15, 37, 200, "km", "WITHDIST");
    outputs.r2 = await client.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD");
    outputs.r3 = await client.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD", "WITHDIST");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r1": "ignoreDecimals => Palermo,190.??,Catania,56.??",
          "r2": "ignoreDecimals => Palermo,13.??,38.??,Catania,15.??,37.??",
          "r3": "ignoreDecimals => Palermo,190.??,13.??,38.??,Catania,56.??,15.??,37.??",
        }
    `);
});
