import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/setex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setex("mykey", 10, "Hello");
    outputs.r1 = await client.ttl("mykey");
    outputs.r2 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": 10,
          "r2": "Hello",
        }
    `);
});
