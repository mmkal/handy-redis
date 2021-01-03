import * as nodeRedis from "redis";
import { flattenDeep } from "../flatten";
import { Commands } from "../generated/interface";
import { promisify } from "util";
import { Push } from "../push";

declare module "../generated/interface" {
    export interface ResultTypes<Result, Context> {
        /**
         * This determines the correct type for a node_redis multi result. e.g. `multi.keys('foo:*')` should be a multi instance
         * which will include include a `string[]` value in the array eventually returned by `.exec()`.
         */
        node_redis_multi: WrappedNodeRedisMulti<
            Push<
                // get the original results from client context
                Extract<Context, { results: unknown[] }>["results"],
                // Then push in the new result (e.g. for `keys`, `Result = string[]`)
                MultiResult<Result>
            >
        >;
    }
}

export type MultiResult<T> = T | nodeRedis.ReplyError;

/**
 * types from multis depend on a bunch of type inference so in IDEs they can end up looking like:
 * ```
 * Push<Push<Push<[], string>, "OK">, string[]>
 * ```
 *
 * This makes them appear as
 * ```
 * [string, "OK", string[]]
 * ```
 *
 * Taken from https://github.com/sindresorhus/type-fest/pull/157
 */
export type Simplify<T> = { [K in keyof T]: T[K] };

export const WrappedNodeRedisMultiImpl = class _WrappedNodeRedisMulti {
    readonly nodeRedisMulti: nodeRedis.Multi;
    readonly exec: WrappedNodeRedisMulti["exec"];
    readonly exec_atomic: WrappedNodeRedisMulti["exec_atomic"];

    private constructor(multi: nodeRedis.Multi) {
        this.nodeRedisMulti = multi;
        this.exec = promisify(multi.exec.bind(multi));
        this.exec_atomic = promisify(multi.exec.bind(multi));
    }

    static create(multi: nodeRedis.Multi): WrappedNodeRedisMulti {
        return new WrappedNodeRedisMultiImpl(multi) as any;
    }
};

Object.keys(nodeRedis.Multi.prototype)
    .filter(method => method !== "exec" && method !== "exec_atomic")
    .forEach(method => {
        (WrappedNodeRedisMultiImpl.prototype as any)[method] = function (...args: any[]) {
            (this as any).nodeRedisMulti[method](flattenDeep(args));
            return this;
        };
    });

export interface WrappedNodeRedisMulti<Results extends unknown[] = []>
    extends Omit<Commands<{ type: "node_redis_multi"; results: Results }>, "exec"> {
    /** Execute all commands issued after multi */
    exec(): Promise<Results>;
    /** Execute all commands issued after multi */
    exec_atomic(): Promise<Results>;
}
