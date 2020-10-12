import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/xadd.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd("mystream", "*", ["name", "Sara"], ["surname", "OConnor"]);
    outputs.r1 = await client.xadd("mystream", "*", ["field1", "value1"], ["field2", "value2"], ["field3", "value3"]);
    outputs.r2 = await client.xlen("mystream");
    outputs.r3 = await client.xrange("mystream", "-", "+");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": " => <<stream_1>>",
          "r2": 2,
          "r3": " => <<stream_0>>,name,Sara,surname,OConnor,<<stream_1>>,field1,value1,field2,value2,field3,value3",
        }
    `);
});
