import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/bitop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "foobar");
    outputs.r1 = await client.set("key2", "abcdef");
    outputs.r2 = await client.bitop("AND", "dest", "key1", "key2");
    outputs.r3 = await client.get("dest");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "OK",
          "r2": 6,
          "r3": "\`bc\`ab",
        }
    `);
});
