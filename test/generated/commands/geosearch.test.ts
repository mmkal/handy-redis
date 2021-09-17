import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/geosearch.md example 1", async () => {
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
    // Error decoding command `GEOSEARCH Sicily FROMLONLAT 15 37 BYRADIUS 200 km ASC`:

    // decoding GEOSEARCH overload 0 (key): {name:'key',schema:{title:'key',type:'string'}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYRADIUS,200,km,ASC], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: FROMLONLAT,15,37,BYRADIUS,200,km,ASC
    // ---
    // decoding GEOSEARCH overload 1 (key,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // [...truncated]
    // decoding GEOSEARCH overload 511 (key,FROMMEMBER,FROMLONLAT,circle,box,order,count,withcoord,withdist,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'FROMMEMBER',optional:true,schema:{title:'FROMMEMBER',type:'array',items:[{type:'string',const:'FROMMEMBER'},{title:'member',type:'string'}]}},{name:'FROMLONLAT',optional:true,schema:{title:'FROMLONLAT',type:'array',items:[{type:'string',const:'FROMLONLAT'},{title:'longitude, latitude',type:'array',items:[{title:'longitude',type:'number'},{title:'latitude',type:'number'}]}]}},{name:'circle',optional:true,schema:{title:'circle',type:'array',items:[{title:'BYRADIUS',type:'array',items:[{type:'string',const:'BYRADIUS'},{title:'radius',type:'number'}]},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'box',optional:true,schema:{title:'box',type:'array',items:[{title:'BYBOX',type:'array',items:[{type:'string',const:'BYBOX'},{title:'width',type:'number'}]},{title:'height',type:'number'},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'order',optional:true,schema:{title:'order',type:'string',enum:['ASC','DESC']}},{name:'count',optional:true,schema:{title:'count',anyOf:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{type:'array',items:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{title:'any',type:'string',enum:['ANY']}]}]}},{name:'withcoord',optional:true,schema:{title:'withcoord',type:'string',enum:['WITHCOORD']}},{name:'withdist',optional:true,schema:{title:'withdist',type:'string',enum:['WITHDIST']}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYRADIUS,200,km,ASC], target args remainin count: 9
    // Decoding tuple items
    // Expected FROMMEMBER, got FROMLONLAT
    // ---
    // Error decoding command `GEOSEARCH Sicily FROMLONLAT 15 37 BYBOX 400 400 km ASC WITHCOORD WITHDIST`:

    // decoding GEOSEARCH overload 0 (key): {name:'key',schema:{title:'key',type:'string'}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST], target args remainin count: 0
    // Tokens remain but no target args left! Tokens: FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST
    // ---
    // decoding GEOSEARCH overload 1 (key,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // [...truncated]
    // decoding GEOSEARCH overload 511 (key,FROMMEMBER,FROMLONLAT,circle,box,order,count,withcoord,withdist,withhash): {name:'key',schema:{title:'key',type:'string'}},{name:'FROMMEMBER',optional:true,schema:{title:'FROMMEMBER',type:'array',items:[{type:'string',const:'FROMMEMBER'},{title:'member',type:'string'}]}},{name:'FROMLONLAT',optional:true,schema:{title:'FROMLONLAT',type:'array',items:[{type:'string',const:'FROMLONLAT'},{title:'longitude, latitude',type:'array',items:[{title:'longitude',type:'number'},{title:'latitude',type:'number'}]}]}},{name:'circle',optional:true,schema:{title:'circle',type:'array',items:[{title:'BYRADIUS',type:'array',items:[{type:'string',const:'BYRADIUS'},{title:'radius',type:'number'}]},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'box',optional:true,schema:{title:'box',type:'array',items:[{title:'BYBOX',type:'array',items:[{type:'string',const:'BYBOX'},{title:'width',type:'number'}]},{title:'height',type:'number'},{title:'unit',type:'string',enum:['m','km','ft','mi']}]}},{name:'order',optional:true,schema:{title:'order',type:'string',enum:['ASC','DESC']}},{name:'count',optional:true,schema:{title:'count',anyOf:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{type:'array',items:[{title:'COUNT',type:'array',items:[{type:'string',const:'COUNT'},{title:'count',type:'integer'}]},{title:'any',type:'string',enum:['ANY']}]}]}},{name:'withcoord',optional:true,schema:{title:'withcoord',type:'string',enum:['WITHCOORD']}},{name:'withdist',optional:true,schema:{title:'withdist',type:'string',enum:['WITHDIST']}},{name:'withhash',optional:true,schema:{title:'withhash',type:'string',enum:['WITHHASH']}}
    // Sicily successfully decoded as key (string). Decoded value Sicily. Tokens remaining [FROMLONLAT,15,37,BYBOX,400,400,km,ASC,WITHCOORD,WITHDIST], target args remainin count: 9
    // Decoding tuple items
    // Expected FROMMEMBER, got FROMLONLAT
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 2,
        }
    `);
});
