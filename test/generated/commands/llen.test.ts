import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/llen.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.lpush("mylist", "World");
    outputs.r1 = await client.lpush("mylist", "Hello");
    outputs.r2 = await client.llen("mylist");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 2,
        }
    `);
});
