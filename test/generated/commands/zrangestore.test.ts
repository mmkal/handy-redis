import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrangestore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("srczset", [1, "one"], [2, "two"], [3, "three"], [4, "four"]);
    outputs.r1 = await client.zrangestore("dstzset", "srczset", "2", "-1");
    outputs.r2 = await client.zrange("dstzset", "0", "-1");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 4,
          "r1": 2,
          "r2": Array [
            "three",
            "four",
          ],
        }
    `);
});
