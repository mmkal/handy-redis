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
    // ---
    // decoding ZRANGE overload 1 (key,min,max,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 2
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 1
    // Expected one of WITHSCORES, got BYSCORE
    // ---
    // decoding ZRANGE overload 2 (key,min,max,LIMIT): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 2
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 1
    // Decoding tuple items
    // Expected LIMIT, got BYSCORE
    // ---
    // decoding ZRANGE overload 3 (key,min,max,LIMIT,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // Decoding tuple items
    // Expected LIMIT, got BYSCORE
    // ---
    // decoding ZRANGE overload 4 (key,min,max,rev): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 2
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 1
    // Expected one of REV, got BYSCORE
    // ---
    // decoding ZRANGE overload 5 (key,min,max,rev,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // Expected one of REV, got BYSCORE
    // ---
    // decoding ZRANGE overload 6 (key,min,max,rev,LIMIT): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // Expected one of REV, got BYSCORE
    // ---
    // decoding ZRANGE overload 7 (key,min,max,rev,LIMIT,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 3
    // Expected one of REV, got BYSCORE
    // ---
    // decoding ZRANGE overload 8 (key,min,max,sortby): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 2
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 1
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: LIMIT,1,1
    // ---
    // decoding ZRANGE overload 9 (key,min,max,sortby,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 1
    // Expected one of WITHSCORES, got LIMIT
    // ---
    // decoding ZRANGE overload 10 (key,min,max,sortby,LIMIT): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 1
    // Decoding tuple items
    // LIMIT successfully decoded as LIMIT_0 (string). Decoded value LIMIT. Tokens remaining [1], target args remainin count: 1
    // Decoding tuple items
    // 1 successfully decoded as LIMIT_1_0 (string). Decoded value 1. Tokens remaining [], target args remainin count: 1
    // Target args remain but no tokens left! Target args [{name:'LIMIT_1_1',schema:{title:'count',type:'integer'}}]
    // ---
    // decoding ZRANGE overload 11 (key,min,max,sortby,LIMIT,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 3
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 2
    // Decoding tuple items
    // LIMIT successfully decoded as LIMIT_0 (string). Decoded value LIMIT. Tokens remaining [1], target args remainin count: 1
    // Decoding tuple items
    // 1 successfully decoded as LIMIT_1_0 (string). Decoded value 1. Tokens remaining [], target args remainin count: 1
    // Target args remain but no tokens left! Target args [{name:'LIMIT_1_1',schema:{title:'count',type:'integer'}}]
    // ---
    // decoding ZRANGE overload 12 (key,min,max,sortby,rev): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 3
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 2
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 1
    // Expected one of REV, got LIMIT
    // ---
    // decoding ZRANGE overload 13 (key,min,max,sortby,rev,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 3
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 2
    // Expected one of REV, got LIMIT
    // ---
    // decoding ZRANGE overload 14 (key,min,max,sortby,rev,LIMIT): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 4
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 3
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 2
    // Expected one of REV, got LIMIT
    // ---
    // decoding ZRANGE overload 15 (key,min,max,sortby,rev,LIMIT,withscores): {name:'key',schema:{title:'key',type:'string'}},{name:'min',schema:{title:'min',type:'string'}},{name:'max',schema:{title:'max',type:'string'}},{name:'sortby',optional:true,schema:{title:'sortby',type:'string',enum:['BYSCORE','BYLEX']}},{name:'rev',optional:true,schema:{title:'rev',type:'string',enum:['REV']}},{name:'LIMIT',optional:true,schema:{title:'LIMIT',type:'array',items:[{type:'string',const:'LIMIT'},{title:'offset, count',type:'array',items:[{title:'offset',type:'integer'},{title:'count',type:'integer'}]}]}},{name:'withscores',optional:true,schema:{title:'withscores',type:'string',enum:['WITHSCORES']}}
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,+inf,BYSCORE,LIMIT,1,1], target args remainin count: 6
    // (1 successfully decoded as min (string). Decoded value (1. Tokens remaining [+inf,BYSCORE,LIMIT,1,1], target args remainin count: 5
    // +inf successfully decoded as max (string). Decoded value +inf. Tokens remaining [BYSCORE,LIMIT,1,1], target args remainin count: 4
    // BYSCORE successfully decoded as sortby (string). Decoded value BYSCORE. Tokens remaining [LIMIT,1,1], target args remainin count: 3
    // Expected one of REV, got LIMIT
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
