import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/persist.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.expire("mykey", 10);
    outputs.r2 = await client.ttl("mykey");
    outputs.r3 = await client.persist("mykey");
    outputs.r4 = await client.ttl("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 1,
          "r2": 10,
          "r3": 1,
          "r4": -1,
        }
    `);
});
