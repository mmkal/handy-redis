import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hincrbyfloat.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hset("mykey", ["field", "10.50"]);
    outputs.r1 = await client.hincrbyfloat("mykey", "field", 0.1);
    outputs.r2 = await client.hincrbyfloat("mykey", "field", -5);
    outputs.r3 = await client.hset("mykey", ["field", "5.0e3"]);
    // Error decoding command `HINCRBYFLOAT mykey field 2.0e2`:

    // decoding HINCRBYFLOAT overload 0 (key,field,increment): { name: 'key', schema: { type: 'string' } },{ name: 'field', schema: { type: 'string' } },{ name: 'increment', schema: { type: 'number' } }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [field,2.0e2], target args remainin count: 2
    // field successfully decoded as field (string). Decoded value field. Tokens remaining [2.0e2], target args remainin count: 1
    // 2.0e2 parsed into a bad number 200
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": "10.6",
          "r2": "5.6",
          "r3": 0,
        }
    `);
});
