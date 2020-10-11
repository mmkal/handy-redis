import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lrem.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "hello");
    outputs.r1 = await client.rpush("mylist", "hello");
    outputs.r2 = await client.rpush("mylist", "foo");
    outputs.r3 = await client.rpush("mylist", "hello");
    outputs.r4 = await client.lrem("mylist", -2, "hello");
    outputs.r5 = await client.lrange("mylist", 0, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 3,
          "r3": 4,
          "r4": 2,
          "r5": Array [
            "hello",
            "foo",
          ],
        }
    `);
});
