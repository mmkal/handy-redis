import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/xtrim.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd("mystream", "*", ["field1", "A"], ["field2", "B"], ["field3", "C"], ["field4", "D"]);
    outputs.r1 = await client.xtrim("mystream", "MAXLEN", 2);
    outputs.r2 = await client.xrange("mystream", "-", "+");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": 0,
          "r2": " => <<stream_0>>,field1,A,field2,B,field3,C,field4,D",
        }
    `);
});
