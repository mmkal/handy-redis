import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hkeys.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hset("myhash", ["field1", "Hello"]);
    outputs.r1 = await client.hset("myhash", ["field2", "World"]);
    outputs.r2 = await client.hkeys("myhash");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": Array [
            "field1",
            "field2",
          ],
        }
    `);
});
