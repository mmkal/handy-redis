import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/sinter.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("key1", "a");
    outputs.r1 = await client.sadd("key1", "b");
    outputs.r2 = await client.sadd("key1", "c");
    outputs.r3 = await client.sadd("key2", "c");
    outputs.r4 = await client.sadd("key2", "d");
    outputs.r5 = await client.sadd("key2", "e");
    outputs.r6 = await client.sinter("key1", "key2");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": 1,
          "r4": 1,
          "r5": 1,
          "r6": Array [
            "c",
          ],
        }
    `);
});
