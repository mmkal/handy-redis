import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/decr.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "10");
    outputs.r1 = await client.decr("mykey");
    outputs.r2 = await client.set("mykey", "234293482390480948029348230948");
    outputs.r3 = await client.decr("mykey").catch(e => e);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 9,
          "r2": "OK",
          "r3": [ReplyError: ERR value is not an integer or out of range],
        }
    `);
});
