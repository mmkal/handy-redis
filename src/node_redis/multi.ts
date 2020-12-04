import * as nodeRedis from "redis";
import { flattenDeep } from "../flatten";
import { Commands } from "../generated/interface";
import { promisify } from "util";
import { Push } from "../push";

export type CommandResult<K extends keyof Commands> = ReturnType<Commands[K]> extends Promise<infer X> ? X : never;

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

export type MultiCommands = Exclude<keyof Commands, "exec" | "exec_atomic">;

export type WrappedNodeRedisMulti<Results extends unknown[] = []> = {
    [K in MultiCommands]: (
        ...args: Parameters<Commands[K]>
    ) => WrappedNodeRedisMulti<Push<Results, CommandResult<K> | nodeRedis.ReplyError>>;
} & {
    exec: () => Promise<Results>;
    exec_atomic: () => Promise<Results>;
};
