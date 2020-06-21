import { ClientOpts, createClient, RedisClient } from "redis";
import { IHandyRedis } from "./generated/interface";
import { flattenDeep } from "./flatten";
import { useUnderlyingImpl, additionalFunctions } from "./overrides";

export { IHandyRedis } from "./generated/interface";

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

    const handyClient = { redis: nodeRedis } as IHandyRedis;

    Object.keys(nodeRedis.__proto__).forEach((key: keyof IHandyRedis) => {
        const func = nodeRedis[key];
        if (useUnderlyingImpl.has(key as any)) {
            handyClient[key] = func.bind(nodeRedis);
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
    Object.assign(handyClient, additionalFunctions);

    return handyClient;
};
