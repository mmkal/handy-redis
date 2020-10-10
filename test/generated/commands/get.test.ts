import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/get.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.get("nonexisting");
    outputs.r1 = await client.set("mykey", "Hello");
    outputs.r2 = await client.get("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": null,
          "r1": "OK",
          "r2": "Hello",
        }
    `);
});
