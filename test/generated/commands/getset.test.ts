import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/getset.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.incr("mycounter");
    outputs.r1 = await client.getset("mycounter", "0");
    outputs.r2 = await client.get("mycounter");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": "1",
          "r2": "0",
        }
    `);
});

test("scripts/redis-doc/commands/getset.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.getset("mykey", "World");
    outputs.r2 = await client.get("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "Hello",
          "r2": "World",
        }
    `);
});
