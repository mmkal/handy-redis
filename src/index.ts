import { ClientOpts, createClient } from "redis";
import { HandyRedis } from "./generated";

export * from "redis";
export * from "./generated";

export interface CreateHandyClient {
    (port_arg: number, host_arg?: string, options?: ClientOpts): HandyRedis;
    (unix_socket: string, options?: ClientOpts): HandyRedis;
    (options?: ClientOpts): HandyRedis;
}

export const createHandyClient: CreateHandyClient = (...args: any[]) => new HandyRedis(createClient.apply(null, args));
