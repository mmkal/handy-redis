import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    outputs.r3 = await client.zrange("myzset", 0, -1);
    outputs.r4 = await client.zrange("myzset", 2, 3);
    outputs.r5 = await client.zrange("myzset", -2, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": Array [
            "one",
            "two",
            "three",
          ],
          "r4": Array [
            "three",
          ],
          "r5": Array [
            "two",
            "three",
          ],
        }
    `);
});

test("docs/redis-doc/commands/zrange.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zrange("myzset", 0, 1, "WITHSCORES");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": Array [],
        }
    `);
});
