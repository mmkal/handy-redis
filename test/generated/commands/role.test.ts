import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/role.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.role();

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": Array [
            "master",
            0,
            Array [],
          ],
        }
    `);
});
