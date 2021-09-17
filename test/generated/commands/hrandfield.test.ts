import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hrandfield.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // hrandfield gives a non-deterministic output! outputs.r0 = await client.hmset("coin",["heads","obverse"],["tails","reverse"],["edge","null"])
    // hrandfield gives a non-deterministic output! outputs.r1 = await client.hrandfield("coin")
    // hrandfield gives a non-deterministic output! outputs.r2 = await client.hrandfield("coin")
    // hrandfield gives a non-deterministic output! // Error decoding command `HRANDFIELD coin -5 WITHVALUES`:

    // hrandfield gives a non-deterministic output! // decoding HRANDFIELD overload 0 (key): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] }
    // hrandfield gives a non-deterministic output! // coin successfully decoded as key (string). Decoded value coin. Tokens remaining [-5,WITHVALUES], target args remainin count: 0
    // hrandfield gives a non-deterministic output! // Tokens remain but no target args left! Tokens: -5,WITHVALUES
    // hrandfield gives a non-deterministic output! // ---
    // hrandfield gives a non-deterministic output! // decoding HRANDFIELD overload 1 (key,options): { name: 'key', schema: { title: 'key', type: 'string' }, toString: [Function (anonymous)] },{ name: 'options', optional: true, schema: { title: 'options', anyOf: [ { title: 'count', type: 'integer' }, { type: 'array', items: [ { title: 'count', type: 'integer' }, { title: 'withvalues', type: 'string', enum: [ 'WITHVALUES' ] } ] } ] }, toString: [Function (anonymous)] }
    // hrandfield gives a non-deterministic output! // coin successfully decoded as key (string). Decoded value coin. Tokens remaining [-5,WITHVALUES], target args remainin count: 1
    // hrandfield gives a non-deterministic output! // -5 successfully decoded as options_variant0 (string). Decoded value -5. Tokens remaining [WITHVALUES], target args remainin count: 0
    // hrandfield gives a non-deterministic output! // Tokens remain but no target args left! Tokens: WITHVALUES
    // hrandfield gives a non-deterministic output! // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
