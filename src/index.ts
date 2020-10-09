import { ClientOpts, createClient, RedisClient } from "redis";
import { Client } from "./generated/interface";
import { flattenDeep } from "./flatten";
import { AdditionalFunctions, getMixins } from "./overrides";

export interface IHandyRedis extends Omit<Client, keyof AdditionalFunctions>, AdditionalFunctions {
    redis: RedisClient;
}

export interface ICreateHandyClient {
    (port_arg: number, host_arg?: string, options?: ClientOpts): IHandyRedis;
    (unix_socket: string, options?: ClientOpts): IHandyRedis;
    (options?: ClientOpts): IHandyRedis;
    (redisClient: RedisClient): IHandyRedis;
}

export const createHandyClient: ICreateHandyClient = (...clientArgs: any[]) => {
    const nodeRedis =
        typeof clientArgs[0] === "object" && typeof clientArgs[0].scan === "function"
            ? clientArgs[0]
            : createClient.apply(null, clientArgs);

    const mixins = getMixins(nodeRedis);
    const handyClient = ({ redis: nodeRedis, ...mixins } as unknown) as IHandyRedis;

    Object.keys(nodeRedis.__proto__).forEach((key: keyof IHandyRedis) => {
        const func = nodeRedis[key];
        if (key in mixins) {
            // handyClient[key] = (mixins as any)[key];
        } else {
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
