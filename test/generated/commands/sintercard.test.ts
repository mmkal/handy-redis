import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/sintercard.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // sintercard not supported by node_redis! outputs.r0 = await client.sadd("key1","a")
    // sintercard not supported by node_redis! outputs.r1 = await client.sadd("key1","b")
    // sintercard not supported by node_redis! outputs.r2 = await client.sadd("key1","c")
    // sintercard not supported by node_redis! outputs.r3 = await client.sadd("key2","c")
    // sintercard not supported by node_redis! outputs.r4 = await client.sadd("key2","d")
    // sintercard not supported by node_redis! outputs.r5 = await client.sadd("key2","e")
    // sintercard not supported by node_redis! outputs.r6 = await client.sinter("key1","key2")
    // sintercard not supported by node_redis! outputs.r7 = await client.sintercard("key1","key2")

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
