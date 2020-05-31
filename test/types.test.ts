import { expectTypeOf } from "expect-type";
import { createHandyClient } from "../src";
import { RedisClient } from "redis";

test("create client with existing client", () => {
  expectTypeOf(createHandyClient).toBeCallableWith({} as RedisClient)
})

test("client has promisified redis methods", () => {
  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("get")
    .returns.resolves.toEqualTypeOf<string | null>()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("set")
    .returns.resolves.toEqualTypeOf<string | null>()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("geohash")
    .parameters.toEqualTypeOf<[string, ...string[]]>()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("geohash")
    .returns.resolves.items.toBeString()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("zrevrange")
    .parameters.toEqualTypeOf<[string, number, number]>()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("zrevrange")
    .returns.resolves.items.toBeString()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("quit")
    .returns.resolves.toBeAny()

  expectTypeOf(createHandyClient)
    .returns.toHaveProperty("end")
    .returns.toEqualTypeOf<void>()
})
