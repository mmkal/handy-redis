import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/blmpop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.del("mylist", "mylist2");
    outputs.r1 = await client.lpush("mylist", "one", "two", "three", "four", "five");
    // Error decoding command `BLMPOP 1 1 mylist LEFT COUNT 2`:

    // decoding BLMPOP overload 0 (timeout,numkeys,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [1,mylist,LEFT,COUNT,2], target args remainin count: 2
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT,COUNT,2], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 1 (timeout,numkeys,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [1,mylist,LEFT,COUNT,2], target args remainin count: 3
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT,COUNT,2], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 2 (timeout,numkeys,key,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [1,mylist,LEFT,COUNT,2], target args remainin count: 3
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT,COUNT,2], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding BLMPOP overload 3 (timeout,numkeys,key,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [1,mylist,LEFT,COUNT,2], target args remainin count: 4
    // 1 successfully decoded as numkeys (string). Decoded value 1. Tokens remaining [mylist,LEFT,COUNT,2], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r3 = await client.lrange("mylist", 0, -1);
    outputs.r4 = await client.lpush("mylist2", "a", "b", "c", "d", "e");
    // Error decoding command `BLMPOP 1 2 mylist mylist2 LEFT COUNT 3`:

    // decoding BLMPOP overload 0 (timeout,numkeys,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,LEFT,COUNT,3], target args remainin count: 2
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,LEFT,COUNT,3], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 1 (timeout,numkeys,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,LEFT,COUNT,3], target args remainin count: 3
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,LEFT,COUNT,3], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 2 (timeout,numkeys,key,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,LEFT,COUNT,3], target args remainin count: 3
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,LEFT,COUNT,3], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding BLMPOP overload 3 (timeout,numkeys,key,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,LEFT,COUNT,3], target args remainin count: 4
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,LEFT,COUNT,3], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r6 = await client.lrange("mylist", 0, -1);
    // Error decoding command `BLMPOP 1 2 mylist mylist2 RIGHT COUNT 10`:

    // decoding BLMPOP overload 0 (timeout,numkeys,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 2
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 1
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 1 (timeout,numkeys,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 3
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 2
    // Expected one of LEFT,RIGHT, got mylist
    // ---
    // decoding BLMPOP overload 2 (timeout,numkeys,key,where): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 3
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 2
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    // decoding BLMPOP overload 3 (timeout,numkeys,key,where,COUNT): {name:'timeout',schema:{title:'timeout',type:'number'}},{name:'numkeys',schema:{title:'numkeys',type:'integer'}},{name:'key',optional:true,schema:{title:'key',type:'array',items:{title:'key',type:'string'}}},{name:'where',schema:{title:'where',type:'string',enum:['LEFT','RIGHT']}},{name:'COUNT',optional:true,schema:{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]}}
    // 1 successfully decoded as timeout (string). Decoded value 1. Tokens remaining [2,mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 4
    // 2 successfully decoded as numkeys (string). Decoded value 2. Tokens remaining [mylist,mylist2,RIGHT,COUNT,10], target args remainin count: 3
    // Not smart enough to deal with arrays in the beginning or middle of arg lists
    // ---
    outputs.r8 = await client.lrange("mylist2", 0, -1);
    outputs.r9 = await client.exists("mylist", "mylist2");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 0,
          "r1": 5,
          "r3": Array [
            "five",
            "four",
            "three",
            "two",
            "one",
          ],
          "r4": 5,
          "r6": Array [
            "five",
            "four",
            "three",
            "two",
            "one",
          ],
          "r8": Array [
            "e",
            "d",
            "c",
            "b",
            "a",
          ],
          "r9": 2,
        }
    `);
});
