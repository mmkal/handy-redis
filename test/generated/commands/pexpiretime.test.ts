import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/pexpiretime.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // expiretime not supported by node_redis! outputs.r0 = await client.set("mykey","Hello")
    // expiretime not supported by node_redis! outputs.r1 = await client.pexpireat("mykey","33177117420000")
    // expiretime not supported by node_redis! outputs.r2 = await client.pexpiretime("mykey")

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
