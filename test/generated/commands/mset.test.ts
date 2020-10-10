import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/mset.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.mset(["key1", "Hello"], ["key2", "World"]);
    outputs.r1 = await client.get("key1");
    outputs.r2 = await client.get("key2");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "Hello",
          "r2": "World",
        }
    `);
});
