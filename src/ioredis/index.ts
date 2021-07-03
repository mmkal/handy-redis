import * as IORedis from "ioredis";
import { Commands } from "../generated/interface";
import { WrappedIORedisMulti } from "./multi";

export interface WrappedIORedisClient extends Omit<Commands, "multi"> {
    ioredis: IORedis.Redis;
    multi(): WrappedIORedisMulti;
}

export interface CreateIORedisClient {
    (): WrappedIORedisClient;
    (ioredis: IORedis.Redis): WrappedIORedisClient;
    (port?: number, host?: string, options?: IORedis.RedisOptions): WrappedIORedisClient;
    (host?: string, options?: IORedis.RedisOptions): WrappedIORedisClient;
    (options?: IORedis.RedisOptions): WrappedIORedisClient;
}

export const createIORedisClient: CreateIORedisClient = (...clientArgs: any[]): WrappedIORedisClient => {
    const ioredis = clientArgs[0] instanceof IORedis ? clientArgs[0] : new IORedis(...clientArgs);

    return Object.assign(ioredis, { ioredis }) as any;
};
