import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/spop.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one");
    outputs.r1 = await client.sadd("myset", "two");
    outputs.r2 = await client.sadd("myset", "three");
    outputs.r3 = await client.spop("myset");
    outputs.r4 = await client.smembers("myset");
    outputs.r5 = await client.sadd("myset", "four");
    outputs.r6 = await client.sadd("myset", "five");
    outputs.r7 = await client.spop("myset", 3);
    outputs.r8 = await client.smembers("myset");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "typeOf => number",
          "r1": "typeOf => number",
          "r2": "typeOf => number",
          "r3": "typeOf => string",
          "r4": "arrayLength => 2",
          "r5": "typeOf => number",
          "r6": "typeOf => number",
          "r7": "arrayLength => 3",
          "r8": "arrayLength => 1",
        }
    `);
});
