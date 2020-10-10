import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/hsetnx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.hsetnx("myhash", "field", "Hello");
    outputs.r1 = await client.hsetnx("myhash", "field", "World");
    outputs.r2 = await client.hget("myhash", "field");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 0,
          "r2": "Hello",
        }
    `);
});
