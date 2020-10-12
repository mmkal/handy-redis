import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zmscore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // zmscore not supported by node_redis! outputs.r0 = await client.zadd("myzset",[1,"one"])
    // zmscore not supported by node_redis! outputs.r1 = await client.zadd("myzset",[2,"two"])
    // zmscore not supported by node_redis! outputs.r2 = await client.zmscore("myzset","one","two","nofield")

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
