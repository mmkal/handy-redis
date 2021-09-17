import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lmpop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `LMPOP 2 non1 non2 LEFT COUNT 10`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [non1,non2,LEFT,COUNT,10], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got non1
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [non1,non2,LEFT,COUNT,10], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got non1
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [non1,non2,LEFT,COUNT,10], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [non1,non2,LEFT,COUNT,10], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r1 = await client.lpush("mylist", "one", "two", "three", "four", "five");
    // Error decoding command `LMPOP 1 mylist LEFT`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r3 = await client.lrange("mylist", 0, -1);
    // Error decoding command `LMPOP 1 mylist RIGHT COUNT 10`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,RIGHT,COUNT,10], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,RIGHT,COUNT,10], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,RIGHT,COUNT,10], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,RIGHT,COUNT,10], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r5 = await client.lpush("mylist", "one", "two", "three", "four", "five");
    outputs.r6 = await client.lpush("mylist2", "a", "b", "c", "d", "e");
    // Error decoding command `LMPOP 2 mylist mylist2 right count 3`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,3], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,3], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,3], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,3], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r8 = await client.lrange("mylist", 0, -1);
    // Error decoding command `LMPOP 2 mylist mylist2 right count 5`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,5], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,5], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,5], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,5], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // Error decoding command `LMPOP 2 mylist mylist2 right count 10`:

    // decoding LMPOP overload 0 (numkeys,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,10], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 1 (numkeys,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,10], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding LMPOP overload 2 (numkeys,key,where): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,10], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding LMPOP overload 3 (numkeys,key,where,COUNT): { name: 'numkeys', schema: { title: 'numkeys', type: 'integer' }, toString: [Function (anonymous)] },{ name: 'key', optional: true, schema: { title: 'key', type: 'array', items: { title: 'key', type: 'string' } }, toString: [Function (anonymous)] },{ name: 'where', schema: { title: 'where', type: 'string', enum: [ 'LEFT', 'RIGHT' ] }, toString: [Function (anonymous)] },{ name: 'COUNT', optional: true, schema: { title: 'COUNT', type: 'array', items: [ { type: 'string', const: 'COUNT' }, { title: 'count', type: 'integer' } ] }, toString: [Function (anonymous)] }
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,right,count,10], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r11 = await client.exists("mylist", "mylist2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r1": 5,
          "r11": 2,
          "r3": Array [
            "five",
            "four",
            "three",
            "two",
            "one",
          ],
          "r5": 10,
          "r6": 5,
          "r8": Array [
            "five",
            "four",
            "three",
            "two",
            "one",
            "five",
            "four",
            "three",
            "two",
            "one",
          ],
        }
    `);
});
