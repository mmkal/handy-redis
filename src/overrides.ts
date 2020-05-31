import { Multi, RedisClient } from "redis";

export const useUnderlyingImpl = new Set(['multi', 'end'] as const)
type UnderlyingImplMethods = typeof useUnderlyingImpl extends Set<infer X> ? X : never

export const additionalFunctions = {
    /** promisified multi execution */
    execMulti: <T = {}>(multi: Multi) => new Promise<T[]>(
        (resolve, reject) => multi.exec((err, data) => err ? reject(err) : resolve(data))
    ),
};

export type AdditionalFunctions = typeof additionalFunctions & {
    [K in UnderlyingImplMethods]: RedisClient[K];
};
