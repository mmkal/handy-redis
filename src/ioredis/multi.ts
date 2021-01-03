import { Commands } from "../generated/interface";
import { Push } from "../push";

declare module "../generated/interface" {
    export interface ResultTypes<Result, Context> {
        /**
         * This determines the correct type for a ioredis multi result. e.g. `multi.keys('foo:*')` should be a multi instance
         * which will include include a `string[]` value in the array eventually returned by `.exec()`.
         */
        ioredis_multi: WrappedIORedisMulti<
            Push<
                // get the original results from client context
                Extract<Context, { results: unknown[] }>["results"],
                // Then push in the new result (e.g. for `keys`, `Result = string[]`)
                MultiResult<Result>
            >
        >;
    }
}

export type MultiResult<T> = [Error, undefined] | [null, T];

export interface WrappedIORedisMulti<Results extends unknown[] = []>
    extends Omit<Commands<{ type: "ioredis_multi"; results: Results }>, "exec"> {
    /** Execute all commands issued after multi */
    exec(): Promise<Results>;
}

export interface IORedisMultiMixins {
    multi(): WrappedIORedisMulti;
}
