import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/expireat.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.exists("mykey");
    outputs.r2 = await client.expireat("mykey", "1293840000");
    outputs.r3 = await client.exists("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 1,
          "r2": 1,
          "r3": 0,
        }
    `);
});
