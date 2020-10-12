import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrangebylex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"]);
    outputs.r1 = await client.zrangebylex("myzset", "-", "[c");
    outputs.r2 = await client.zrangebylex("myzset", "-", "(c");
    outputs.r3 = await client.zrangebylex("myzset", "[aaa", "(g");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 7,
          "r1": Array [
            "a",
            "b",
            "c",
          ],
          "r2": Array [
            "a",
            "b",
          ],
          "r3": Array [
            "b",
            "c",
            "d",
            "e",
            "f",
          ],
        }
    `);
});
