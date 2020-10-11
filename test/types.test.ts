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

    expectTypeOf(client.set).returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(client.geohash).parameters.toEqualTypeOf<[string, ...string[]]>();

    expectTypeOf(client.geohash).returns.resolves.items.toBeString();

    expectTypeOf(client.zrevrange).toBeCallableWith("key", 1, 2);

    expectTypeOf(client.zrevrange).returns.resolves.items.toBeString();

    expectTypeOf(client.quit).returns.resolves.toBeString();

    expectTypeOf(client.end).returns.toEqualTypeOf<void>();
});
