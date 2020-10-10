import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/expire.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.expire("mykey", 10);
    outputs.r2 = await client.ttl("mykey");
    outputs.r3 = await client.set("mykey", "Hello World");
    outputs.r4 = await client.ttl("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 1,
          "r2": 10,
          "r3": "OK",
          "r4": -1,
        }
    `);
});
