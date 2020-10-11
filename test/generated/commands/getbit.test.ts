import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/getbit.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.setbit("mykey", 7, 1);
    outputs.r1 = await client.getbit("mykey", 0);
    outputs.r2 = await client.getbit("mykey", 7);
    outputs.r3 = await client.getbit("mykey", 100);

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 0,
          "r1": 0,
          "r2": 1,
          "r3": 0,
        }
    `);
});
