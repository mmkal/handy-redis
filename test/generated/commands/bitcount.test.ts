import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/bitcount.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "foobar");
    outputs.r1 = await client.bitcount("mykey");
    outputs.r2 = await client.bitcount("mykey", [0, 0]);
    outputs.r3 = await client.bitcount("mykey", [1, 1]);

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 26,
          "r2": 4,
          "r3": 6,
        }
    `);
});
