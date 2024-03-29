import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lpop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "one", "two", "three", "four", "five");
    outputs.r1 = await client.lpop("mylist");
    outputs.r2 = await client.lpop("mylist", 2);
    outputs.r3 = await client.lrange("mylist", 0, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 5,
          "r1": "one",
          "r2": Array [
            "two",
            "three",
          ],
          "r3": Array [
            "four",
            "five",
          ],
        }
    `);
});
