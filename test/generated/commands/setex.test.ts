import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/setex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setex("mykey", 10, "Hello");
    outputs.r1 = await client.ttl("mykey");
    outputs.r2 = await client.get("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 10,
          "r2": "Hello",
        }
    `);
});
