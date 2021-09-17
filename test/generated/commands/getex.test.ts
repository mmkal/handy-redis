import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/getex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.getex("mykey");
    outputs.r2 = await client.ttl("mykey");
    // Error decoding command `GETEX mykey EX 60`:

    // decoding GETEX overload 0 (key): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [EX,60], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: EX,60
    // ---
    // decoding GETEX overload 1 (key,expiration): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] },{ name: 'expiration', optional: true, schema: { title: 'expiration', type: 'string', enum: [ 'EX seconds', 'PX milliseconds', 'EXAT timestamp', 'PXAT milliseconds-timestamp', 'PERSIST' ] }, toString: [Function (anonymous)] }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [EX,60], target args remainin count: 1
    // Expected one of EX seconds,PX milliseconds,EXAT timestamp,PXAT milliseconds-timestamp,PERSIST, got EX
    // ---
    outputs.r4 = await client.ttl("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "Hello",
          "r2": -1,
          "r4": -1,
        }
    `);
});
