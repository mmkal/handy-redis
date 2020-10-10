import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/sismember.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one");
    outputs.r1 = await client.sismember("myset", "one");
    outputs.r2 = await client.sismember("myset", "two");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 0,
        }
    `);
});
