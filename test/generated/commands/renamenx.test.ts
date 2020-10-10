import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/renamenx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.set("myotherkey", "World");
    outputs.r2 = await client.renamenx("mykey", "myotherkey");
    outputs.r3 = await client.get("myotherkey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "OK",
          "r2": 0,
          "r3": "World",
        }
    `);
});
