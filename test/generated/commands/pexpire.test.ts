import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/pexpire.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.pexpire("mykey", 1500);
    outputs.r2 = await client.ttl("mykey");
    outputs.r3 = await client.pttl("mykey");
    // "XX","NX" not supported in redis v6! outputs.r4 = await client.pexpire("mykey",1000,"XX")
    outputs.r5 = await client.ttl("mykey");
    // "XX","NX" not supported in redis v6! outputs.r6 = await client.pexpire("mykey",1000,"NX")
    outputs.r7 = await client.ttl("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "someNumberValue => [a number]",
          "r2": "someNumberValue => [a number]",
          "r3": "someNumberValue => [a number]",
          "r5": "someNumberValue => [a number]",
          "r7": "someNumberValue => [a number]",
        }
    `);
});
