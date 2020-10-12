import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/more-cli-examples/dbsize.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.dbsize();

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 0,
        }
    `);
});
