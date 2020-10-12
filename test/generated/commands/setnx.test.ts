import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/setnx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setnx("mykey", "Hello");
    outputs.r1 = await client.setnx("mykey", "World");
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 0,
          "r2": "Hello",
        }
    `);
});
