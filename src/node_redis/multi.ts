import * as nodeRedis from "redis";
import { flattenDeep } from "../flatten";
import { Commands } from "../generated/interface";
import { promisify } from "util";
import { Push } from "../type-util";

export type ResultType<K extends keyof Commands> = ReturnType<Commands[K]> extends Promise<infer X> ? X : never;

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

export type WrappedNodeRedisMulti<Results extends unknown[] = []> = {
    [K in Exclude<keyof Commands, "exec" | "exec_atomic">]: (
        ...args: Parameters<Commands[K]>
    ) => WrappedNodeRedisMulti<Push<Results, ResultType<K> | nodeRedis.ReplyError>>;
} & {
    exec: () => Promise<Results>;
    exec_atomic: () => Promise<Results>;
};
