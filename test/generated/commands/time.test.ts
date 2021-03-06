import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/time.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.time();
    outputs.r1 = await client.time();

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "ignoreNumbers => ???,???",
          "r1": "ignoreNumbers => ???,???",
        }
    `);
});
