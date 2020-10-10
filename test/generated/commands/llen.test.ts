import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/llen.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.lpush("mylist", "World");
    outputs.r1 = await client.lpush("mylist", "Hello");
    outputs.r2 = await client.llen("mylist");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 2,
          "r2": 2,
        }
    `);
});
