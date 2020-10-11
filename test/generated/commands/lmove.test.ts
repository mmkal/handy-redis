import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/lmove.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.rpush("mylist", "one");
    outputs.r1 = await client.rpush("mylist", "two");
    outputs.r2 = await client.rpush("mylist", "three");
    outputs.r3 = await client.lmove("mylist", "myotherlist", "RIGHT", "LEFT");
    outputs.r4 = await client.lmove("mylist", "myotherlist", "LEFT", "RIGHT");
    outputs.r5 = await client.lrange("mylist", 0, -1);
    outputs.r6 = await client.lrange("myotherlist", 0, -1);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot();
});
