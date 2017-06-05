import { ClientOpts, createClient, RedisClient } from "redis";
import { createHandyClient as _createHandyClient } from "./generated/client";
import { IHandyRedis } from "./generated/interface";

export * from "redis";
export * from "./generated/interface";

export interface ICreateHandyClient {
    (port_arg: number, host_arg?: string, options?: ClientOpts): IHandyRedis;
    (unix_socket: string, options?: ClientOpts): IHandyRedis;
    (options?: ClientOpts): IHandyRedis;
    (redisClient: RedisClient): IHandyRedis;
}

export const createHandyClient: ICreateHandyClient = (...args: any[]) => {
    if (args.length === 1 && typeof args[0].zscan === "function") {
        return _createHandyClient(args[0]);
    }
    return _createHandyClient(createClient.apply(null, args));
};
