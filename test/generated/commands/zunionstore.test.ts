import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/zunionstore.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.zadd("zset1", [1, "one"]);
    outputs.r1 = await client.zadd("zset1", [2, "two"]);
    outputs.r2 = await client.zadd("zset2", [1, "one"]);
    outputs.r3 = await client.zadd("zset2", [2, "two"]);
    outputs.r4 = await client.zadd("zset2", [3, "three"]);
    // @ts-expect-error (not smart enough to deal with numkeys)
    outputs.r5 = await client.zunionstore(
        "out",
        2,
        "zset1",
        "zset2",
        "WEIGHTS",
        "2",
        "3"
    );
    outputs.r6 = await client.zrange("out", 0, -1, "WITHSCORES");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": 1,
          "r1": 1,
          "r2": 1,
          "r3": 1,
          "r4": 1,
          "r5": 3,
          "r6": Array [
            "one",
            "5",
            "three",
            "9",
            "two",
            "10",
          ],
        }
    `);
});
