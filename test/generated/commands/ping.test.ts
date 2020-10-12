import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/ping.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.ping();
    outputs.r1 = await client.ping("hello world");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "PONG",
          "r1": "hello world",
        }
    `);
});
