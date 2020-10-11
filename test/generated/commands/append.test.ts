import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/append.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.exists("mykey");
    outputs.r1 = await client.append("mykey", "Hello");
    outputs.r2 = await client.append("mykey", " World");
    outputs.r3 = await client.get("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 0,
          "r1": 5,
          "r2": 11,
          "r3": "Hello World",
        }
    `);
});

test("docs/redis-doc/commands/append.md example 2", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.append("ts", "0043");
    outputs.r1 = await client.append("ts", "0035");
    outputs.r2 = await client.getrange("ts", 0, 3);
    outputs.r3 = await client.getrange("ts", 4, 7);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 4,
          "r1": 8,
          "r2": "0043",
          "r3": "0035",
        }
    `);
});
