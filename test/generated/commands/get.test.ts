import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/get.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.get("nonexisting");
    outputs.r1 = await client.set("mykey", "Hello");
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": null,
          "r1": "OK",
          "r2": "Hello",
        }
    `);
});
