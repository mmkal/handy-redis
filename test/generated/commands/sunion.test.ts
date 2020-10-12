import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/sunion.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("key1", "a");
    outputs.r1 = await client.sadd("key1", "b");
    outputs.r2 = await client.sadd("key1", "c");
    outputs.r3 = await client.sadd("key2", "c");
    outputs.r4 = await client.sadd("key2", "d");
    outputs.r5 = await client.sadd("key2", "e");
    outputs.r6 = await client.sunion("key1", "key2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": 1,
          "r4": 1,
          "r5": 1,
          "r6": "sortArrays => [ 'a', 'b', 'c', 'd', 'e' ]",
        }
    `);
});
