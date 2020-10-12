import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrevrangebyscore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    // Error decoding command `ZREVRANGEBYSCORE myzset +inf -inf`:

    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 2
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 3
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 3
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 4
    // +inf parsed into a bad number NaN
    // ---
    outputs.r4 = await client.zrevrangebyscore("myzset", 2, 1);
    // Error decoding command `ZREVRANGEBYSCORE myzset 2 (1`:

    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 2
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 1
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 3
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 3
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 4
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // Error decoding command `ZREVRANGEBYSCORE myzset (2 (1`:

    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 2
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 3
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 3
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 4
    // (2 parsed into a bad number NaN
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r4": Array [
            "two",
            "one",
          ],
        }
    `);
});
