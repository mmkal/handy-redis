import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/rpushx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "Hello");
    outputs.r1 = await client.rpushx("mylist", "World");
    outputs.r2 = await client.rpushx("myotherlist", "World");
    outputs.r3 = await client.lrange("mylist", 0, -1);
    outputs.r4 = await client.lrange("myotherlist", 0, -1);

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 0,
          "r3": Array [
            "Hello",
            "World",
          ],
          "r4": Array [],
        }
    `);
});
