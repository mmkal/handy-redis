import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/srandmember.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one", "two", "three");
    outputs.r1 = await client.srandmember("myset");
    outputs.r2 = await client.srandmember("myset", 2);
    outputs.r3 = await client.srandmember("myset", -5);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "typeOf => number",
          "r1": "typeOf => string",
          "r2": "arrayLength => 2",
          "r3": "arrayLength => 5",
        }
    `);
});
