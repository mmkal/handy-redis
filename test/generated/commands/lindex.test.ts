import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lindex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.lpush("mylist", "World");
    outputs.r1 = await client.lpush("mylist", "Hello");
    outputs.r2 = await client.lindex("mylist", 0);
    outputs.r3 = await client.lindex("mylist", -1);
    outputs.r4 = await client.lindex("mylist", 3);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": "Hello",
          "r3": "World",
          "r4": null,
        }
    `);
});
