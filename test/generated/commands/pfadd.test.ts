import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/pfadd.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.pfadd("hll", "a", "b", "c", "d", "e", "f", "g");
    outputs.r1 = await client.pfcount("hll");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 7,
        }
    `);
});
