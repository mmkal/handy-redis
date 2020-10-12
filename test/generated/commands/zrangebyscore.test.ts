import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrangebyscore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    // Error decoding command `ZRANGEBYSCORE myzset -inf +inf`:

    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 2
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 3
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 3
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 4
    // -inf parsed into a bad number NaN
    // ---
    outputs.r4 = await client.zrangebyscore("myzset", 1, 2);
    // Error decoding command `ZRANGEBYSCORE myzset (1 2`:

    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 4
    // (1 parsed into a bad number NaN
    // ---
    // Error decoding command `ZRANGEBYSCORE myzset (1 (2`:

    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 4
    // (1 parsed into a bad number NaN
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r4": Array [
            "one",
            "two",
          ],
        }
    `);
});
