import { expectTypeOf } from "expect-type";
import { createNodeRedisClient, WrappedNodeRedisClient, createHandyClient, IHandyRedis } from "../src";
import { RedisClient } from "redis";
import { Push as Push_ts40 } from "../src/push";
import { Push as Push_ts34 } from "../src/push.ts34";

test("create client with existing client", () => {
    expectTypeOf(createNodeRedisClient).toBeCallableWith({} as RedisClient);

    expectTypeOf(createNodeRedisClient).returns.toEqualTypeOf<WrappedNodeRedisClient>();
});

test("deprecated imports are aliases of current ones", () => {
    expectTypeOf(createHandyClient).toEqualTypeOf(createNodeRedisClient);
    expectTypeOf<IHandyRedis>().toEqualTypeOf<WrappedNodeRedisClient>();
});

test("client has promisified redis methods", () => {
    const client = {} as WrappedNodeRedisClient;
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

    // @ts-expect-error
    expectTypeOf(client.xgroup).toBeCallableWith([["CREATE", ["foo", "bar"]], "SOMETHINGWRONG"]);
});

test("Push", () => {
    // typescript 4+ can add to the end of tuples
    expectTypeOf<Push_ts40<[], 1>>().toEqualTypeOf<[1]>();
    expectTypeOf<Push_ts40<[1, 2], 3>>().toEqualTypeOf<[1, 2, 3]>();

    // old typescript versions just get a union-ed array
    expectTypeOf<Push_ts34<[], 1>>().toEqualTypeOf<1[]>();
    expectTypeOf<Push_ts34<[1, 2], 3>>().toEqualTypeOf<Array<1 | 2 | 3>>();
});

const _xgroupTests = async (client: WrappedNodeRedisClient) => {
    await client.xgroup(
        [["CREATE", ["one", "two"]], "ID", "MKSTREAM"],
        ["DESTROY", ["three", "four"]],
        ["CREATECONSUMER", ["five", "six", "seven"]],
        ["DELCONSUMER", ["eight", "nine", "ten"]]
    );

    await client.xgroup(
        // @ts-expect-error
        [["CREATE", ["one", "two"]], "ID", "typo_this_should_be_MKSTREAM"],
        ["DESTROY", ["three", "four"]],
        ["CREATECONSUMER", ["five", "six", "seven"]],
        ["DELCONSUMER", ["eight", "nine", "ten"]]
    );

    await client.xgroup(
        [["CREATE", ["one", "two"]], "ID"],
        [["SETID", ["one", "two"]], "$"],
        ["DESTROY", ["three", "four"]],
        ["CREATECONSUMER", ["five", "six", "seven"]],
        ["DELCONSUMER", ["eight", "nine", "ten"]]
    );
};
