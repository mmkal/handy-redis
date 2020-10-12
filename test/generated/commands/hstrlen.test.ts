import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hstrlen.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hmset("myhash", ["f1", "HelloWorld"], ["f2", "99"], ["f3", "-256"]);
    outputs.r1 = await client.hstrlen("myhash", "f1");
    outputs.r2 = await client.hstrlen("myhash", "f2");
    outputs.r3 = await client.hstrlen("myhash", "f3");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 10,
          "r2": 2,
          "r3": 4,
        }
    `);
});
