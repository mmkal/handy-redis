import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lmove.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // lmove not supported by node_redis! outputs.r0 = await client.rpush("mylist","one")
    // lmove not supported by node_redis! outputs.r1 = await client.rpush("mylist","two")
    // lmove not supported by node_redis! outputs.r2 = await client.rpush("mylist","three")
    // lmove not supported by node_redis! outputs.r3 = await client.lmove("mylist","myotherlist","RIGHT","LEFT")
    // lmove not supported by node_redis! outputs.r4 = await client.lmove("mylist","myotherlist","LEFT","RIGHT")
    // lmove not supported by node_redis! outputs.r5 = await client.lrange("mylist",0,-1)
    // lmove not supported by node_redis! outputs.r6 = await client.lrange("myotherlist",0,-1)

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
