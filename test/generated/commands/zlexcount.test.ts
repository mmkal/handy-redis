import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zlexcount.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]);
    outputs.r1 = await client.zadd("myzset", [0, "f"], [0, "g"]);
    outputs.r2 = await client.zlexcount("myzset", "-", "+");
    outputs.r3 = await client.zlexcount("myzset", "[b", "[f");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 5,
          "r1": 2,
          "r2": 7,
          "r3": 5,
        }
    `);
});
