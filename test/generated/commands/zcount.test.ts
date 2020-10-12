import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zcount.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("myzset", [1, "one"]);
    outputs.r1 = await client.zadd("myzset", [2, "two"]);
    outputs.r2 = await client.zadd("myzset", [3, "three"]);
    // Error decoding command `ZCOUNT myzset -inf +inf`:

    // decoding ZCOUNT overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 2
    // -inf parsed into a bad number NaN
    // ---
    // Error decoding command `ZCOUNT myzset (1 3`:

    // decoding ZCOUNT overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,3], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
        }
    `);
});
