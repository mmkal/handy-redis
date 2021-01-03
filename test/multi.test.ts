import { expectTypeOf } from "expect-type";
import { ReplyError } from "redis";
import { createNodeRedisClient } from "../src";

const client = createNodeRedisClient();

test("multi returns a promise", async () => {
    const multi = client.multi().set("z:foo", "987").keys("z:*").get("z:foo");

    const result = await multi.exec();

    expect(result).toEqual(["OK", ["z:foo"], "987"]);
});

test("'batch' from node_redis also supported", async () => {
    const batch = client.batch().set("z:foo", "987").keys("z:*").get("z:foo");

    const result = await batch.exec();

    expect(result).toEqual(["OK", ["z:foo"], "987"]);
});

test("'exec_atomic' from node_redis also supported", async () => {
    const batch = client.multi().set("z:foo", "987").keys("z:*").get("z:foo");

    const result = await batch.exec_atomic();

    expect(result).toEqual(["OK", ["z:foo"], "987"]);
});

test("multi puts errors in returned array", async () => {
    await client.set("z:foo", "abc");

    const multiResult = await client
        .multi()
        .setex("z:foo", "NOTANUMBER" as any, "xyz")
        .keys("z:*")
        .get("z:foo")
        .exec();

    expect(multiResult).toMatchInlineSnapshot(`
        Array [
          [ReplyError: ERR value is not an integer or out of range],
          Array [
            "z:foo",
          ],
          "abc",
        ]
    `);

    expectTypeOf(multiResult).toMatchTypeOf<{ length: 3 }>();

    expectTypeOf(multiResult[0]).toEqualTypeOf<"OK" | ReplyError>();
    expectTypeOf(multiResult[1]).toEqualTypeOf<string[] | ReplyError>();
    expectTypeOf(multiResult[2]).toEqualTypeOf<string | null | ReplyError>();
});

test("multi overloads work", async () => {
    await client.del("multistream");

    // Mostly types are being tested here. The runtime result should be the same as xadd.test.ts.
    // https://github.com/mmkal/handy-redis/issues/270
    const result = await client
        .multi()
        .xadd("multistream", "*", ["name", "Sara"], ["surname", "OConnor"])
        .xadd("multistream", "*", ["field1", "value1"], ["field2", "value2"], ["field3", "value3"])
        .xlen("multistream")
        .xrange("multistream", "-", "+")
        .exec();

    expect(result).toHaveLength(4);
});
