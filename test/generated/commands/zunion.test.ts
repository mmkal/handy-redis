import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zunion.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // zunion not supported by node_redis! outputs.r0 = await client.zadd("zset1",[1,"one"])
    // zunion not supported by node_redis! outputs.r1 = await client.zadd("zset1",[2,"two"])
    // zunion not supported by node_redis! outputs.r2 = await client.zadd("zset2",[1,"one"])
    // zunion not supported by node_redis! outputs.r3 = await client.zadd("zset2",[2,"two"])
    // zunion not supported by node_redis! outputs.r4 = await client.zadd("zset2",[3,"three"])
    // zunion not supported by node_redis! outputs.r5 = await client.zunion(2,["zset1", "zset2"])
    // zunion not supported by node_redis! outputs.r6 = await client.zunion(2,["zset1", "zset2"],"WITHSCORES")

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
