import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/smove.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one");
    outputs.r1 = await client.sadd("myset", "two");
    outputs.r2 = await client.sadd("myotherset", "three");
    outputs.r3 = await client.smove("myset", "myotherset", "two");
    outputs.r4 = await client.smembers("myset");
    outputs.r5 = await client.smembers("myotherset");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": 1,
          "r4": "sortArrays => [ 'one' ]",
          "r5": "sortArrays => [ 'three', 'two' ]",
        }
    `);
});
