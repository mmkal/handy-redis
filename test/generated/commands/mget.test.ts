import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/mget.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "Hello");
    outputs.r1 = await client.set("key2", "World");
    outputs.r2 = await client.mget("key1", "key2", "nonexisting");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "OK",
          "r2": Array [
            "Hello",
            "World",
            null,
          ],
        }
    `);
});
