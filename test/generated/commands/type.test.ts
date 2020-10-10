import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/type.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("key1", "value");
    outputs.r1 = await client.lpush("key2", "value");
    outputs.r2 = await client.sadd("key3", "value");
    outputs.r3 = await client.type("key1");
    outputs.r4 = await client.type("key2");
    outputs.r5 = await client.type("key3");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 1,
          "r2": 1,
          "r3": "string",
          "r4": "list",
          "r5": "set",
        }
    `);
});
