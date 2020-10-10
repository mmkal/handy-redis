import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/psetex.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.psetex("mykey", 1000, "Hello");
    outputs.r1 = await client.pttl("mykey");
    outputs.r2 = await client.get("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "someNumberValue => [a number]",
          "r2": "Hello",
        }
    `);
});
