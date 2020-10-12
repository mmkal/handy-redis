import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/msetnx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.msetnx(["key1", "Hello"], ["key2", "there"]);
    outputs.r1 = await client.msetnx(["key2", "new"], ["key3", "world"]);
    outputs.r2 = await client.mget("key1", "key2", "key3");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 0,
          "r2": Array [
            "Hello",
            "there",
            null,
          ],
        }
    `);
});
