import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/incr.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "10");
    outputs.r1 = await client.incr("mykey");
    outputs.r2 = await client.get("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 11,
          "r2": "11",
        }
    `);
});
