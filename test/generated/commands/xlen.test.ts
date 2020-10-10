import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/xlen.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd("mystream", "*", ["item", "1"]);
    outputs.r1 = await client.xadd("mystream", "*", ["item", "2"]);
    outputs.r2 = await client.xadd("mystream", "*", ["item", "3"]);
    outputs.r3 = await client.xlen("mystream");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": " => <<stream_1>>",
          "r2": " => <<stream_2>>",
          "r3": 3,
        }
    `);
});
