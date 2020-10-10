import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/time.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.time();
    outputs.r1 = await client.time();

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "isFinite => false",
          "r1": "isFinite => false",
        }
    `);
});
