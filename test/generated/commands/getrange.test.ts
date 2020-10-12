import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/getrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "This is a string");
    outputs.r1 = await client.getrange("mykey", 0, 3);
    outputs.r2 = await client.getrange("mykey", -3, -1);
    outputs.r3 = await client.getrange("mykey", 0, -1);
    outputs.r4 = await client.getrange("mykey", 10, 100);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "This",
          "r2": "ing",
          "r3": "This is a string",
          "r4": "string",
        }
    `);
});
