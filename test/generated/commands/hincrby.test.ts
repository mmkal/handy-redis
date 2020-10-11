import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/hincrby.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hset("myhash", ["field", "5"]);
    outputs.r1 = await client.hincrby("myhash", "field", 1);
    outputs.r2 = await client.hincrby("myhash", "field", -1);
    outputs.r3 = await client.hincrby("myhash", "field", -10);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 6,
          "r2": 5,
          "r3": -5,
        }
    `);
});
