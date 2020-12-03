import { createNodeRedisClient, WrappedNodeRedisClient } from "./node_redis";

export {
    addNodeRedisCommand,
    createNodeRedisClient,
    WrappedNodeRedisClient,
    CreateNodeRedisClient,
} from "./node_redis";

export { createIORedisClient, WrappedIORedisClient } from "./ioredis";

// aliases for backwards-compatibility with v1.x

/** @deprecated use `createNodeRedisClient` */
export const createHandyClient = createNodeRedisClient;

/** @deprecated use `WrappedNodeRedisClient` */
export type IHandyRedis = WrappedNodeRedisClient;
