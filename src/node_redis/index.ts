import { ClientOpts, createClient, RedisClient, addCommand } from "redis";
import { Commands } from "../generated/interface";
import { flattenDeep } from "../flatten";
import { multiMixins } from "./multi";

declare module "redis" {
    export const addCommand: (name: string) => void;
}

const getMixins = (redis: RedisClient) => {
    const end: RedisClient["end"] = (...args) => redis.end(...args);
    return { ...multiMixins(redis), end };
};

export type Mixins = ReturnType<typeof getMixins>;

export interface IHandyRedis extends Omit<Commands, keyof Mixins>, Mixins {
    redis: RedisClient;
}

export interface ICreateHandyClient {
    (port_arg: number, host_arg?: string, options?: ClientOpts): IHandyRedis;
    (unix_socket: string, options?: ClientOpts): IHandyRedis;
    (options?: ClientOpts): IHandyRedis;
    (redisClient: RedisClient): IHandyRedis;
}

/** add a command that isn't included by default in node_redis e.g. `addCommand('lpos')` */
export const addNodeRedisCommand = (command: string) => addCommand(command);

export const createHandyClient: ICreateHandyClient = (...clientArgs: any[]) => {
    const nodeRedis =
        typeof clientArgs[0] === "object" && typeof clientArgs[0].scan === "function"
            ? clientArgs[0]
            : createClient.apply(null, clientArgs);

    const mixins = getMixins(nodeRedis);

    const handyClient = ({ redis: nodeRedis, ...mixins } as unknown) as IHandyRedis;

    Object.keys(nodeRedis.__proto__).forEach((key: keyof IHandyRedis) => {
        const func = nodeRedis[key];
        if (!(key in mixins)) {
            const wrapped = (...args: any[]) =>
                new Promise((resolve, reject) => {
                    const flattened = flattenDeep(args);
                    func.apply(
                        nodeRedis,
                        flattened.concat([(err: any, data: any) => (err ? reject(err) : resolve(data))])
                    );
                });
            handyClient[key] = wrapped as any;
        }
    });
    Object.assign(handyClient);

    return handyClient;
};
