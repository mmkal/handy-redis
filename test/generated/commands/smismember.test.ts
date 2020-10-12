import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/smismember.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // smismember not supported by node_redis! outputs.r0 = await client.sadd("myset","one")
    // smismember not supported by node_redis! outputs.r1 = await client.sadd("myset","one")
    // smismember not supported by node_redis! outputs.r2 = await client.smismember("myset","one","notamember")

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
