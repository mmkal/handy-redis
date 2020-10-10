import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/bitpos.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "\\xff\\xf0\\x00");
    outputs.r1 = await client.bitpos("mykey", 0);
    outputs.r2 = await client.set("mykey", "\\x00\\xff\\xf0");
    outputs.r3 = await client.bitpos("mykey", 1, 0);
    outputs.r4 = await client.bitpos("mykey", 1, 2);
    outputs.r5 = await client.set("mykey", "\\x00\\x00\\x00");
    outputs.r6 = await client.bitpos("mykey", 1);

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 0,
          "r2": "OK",
          "r3": 1,
          "r4": 18,
          "r5": "OK",
          "r6": 1,
        }
    `);
});
