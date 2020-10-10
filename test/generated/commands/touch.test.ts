import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/touch.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "Hello");
    outputs.r1 = await client.set("key2", "World");
    outputs.r2 = await client.touch("key1", "key2");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "OK",
          "r2": 2,
        }
    `);
});
