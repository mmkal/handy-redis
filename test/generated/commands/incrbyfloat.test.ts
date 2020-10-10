import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/incrbyfloat.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "10.50");
    outputs.r1 = await client.incrbyfloat("mykey", 0.1);
    outputs.r2 = await client.incrbyfloat("mykey", -5);
    outputs.r3 = await client.set("mykey", "5.0e3");
    // Error decoding command `INCRBYFLOAT mykey 2.0e2`:

    // decoding INCRBYFLOAT overload 0 (key,increment): { name: 'key', schema: { type: 'string' } },{ name: 'increment', schema: { type: 'number' } }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [2.0e2], target args remainin count: 1
    // 2.0e2 parsed into a bad number 200
    // ---

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "10.6",
          "r2": "5.6",
          "r3": "OK",
        }
    `);
});
