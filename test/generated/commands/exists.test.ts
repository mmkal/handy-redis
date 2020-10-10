import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/exists.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "Hello");
    outputs.r1 = await client.exists("key1");
    outputs.r2 = await client.exists("nosuchkey");
    outputs.r3 = await client.set("key2", "World");
    outputs.r4 = await client.exists("key1", "key2", "nosuchkey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 1,
          "r2": 0,
          "r3": "OK",
          "r4": 2,
        }
    `);
});
