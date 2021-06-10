import { Commands } from "../src/generated/interface";
import { WrappedNodeRedisClient } from "../src";
import { expectTypeOf } from "expect-type";

// This test serves as an example of how the higher-kinded types implementation could be used to alter the return type of certain commands.

type UnknownToAny<T> = T extends Promise<infer X>
    ? { readonly __unknownProp: unique symbol } extends X // this is true only if X is unknown or any
        ? Promise<any>
        : T
    : T;

declare module "../src/generated/interface" {
    // eslint-disable-next-line jest/no-export
    export interface ResultTypes<Result, Context> {
        // Use the default result type, but convert `Promise<unknown>` to `Promise<any>`
        unknown_to_any: UnknownToAny<ResultTypes<Result, Context>["default"]>;
    }
}

type PermissiveClient = Commands<{ type: "unknown_to_any" }>;

declare const regularClient: WrappedNodeRedisClient;
// cast a regular a client to our customised, more permissive one
const permissiveClient = regularClient as unknown as PermissiveClient;

export const test = async () => {
    // the regular client will return `Promise<unknown>` for some commands, our more permissive one converts this to `Promise<any>`
    const acl1 = await regularClient.acl("LOAD");
    const acl2 = await permissiveClient.acl("LOAD");

    expectTypeOf(acl1).toBeUnknown();
    expectTypeOf(acl2).toBeAny();

    // make sure other commands with defined types are unaffected
    const keys1 = await regularClient.keys("foo:*");
    const keys2 = await permissiveClient.keys("foo:*");

    expectTypeOf(keys1).toEqualTypeOf<string[]>();
    expectTypeOf(keys2).toEqualTypeOf<string[]>();
};
