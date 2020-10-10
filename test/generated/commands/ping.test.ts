import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/ping.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.ping();
    outputs.r1 = await client.ping("hello world");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "PONG",
          "r1": "hello world",
        }
    `);
});
