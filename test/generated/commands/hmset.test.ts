import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hmset.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hmset("myhash", ["field1", "Hello"], ["field2", "World"]);
    outputs.r1 = await client.hget("myhash", "field1");
    outputs.r2 = await client.hget("myhash", "field2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "Hello",
          "r2": "World",
        }
    `);
});
