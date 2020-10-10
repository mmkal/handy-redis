import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/xrange.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.xadd("writers", "*", ["name", "Virginia"], ["surname", "Woolf"]);
    outputs.r1 = await client.xadd("writers", "*", ["name", "Jane"], ["surname", "Austen"]);
    outputs.r2 = await client.xadd("writers", "*", ["name", "Toni"], ["surname", "Morris"]);
    outputs.r3 = await client.xadd("writers", "*", ["name", "Agatha"], ["surname", "Christie"]);
    outputs.r4 = await client.xadd("writers", "*", ["name", "Ngozi"], ["surname", "Adichie"]);
    outputs.r5 = await client.xlen("writers");
    outputs.r6 = await client.xrange("writers", "-", "+", ["COUNT", 2]);

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": " => <<stream_0>>",
          "r1": " => <<stream_1>>",
          "r2": " => <<stream_2>>",
          "r3": " => <<stream_3>>",
          "r4": " => <<stream_4>>",
          "r5": 5,
          "r6": " => <<stream_0>>,name,Virginia,surname,Woolf,<<stream_1>>,name,Jane,surname,Austen",
        }
    `);
});
