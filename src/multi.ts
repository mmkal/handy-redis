import { Multi, RedisClient, ReplyError } from "redis";
import { flattenDeep } from "./flatten";
import { Commands } from "./generated/interface";

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

const WrappedMultiImpl = class _WrappedMulti {
    private constructor(readonly multi: Multi) {}

    static create(multi: Multi): WrappedMulti {
        return new WrappedMultiImpl(multi) as any;
    }

    exec() {
        return new Promise((resolve, reject) => {
            return this.multi.exec((err: any, reply: any) => (err ? reject(err) : resolve(reply)));
        });
    }

    exec_atomic() {
        return new Promise((resolve, reject) => {
            return this.multi.exec_atomic((err: any, reply: any) => (err ? reject(err) : resolve(reply)));
        });
    }
};

Object.keys(Multi.prototype)
    .filter(method => method !== "exec" && method !== "exec_atomic")
    .forEach(method => {
        (WrappedMultiImpl.prototype as any)[method] = function (...args: any[]) {
            (this as any).multi[method](flattenDeep(args));
            return this;
        };
    });

export type WrappedMulti<Results extends unknown[] = []> = {
    [K in Exclude<keyof Commands, "exec" | "exec_atomic">]: (
        ...args: Parameters<Commands[K]>
    ) => WrappedMulti<Push<Results, ResultType<K> | ReplyError>>;
} & {
    exec: () => Promise<Results>;
    exec_atomic: () => Promise<Results>;
};

export interface MultiMixins {
    multi(): WrappedMulti;
    batch(): WrappedMulti;
}

export const multiMixins = (client: RedisClient): MultiMixins => ({
    multi: () => WrappedMultiImpl.create(client.multi()),
    batch: () => WrappedMultiImpl.create(client.batch()),
});
