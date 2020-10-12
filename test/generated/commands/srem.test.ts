import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/srem.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one");
    outputs.r1 = await client.sadd("myset", "two");
    outputs.r2 = await client.sadd("myset", "three");
    outputs.r3 = await client.srem("myset", "one");
    outputs.r4 = await client.srem("myset", "four");
    outputs.r5 = await client.smembers("myset");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": 1,
          "r4": 0,
          "r5": "sortArrays => [ 'three', 'two' ]",
        }
    `);
});
