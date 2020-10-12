import * as nodeRedis from "redis";
import { Commands } from "../generated/interface";
import { flattenDeep } from "../flatten";
import { WrappedNodeRedisMulti, WrappedNodeRedisMultiImpl } from "./multi";

declare module "redis" {
    export const addCommand: (name: string) => void;
}

export interface WrappedNodeRedisClient extends Omit<Commands, "end" | "multi"> {
    nodeRedis: nodeRedis.RedisClient;
    /** @deprecated use `nodeRedis` */
    redis: nodeRedis.RedisClient;

    /** execMulti was removed in v2.x. Use `multi().exec()` instead. */
    readonly execMulti: never;

    multi(): WrappedNodeRedisMulti;
    batch(): WrappedNodeRedisMulti;
    end(flush?: boolean): void;
}

const WrappedNodeRedisClientImpl = class _WrappedNodeRedisClient {
    readonly nodeRedis: nodeRedis.RedisClient;

    /** @deprecated use `nodeRedis` */
    readonly redis: nodeRedis.RedisClient;

    /** execMulti was removed in v2.x. Use `multi().exec()` instead. */
    readonly execMulti: never;

    constructor(nodeRedis: nodeRedis.RedisClient) {
        this.nodeRedis = nodeRedis;
        this.redis = nodeRedis;
    }

    multi(): WrappedNodeRedisMulti {
        return WrappedNodeRedisMultiImpl.create(this.nodeRedis.multi());
    }

    batch(): WrappedNodeRedisMulti {
        return WrappedNodeRedisMultiImpl.create(this.nodeRedis.batch());
    }

    end(flush?: boolean) {
        return this.nodeRedis.end(flush);
    }
};

const addCommands = (methods: string[]) => {
    methods.forEach(method => {
        (WrappedNodeRedisClientImpl.prototype as any)[method] = function (...args: any[]) {
            return new Promise((resolve, reject) => {
                const flattenedArgs = [
                    ...flattenDeep(args),
                    (err: any, reply: any) => (err ? reject(err) : resolve(reply)),
                ];
                return this.nodeRedis[method](...flattenedArgs);
            });
        };
    });
};

addCommands(
    Object.keys(nodeRedis.RedisClient.prototype).filter(
        method => method === method.toLowerCase() && !(method in WrappedNodeRedisClientImpl.prototype)
    )
);

export interface CreateNodeRedisClient {
    (port_arg: number, host_arg?: string, options?: nodeRedis.ClientOpts): WrappedNodeRedisClient;
    (unix_socket: string, options?: nodeRedis.ClientOpts): WrappedNodeRedisClient;
    (options?: nodeRedis.ClientOpts): WrappedNodeRedisClient;
    (redisClient: nodeRedis.RedisClient): WrappedNodeRedisClient;
}

/** add a command that isn't included by default in node_redis e.g. `addCommand('lpos')` */
export const addNodeRedisCommand = (command: string) => {
    nodeRedis.addCommand(command);
    addCommands([command]);
};

export const createNodeRedisClient: CreateNodeRedisClient = (...clientArgs: any[]): WrappedNodeRedisClient => {
    const nodeRedisInstance =
        typeof clientArgs[0] === "object" && typeof clientArgs[0].scan === "function"
            ? clientArgs[0]
            : nodeRedis.createClient.apply(null, clientArgs);

    return new WrappedNodeRedisClientImpl(nodeRedisInstance) as any;
};
