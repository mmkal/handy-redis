import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrangebyscore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    outputs.r3 = await client.zrangebyscore("myzset", "-inf", "+inf");
    outputs.r4 = await client.zrangebyscore("myzset", 1, 2);
    outputs.r5 = await client.zrangebyscore("myzset", "(1", 2);
    outputs.r6 = await client.zrangebyscore("myzset", "(1", "(2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r4": Array [
            "one",
            "two",
          ],
        }
    `);
});
