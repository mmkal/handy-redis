import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/more-cli-examples/setwithexpiry.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("foo", "bar", ["EX", 60]);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
        }
    `);
});
