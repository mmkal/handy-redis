import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/getset.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.incr("mycounter");
    outputs.r1 = await client.getset("mycounter", "0");
    outputs.r2 = await client.get("mycounter");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": "1",
          "r2": "0",
        }
    `);
});

test("docs/redis-doc/commands/getset.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.getset("mykey", "World");
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "Hello",
          "r2": "World",
        }
    `);
});
