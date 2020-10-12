import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "one");
    outputs.r1 = await client.rpush("mylist", "two");
    outputs.r2 = await client.rpush("mylist", "three");
    outputs.r3 = await client.lrange("mylist", 0, 0);
    outputs.r4 = await client.lrange("mylist", -3, 2);
    outputs.r5 = await client.lrange("mylist", -100, 100);
    outputs.r6 = await client.lrange("mylist", 5, 10);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 3,
          "r3": Array [
            "one",
          ],
          "r4": Array [
            "one",
            "two",
            "three",
          ],
          "r5": Array [
            "one",
            "two",
            "three",
          ],
          "r6": Array [],
        }
    `);
});
