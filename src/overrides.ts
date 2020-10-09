import { Multi, RedisClient } from "redis";

declare module "redis" {
    interface Multi {
        /** @deprecated */
        exec(cb?: Callback<any[]>): boolean;
        /** @deprecated */
        EXEC(cb?: Callback<any[]>): boolean;
        execAsync: () => Promise<any[]>;
        exec_atomicAsync: () => Promise<any[]>;
    }
}

export type AdditionalFunctions = {
    multi: () => Multi;
    batch: () => Multi;
    end: RedisClient["end"];
};

const promisifyMulti = (redisMulti: Multi): Multi => {
    const origExec = redisMulti.exec.bind(redisMulti);
    const origExecAtomic = redisMulti.exec_atomic.bind(redisMulti);

    return Object.assign(redisMulti, {
        exec: undefined,
        EXEC: undefined,
        exec_atomic: undefined,
        EXEC_ATOMIC: undefined,
        execAsync: () =>
            new Promise<any[]>((resolve, reject) =>
                origExec((err: any, reply: any) => (err ? reject(err) : resolve(reply)))
            ),
        exec_atomicAsync: () =>
            new Promise<any[]>((resolve, reject) =>
                origExecAtomic((err: any, reply: any) => (err ? reject(err) : resolve(reply)))
            ),
    });
};

export const getMixins = (client: RedisClient): AdditionalFunctions => ({
    multi: () => promisifyMulti(client.multi()),
    batch: () => promisifyMulti(client.batch()),
    end: (...args) => client.end(...args),
});
