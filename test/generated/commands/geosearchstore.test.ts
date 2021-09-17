import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/geosearchstore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);
    // Error decoding command `GEOADD Sicily 12.758489 38.788135 "edge1"   17.241510 38.788135 "edge2"`:

    // decoding GEOADD overload 0 (key,longitude, latitude, member): {name:'key',schema:{title:'key',type:'string'}},{name:'longitude, latitude, member',schema:{title:'longitude, latitude, member',type:'array',items:{title:'longitude, latitude, member',type:'array',items:[{title:'longitude',type:'number'},{title:'latitude',type:'number'},{title:'member',type:'string'}]}}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [12.758489,38.788135,edge1,17.241510,38.788135,edge2], target args remainin count: 1
    // Decoding array item
    // Decoding tuple items
    // 17.241510 parsed into a bad number 17.24151
    // [...truncated]
    // ---
    // decoding GEOADD overload 3 (key,condition,change,longitude, latitude, member): {name:'key',schema:{title:'key',type:'string'}},{name:'condition',optional:true,schema:{title:'condition',type:'string',enum:['NX','XX']}},{name:'change',optional:true,schema:{title:'change',type:'string',enum:['CH']}},{name:'longitude, latitude, member',schema:{title:'longitude, latitude, member',type:'array',items:{title:'longitude, latitude, member',type:'array',items:[{title:'longitude',type:'number'},{title:'latitude',type:'number'},{title:'member',type:'string'}]}}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [12.758489,38.788135,edge1,17.241510,38.788135,edge2], target args remainin count: 3
    // Expected one of NX,XX, got 12.758489
    // ---
    // Error decoding command `GEOSEARCHSTORE key1 Sicily FROMLONLAT 15 37 BYBOX 400 400 km ASC COUNT 3`:

    // decoding GEOSEARCHSTORE overload 0 (destination,source): {name:'destination',schema:{title:'destination',type:'string'}},{name:'source',schema:{title:'source',type:'string'}}
    // key1 successfully decoded as destination (string). Decoded value key1. Tokens remaining [Sicily,FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3], target args remainin count: 1
    // Sicily successfully decoded as source (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3
    // ---
    // [...truncated]
    // key1 successfully decoded as destination (string). Decoded value key1. Tokens remaining [Sicily,FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3], target args remainin count: 8
    // Sicily successfully decoded as source (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3], target args remainin count: 7
    // Decoding tuple items
    // Expected FROMMEMBER, got FROMLONLAT
    // ---
    // Error decoding command `GEOSEARCH key1 FROMLONLAT 15 37 BYBOX 400 400 km ASC WITHCOORD WITHDIST WITHHASH`:

    // decoding GEOSEARCH overload 0 (key): {name:'key',schema:{title:'key',type:'string'}}
    // key1 successfully decoded as key (string). Decoded value key1. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST,WITHHASH], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST,WITHHASH
    // ---
    // decoding GEOSEARCH overload 1 (key,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // [...truncated]
    // decoding GEOSEARCH overload 511 (key,FROMMEMBER,FROMLONLAT,circle,box,order,count,withcoord,withdist,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'FROMMEMBER',optional:true,schema:{title:'FROMMEMBER',type:'array',items:[{type:'string',const:'FROMMEMBER'},{title:'member',type:'string'}]}},{name:'FROMLONLAT',optional:true,schema:{title:'FROMLONLAT',type:'array',items:[{type:'string',const:'FROMLONLAT'},{title:'longitude, latitude',type:'array',items:[{title:'longitude',type:'number'},{title:'latitude',type:'number'}]}]}},{name:'circle',optional:true,schema:{title:'circle',type:'array',items:[{title:'BYRADIUS',type:'array',items:[{type:'string',const:'BYRADIUS'},{title:'radius',type:'number'}]},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'box',optional:true,schema:{title:'box',type:'array',items:[{title:'BYBOX',type:'array',items:[{type:'string',const:'BYBOX'},{title:'width',type:'number'}]},{title:'height',type:'number'},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'order',optional:true,schema:{title:'order',type:'string',enum:['ASC','DESC']}},{name:'count',optional:true,schema:{title:'count',anyOf:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{type:'array',items:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{title:'any',type:'string',enum:['ANY']}]}]}},{name:'withcoord',optional:true,schema:{title:'withcoord',type:'string',enum:['WITHCOORD']}},{name:'withdist',optional:true,schema:{title:'withdist',type:'string',enum:['WITHDIST']}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // key1 successfully decoded as key (string). Decoded value key1. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST,WITHHASH], target args remainin count: 9
    // Decoding tuple items
    // Expected FROMMEMBER, got FROMLONLAT
    // ---
    // Error decoding command `GEOSEARCHSTORE key2 Sicily FROMLONLAT 15 37 BYBOX 400 400 km ASC COUNT 3 STOREDIST`:

    // decoding GEOSEARCHSTORE overload 0 (destination,source): {name:'destination',schema:{title:'destination',type:'string'}},{name:'source',schema:{title:'source',type:'string'}}
    // key2 successfully decoded as destination (string). Decoded value key2. Tokens remaining [Sicily,FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3,STOREDIST], target args remainin count: 1
    // Sicily successfully decoded as source (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3,STOREDIST], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3,STOREDIST
    // ---
    // [...truncated]
    // key2 successfully decoded as destination (string). Decoded value key2. Tokens remaining [Sicily,FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3,STOREDIST], target args remainin count: 8
    // Sicily successfully decoded as source (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,COUNT,3,STOREDIST], target args remainin count: 7
    // Decoding tuple items
    // Expected FROMMEMBER, got FROMLONLAT
    // ---
    outputs.r5 = await client.zrange("key2", "0", "-1", "WITHSCORES");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
          "r5": Array [],
        }
    `);
});
