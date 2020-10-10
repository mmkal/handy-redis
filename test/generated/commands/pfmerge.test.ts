import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/pfmerge.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.pfadd("hll1", "foo", "bar", "zap", "a");
    outputs.r1 = await client.pfadd("hll2", "a", "b", "c", "foo");
    outputs.r2 = await client.pfmerge("hll3", "hll1", "hll2");
    outputs.r3 = await client.pfcount("hll3");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": "OK",
          "r3": 6,
        }
    `);
});
