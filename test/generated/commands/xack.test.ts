import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/xack.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xack("mystream", "mygroup", "1526569495631-0");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 0,
        }
    `);
});
