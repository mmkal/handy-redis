export {
    addNodeRedisCommand,
    createNodeRedisClient,
    WrappedNodeRedisClient,
    CreateNodeRedisClient,
    // for backwards-compatibility
    createNodeRedisClient as createHandyClient,
    WrappedNodeRedisClient as IHandyRedis,
} from "./node_redis";

export { WrappedIORedisClient, createIORedisClient } from "./ioredis";
