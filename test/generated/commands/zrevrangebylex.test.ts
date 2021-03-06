import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrevrangebylex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"]);
    outputs.r1 = await client.zrevrangebylex("myzset", "[c", "-");
    outputs.r2 = await client.zrevrangebylex("myzset", "(c", "-");
    outputs.r3 = await client.zrevrangebylex("myzset", "(g", "[aaa");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 7,
          "r1": Array [
            "c",
            "b",
            "a",
          ],
          "r2": Array [
            "b",
            "a",
          ],
          "r3": Array [
            "f",
            "e",
            "d",
            "c",
            "b",
          ],
        }
    `);
});
