import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/ltrim.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "one");
    outputs.r1 = await client.rpush("mylist", "two");
    outputs.r2 = await client.rpush("mylist", "three");
    outputs.r3 = await client.ltrim("mylist", 1, -1);
    outputs.r4 = await client.lrange("mylist", 0, -1);

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 3,
          "r3": "OK",
          "r4": Array [
            "two",
            "three",
          ],
        }
    `);
});
