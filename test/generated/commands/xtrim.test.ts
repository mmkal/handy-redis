import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/xtrim.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd("mystream", "*", ["field1", "A"], ["field2", "B"], ["field3", "C"], ["field4", "D"]);
    // Error decoding command `XTRIM mystream MAXLEN 2`:

    // decoding XTRIM overload 0 (key,strategy,xtrim_block_2): { name: 'key', schema: { type: 'string' } },{ name: 'strategy', schema: { type: 'string', enum: [ 'MAXLEN' ] } },{ name: 'xtrim_block_2', schema: { type: 'array', items: [ { type: 'string', enum: [ '=', '~' ] }, { type: 'integer' } ] }, toString: [Function] }
    // mystream successfully decoded as key (string). Decoded value mystream. Tokens remaining [MAXLEN,2], target args remainin count: 2
    // MAXLEN successfully decoded as strategy (string). Decoded value MAXLEN. Tokens remaining [2], target args remainin count: 1
    // Decoding tuple items
    // Expected one of =,~, got 2
    // ---
    outputs.r2 = await client.xrange("mystream", "-", "+");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": 0,
          "r2": " => <<stream_0>>,field1,A,field2,B,field3,C,field4,D",
        }
    `);
});
