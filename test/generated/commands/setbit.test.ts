import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/setbit.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setbit("mykey", 7, 1);
    outputs.r1 = await client.setbit("mykey", 7, 0);
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "0",
          "r1": "1",
          "r2": "\\"\\\\u0000\\"",
        }
    `);
});
