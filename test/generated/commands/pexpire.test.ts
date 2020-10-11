import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/pexpire.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "Hello");
    outputs.r1 = await client.pexpire("mykey", 1500);
    outputs.r2 = await client.ttl("mykey");
    outputs.r3 = await client.pttl("mykey");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "someNumberValue => [a number]",
          "r2": "someNumberValue => [a number]",
          "r3": "someNumberValue => [a number]",
        }
    `);
});
