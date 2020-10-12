import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zremrangebylex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [0, "aaaa"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]);
    outputs.r1 = await client.zadd("myzset", [0, "foo"], [0, "zap"], [0, "zip"], [0, "ALPHA"], [0, "alpha"]);
    outputs.r2 = await client.zrange("myzset", 0, -1);
    outputs.r3 = await client.zremrangebylex("myzset", "[alpha", "[omega");
    outputs.r4 = await client.zrange("myzset", 0, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 5,
          "r1": 5,
          "r2": Array [
            "ALPHA",
            "aaaa",
            "alpha",
            "b",
            "c",
            "d",
            "e",
            "foo",
            "zap",
            "zip",
          ],
          "r3": 6,
          "r4": Array [
            "ALPHA",
            "aaaa",
            "zap",
            "zip",
          ],
        }
    `);
});
