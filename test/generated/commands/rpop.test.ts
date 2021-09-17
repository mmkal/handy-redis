import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/rpop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "one", "two", "three", "four", "five");
    outputs.r1 = await client.rpop("mylist");
    outputs.r2 = await client.rpop("mylist", 2);
    outputs.r3 = await client.lrange("mylist", 0, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 5,
          "r1": "five",
          "r2": Array [
            "four",
            "three",
          ],
          "r3": Array [
            "one",
            "two",
          ],
        }
    `);
});
