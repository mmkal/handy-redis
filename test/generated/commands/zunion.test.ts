import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/zunion.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("zset1", [1, "one"]);
    outputs.r1 = await client.zadd("zset1", [2, "two"]);
    outputs.r2 = await client.zadd("zset2", [1, "one"]);
    outputs.r3 = await client.zadd("zset2", [2, "two"]);
    outputs.r4 = await client.zadd("zset2", [3, "three"]);
    outputs.r5 = await client.zunion(2, ["zset1", "zset2"]);
    outputs.r6 = await client.zunion(2, ["zset1", "zset2"], "WITHSCORES");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot();
});
