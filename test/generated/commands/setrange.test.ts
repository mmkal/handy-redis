import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/setrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "Hello World");
    outputs.r1 = await client.setrange("key1", 6, "Redis");
    outputs.r2 = await client.get("key1");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "\\"OK\\"",
          "r1": "11",
          "r2": "\\"Hello Redis\\"",
        }
    `);
});

test("docs/redis-doc/commands/setrange.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setrange("key2", 6, "Redis");
    outputs.r1 = await client.get("key2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "11",
          "r1": "\\"\\\\u0000\\\\u0000\\\\u0000\\\\u0000\\\\u0000\\\\u0000Redis\\"",
        }
    `);
});
