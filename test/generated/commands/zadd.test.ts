import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zadd.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [1, "uno"]);
    outputs.r2 = await client.zadd("myzset", [2, "two"], [3, "three"]);
    outputs.r3 = await client.zrange("myzset", "0", "-1", "WITHSCORES");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 2,
          "r3": Array [
            "one",
            "1",
            "uno",
            "1",
            "two",
            "2",
            "three",
            "3",
          ],
        }
    `);
});
