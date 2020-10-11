import { expectTypeOf } from "expect-type";
import { createHandyClient, IHandyRedis } from "../src";
import { RedisClient } from "redis";

test("create client with existing client", () => {
    expectTypeOf(createHandyClient).toBeCallableWith({} as RedisClient);

    expectTypeOf(createHandyClient).returns.toEqualTypeOf<IHandyRedis>();
});

test("client has promisified redis methods", () => {
    const client = {} as IHandyRedis;
    expectTypeOf(client.get).returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(client.set).returns.resolves.toEqualTypeOf<"OK" | null>();

    expectTypeOf(client.geohash).parameters.toEqualTypeOf<[string, ...string[]]>();

    // todo: add override to make this string again
    expectTypeOf(client.geohash).returns.resolves.items.toBeUnknown();

    expectTypeOf(client.zrevrange).toBeCallableWith("key", 1, 2);

    // todo: add override to make this string again
    expectTypeOf(client.zrevrange).returns.resolves.items.toBeUnknown();

    expectTypeOf(client.quit).returns.resolves.toBeString();

    expectTypeOf(client.end).returns.toEqualTypeOf<void>();
});
