import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/xadd.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd(
        "mystream",
        "*",
        ["name", "Sara"],
        ["surname", "OConnor"]
    );
    outputs.r1 = await client.xadd(
        "mystream",
        "*",
        ["field1", "value1"],
        ["field2", "value2"],
        ["field3", "value3"]
    );
    outputs.r2 = await client.xlen("mystream");
    outputs.r3 = await client.xrange("mystream", "-", "+");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": " => <<stream_1>>",
          "r2": 2,
          "r3": " => <<stream_0>>,name,Sara,surname,OConnor,<<stream_1>>,field1,value1,field2,value2,field3,value3",
        }
    `);
});
