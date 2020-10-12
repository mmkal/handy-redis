/**
 * Fixes for typescript interface generated - these are for oddities of node_redis
 * Patches here are not fixed in the schema because the schema should represent what
 * redis _really_ responds, rather than typescript-client-specific implementation details
 */
export const fixupClientTypescript = (command: string) => (signature: string) => {
    if (command === "HGETALL") {
        signature = matchTypeToNodeRedisHGETALL(signature);
    }
    return signature;
};

/**
 * `HGETALL` transforms the `Array<[string, string]>` response into a hashmap,
 * and that needs to be reflected in the types.
 */
function matchTypeToNodeRedisHGETALL(signature: string) {
    return signature.replace("Array<unknown>", "Record<string, string>");
}
