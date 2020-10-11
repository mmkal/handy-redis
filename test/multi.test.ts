import { expectTypeOf } from "expect-type";
import { ReplyError } from "redis";
import { createHandyClient } from "../src";

const client = createHandyClient();

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

test("multi puts errors in returned array", async () => {
    await client.set("foo", "one");

    const multiResult = await client
        .multi()
        .set("z:foo", "two", ["EX", "NOTANUMBER" as any])
        .keys("z:*")
        .get("z:foo")
        .exec();

    expect(multiResult).toMatchInlineSnapshot(`
        Array [
          [ReplyError: ERR value is not an integer or out of range],
          "one",
        ]
    `);

    expectTypeOf(multiResult).toMatchTypeOf<{ length: 3 }>();

    expectTypeOf(multiResult[0]).toEqualTypeOf<"OK" | null | ReplyError>();
    expectTypeOf(multiResult[1]).toEqualTypeOf<unknown[] | ReplyError>();
    expectTypeOf(multiResult[2]).toEqualTypeOf<string | null | ReplyError>();
});
