import { expectTypeOf } from "expect-type";
import { createNodeRedisClient, IHandyRedis } from "../src";
import { RedisClient } from "redis";

test("create client with existing client", () => {
    expectTypeOf(createNodeRedisClient).toBeCallableWith({} as RedisClient);

    expectTypeOf(createNodeRedisClient).returns.toEqualTypeOf<IHandyRedis>();
});

test("client has promisified redis methods", () => {
    const client = {} as IHandyRedis;
    expectTypeOf(client.get).returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(client.set).returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(client.setex).returns.resolves.toEqualTypeOf<"OK">();

    expectTypeOf(client.geohash).parameters.toEqualTypeOf<[string, ...string[]]>();

    expectTypeOf(client.geohash).returns.resolves.items.toBeString();

    expectTypeOf(client.zrevrange).toBeCallableWith("key", 1, 2);

    expectTypeOf(client.zrevrange).returns.resolves.items.toBeString();

    expectTypeOf(client.quit).returns.resolves.toBeString();

    expectTypeOf(client.end).returns.toEqualTypeOf<void>();

    expectTypeOf(client.spop).returns.resolves.toEqualTypeOf<null | string | string[]>();

    expectTypeOf(client.xgroup).toBeCallableWith([['CREATE', ['foo', 'bar']], 'ID'])
    expectTypeOf(client.xgroup).toBeCallableWith([['CREATE', ['foo', 'bar']], '$'])

    // @ts-expect-error
    expectTypeOf(client.xgroup).toBeCallableWith([['CREATE', ['foo', 'bar']], 'SOMETHINGWRONG'])
});
