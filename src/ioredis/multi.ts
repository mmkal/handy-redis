import { Commands } from "../generated/interface";
import { Push } from "../type-util";

export type ResultType<K extends keyof Commands> = ReturnType<Commands[K]> extends Promise<infer X> ? X : never;

export type MaybeResult<T> = [Error, undefined] | [null, T];

export type WrappedIORedisMulti<Results extends unknown[] = []> = {
    [K in Exclude<keyof Commands, "exec">]: (
        ...args: Parameters<Commands[K]>
    ) => WrappedIORedisMulti<Push<Results, MaybeResult<ResultType<K>>>>;
} & {
    exec: () => Promise<Results>;
};

export interface IORedisMultiMixins {
    multi(): WrappedIORedisMulti;
}
