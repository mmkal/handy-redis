import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zrandmember.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // zrandmember gives a non-deterministic output! outputs.r0 = await client.zadd("dadi",[1,"uno"],[2,"due"],[3,"tre"],[4,"quattro"],[5,"cinque"],[6,"sei"])
    // zrandmember gives a non-deterministic output! outputs.r1 = await client.zrandmember("dadi")
    // zrandmember gives a non-deterministic output! outputs.r2 = await client.zrandmember("dadi")
    // zrandmember gives a non-deterministic output! // Error decoding command `ZRANDMEMBER dadi -5 WITHSCORES`:

    // zrandmember gives a non-deterministic output! // decoding ZRANDMEMBER overload 0 (key): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] }
    // zrandmember gives a non-deterministic output! // dadi successfully decoded as key (string). Decoded value dadi. Tokens remaining [-5,WITHSCORES], target args remainin count: 0
    // zrandmember gives a non-deterministic output! // Tokens remain but no target args left! Tokens: -5,WITHSCORES
    // zrandmember gives a non-deterministic output! // ---
    // zrandmember gives a non-deterministic output! // decoding ZRANDMEMBER overload 1 (key,options): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] },{ name: 'options', optional: true, schema: { title: 'options', anyOf: [ { title: 'count', type: 'integer' }, { type: 'array', items: [ { title: 'count', type: 'integer' }, { title: 'withscores', type: 'string', enum: [ 'WITHSCORES' ] } ] } ] }, toString: [Function (anonymous)] }
    // zrandmember gives a non-deterministic output! // dadi successfully decoded as key (string). Decoded value dadi. Tokens remaining [-5,WITHSCORES], target args remainin count: 1
    // zrandmember gives a non-deterministic output! // -5 successfully decoded as options_variant0 (string). Decoded value -5. Tokens remaining [WITHSCORES], target args remainin count: 0
    // zrandmember gives a non-deterministic output! // Tokens remain but no target args left! Tokens: WITHSCORES
    // zrandmember gives a non-deterministic output! // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 6,
          "r1": "quattro",
          "r2": "tre",
        }
    `);
});
