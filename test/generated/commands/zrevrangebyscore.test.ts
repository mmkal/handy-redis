import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrevrangebyscore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    outputs.r3 = await client.zrevrangebyscore("myzset", "+inf", "-inf");
    outputs.r4 = await client.zrevrangebyscore("myzset", 2, 1);
    outputs.r5 = await client.zrevrangebyscore("myzset", 2, "(1");
    outputs.r6 = await client.zrevrangebyscore("myzset", "(2", "(1");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": Array [
            "three",
            "two",
            "one",
          ],
          "r4": Array [
            "two",
            "one",
          ],
          "r5": Array [
            "two",
          ],
          "r6": Array [],
        }
    `);
});
