import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/geodist.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);
    outputs.r1 = await client.geodist("Sicily", "Palermo", "Catania");
    outputs.r2 = await client.geodist("Sicily", "Palermo", "Catania", "km");
    outputs.r3 = await client.geodist("Sicily", "Palermo", "Catania", "mi");
    outputs.r4 = await client.geodist("Sicily", "Foo", "Bar");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r1": "ignoreDecimals => 166274.??",
          "r2": "ignoreDecimals => 166.??",
          "r3": "ignoreDecimals => 103.??",
          "r4": null,
        }
    `);
});
