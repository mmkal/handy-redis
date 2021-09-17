import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    outputs.r3 = await client.zrange("myzset", "0", "-1");
    outputs.r4 = await client.zrange("myzset", "2", "3");
    outputs.r5 = await client.zrange("myzset", "-2", "-1");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": Array [
            "one",
            "two",
            "three",
          ],
          "r4": Array [
            "three",
          ],
          "r5": Array [
            "two",
            "three",
          ],
        }
    `);
});

test("docs/redis-doc/commands/zrange.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zrange("myzset", "0", "1", "WITHSCORES");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": Array [],
        }
    `);
});

test("docs/redis-doc/commands/zrange.md example 3", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `ZRANGE myzset (1 +inf BYSCORE LIMIT 1 1`:

    // decoding ZRANGE overload 0 (key,min,max): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 2
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 1
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: BYSCORE,LIMIT,1,1
    // [...truncated]
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 4
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 3
    // Expected one of REV, got LIMIT
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
