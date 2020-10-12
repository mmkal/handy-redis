import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/pexpireat.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.pexpireat("mykey", "1555555555005");
    outputs.r2 = await client.ttl("mykey");
    outputs.r3 = await client.pttl("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "typeOf => string",
          "r1": "typeOf => number",
          "r2": "typeOf => number",
          "r3": "typeOf => number",
        }
    `);
});
