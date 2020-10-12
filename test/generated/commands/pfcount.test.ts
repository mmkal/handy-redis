import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/pfcount.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.pfadd("hll", "foo", "bar", "zap");
    outputs.r1 = await client.pfadd("hll", "zap", "zap", "zap");
    outputs.r2 = await client.pfadd("hll", "foo", "bar");
    outputs.r3 = await client.pfcount("hll");
    outputs.r4 = await client.pfadd("some-other-hll", "1", "2", "3");
    outputs.r5 = await client.pfcount("hll", "some-other-hll");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 0,
          "r2": 0,
          "r3": 3,
          "r4": 1,
          "r5": 6,
        }
    `);
});
