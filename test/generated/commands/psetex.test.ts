import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/psetex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.psetex("mykey", 1000, "Hello");
    outputs.r1 = await client.pttl("mykey");
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "someNumberValue => [a number]",
          "r2": "Hello",
        }
    `);
});
