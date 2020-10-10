import { expectTypeOf } from "expect-type";
import { createHandyClient } from "../src";
import { RedisClient } from "redis";

test("create client with existing client", () => {
    expectTypeOf(createHandyClient).toBeCallableWith({} as RedisClient);
});

test("client has promisified redis methods", () => {
    expectTypeOf(createHandyClient).returns.toHaveProperty("get").returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(createHandyClient).returns.toHaveProperty("set").returns.resolves.toEqualTypeOf<string | null>();

    expectTypeOf(createHandyClient).returns.toHaveProperty("geohash").parameters.toEqualTypeOf<[string, ...string[]]>();

    // todo: add override to make this string again
    expectTypeOf(createHandyClient).returns.toHaveProperty("geohash").returns.resolves.items.toBeUnknown();

    expectTypeOf(createHandyClient).returns.toHaveProperty("zrevrange").toBeCallableWith("key", 1, 2);

    // todo: add override to make this string again
    expectTypeOf(createHandyClient).returns.toHaveProperty("zrevrange").returns.resolves.items.toBeUnknown();

    expectTypeOf(createHandyClient).returns.toHaveProperty("quit").returns.resolves.toBeString();

    expectTypeOf(createHandyClient).returns.toHaveProperty("end").returns.toEqualTypeOf<void>();

    // const client = createHandyClient();

    // client.multi().set("foo", "bar").get("foo").keys("f*").exec();
});
