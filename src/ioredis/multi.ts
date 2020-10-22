import { Commands } from "../generated/interface";

// Variadic tuple prefixes only work in ts>4. To support lower typescript versions, check if the feature works
// this means we need ts-ignore, not ts-expect-error because it's _not_ an error in ts>4
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Push_ts4<A extends unknown[], B> = [...A, B];
type VariadicTuplesPrefixesSupported = Push_ts4<[1, 2], 3> extends { length: 3 } ? "yes" : "no";
type Push<A extends unknown[], B> = VariadicTuplesPrefixesSupported extends "yes"
    ? Push_ts4<A, B>
    : Array<A[number] | B>;

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
