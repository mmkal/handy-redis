import { createIORedisClient } from "../src";
import * as IORedis from "ioredis";
import { expectTypeOf } from "expect-type";
import { Commands } from "../src/generated/interface";

const client = createIORedisClient();

test("get and set", async () => {
    expect(await client.set("foo", "bar")).toEqual("OK");
    expect(await client.get("foo")).toEqual("bar");
});

test("consruct with existing ioredis instance", async () => {
    const ioredis = new IORedis();

    const client = createIORedisClient(ioredis);

    expect(client.ioredis).toBe(ioredis);

    // we don't need to worry too much about functionality - with ioredis the wrapper is purely a type helper
    expect(client).toBe(ioredis);
});

test("type", async () => {
    expectTypeOf(client).toMatchTypeOf<Omit<Commands, "multi">>();

    expectTypeOf(client.ioredis).toEqualTypeOf<IORedis.Redis>();
});

test("multi", async () => {
    await client.set("z:foo", "abc");

    const multiResult = await client
        .multi()
        .setex("z:foo", "NOTANUMBER" as any, "xyz")
        .keys("z:*")
        .get("z:foo")
        .exec();

    expect(multiResult).toMatchInlineSnapshot(`
        Array [
          Array [
            [ReplyError: ERR value is not an integer or out of range],
          ],
          Array [
            null,
            Array [
              "z:foo",
            ],
          ],
          Array [
            null,
            "abc",
          ],
        ]
    `);

    expectTypeOf(multiResult).toMatchTypeOf<{ length: 3 }>();

    expectTypeOf(multiResult[0]).toEqualTypeOf<[Error, undefined] | [null, "OK"]>();
    expectTypeOf(multiResult[1]).toEqualTypeOf<[Error, undefined] | [null, string[]]>();
    expectTypeOf(multiResult[2]).toEqualTypeOf<[Error, undefined] | [null, string | null]>();

    // usage - result requires null-checking
    const [err, res] = multiResult[0];

    expectTypeOf(res).toEqualTypeOf<"OK" | undefined>();
    expectTypeOf(err).toEqualTypeOf<Error | null>();

    // @ts-expect-error
    const _accessWithoutNullCheckError = () => res.slice();

    const _accessWithNullCheckOk = () => res?.slice();

    const firstResult = multiResult[0];
    const _accessTupleWithErrorCheckOk = () => (firstResult[0] ? undefined : firstResult[1].slice());
});
