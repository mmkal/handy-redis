/**
 * Pseudo-higher-kinded type, inspired by fp-ts's implementation. This allows modules using this to provide a generic
 * which receives a type parameter, for example to use a custom "Either" type you could do something like:
 *
 * @example
 * ```
 * declare module "./generated/commands" {
 *   export interface ResultTypes<Result, Context> {
 *     my_implementation_wrapper: Promise<{ success: true, result: T } | { success: false; error: string }>
 *   }
 * }
 *
 * declare const myMulti: Multi<[], "my_implementation_wrapper">
 * ```
 */
export interface ResultTypes<Result, Context> {
    default: Promise<Result>;
}

export type ClientContext = { type: keyof ResultTypes<unknown, unknown> };

/** helper type which returns a type value from the `ResultTypes` higher-kinded type */
export type Result<T, Context extends ClientContext> =
    // prettier-break
    ResultTypes<T, Context>[Context["type"]];

export interface Commands<Context extends ClientContext = { type: "default" }> {
    /**
     * Reload the ACLs from the configured ACL file
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of configured users.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-load)
     */
    acl(acl_subcommand: "LOAD"): Result<unknown, Context>;

    /**
     * Save the current ACL rules in the configured ACL file
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of configured users.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-save)
     */
    acl(acl_subcommand: "SAVE"): Result<unknown, Context>;

    /**
     * List the current ACL rules in ACL config file format
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of configured users.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-list)
     */
    acl(acl_subcommand: "LIST"): Result<unknown, Context>;

    /**
     * List the username of all the configured ACL rules
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of configured users.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-users)
     */
    acl(acl_subcommand: "USERS"): Result<unknown, Context>;

    /**
     * Get the rules for a specific ACL user
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of password, command and pattern rules that the user has.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-getuser)
     */
    acl(acl_subcommand: "GETUSER", username: string): Result<unknown, Context>;

    /**
     * Modify or create the rules for a specific ACL user
     * - _group_: server
     * - _complexity_: O(N). Where N is the number of rules provided.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-setuser)
     */
    acl(acl_subcommand: "SETUSER", username: string, ...rule: Array<string>): Result<unknown, Context>;

    /**
     * Remove the specified ACL users and the associated rules
     * - _group_: server
     * - _complexity_: O(1) amortized time considering the typical user.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-deluser)
     */
    acl(acl_subcommand: "DELUSER", ...username: Array<string>): Result<unknown, Context>;

    /**
     * List the ACL categories or the commands inside a category
     * - _group_: server
     * - _complexity_: O(1) since the categories and commands are a fixed set.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-cat)
     */
    acl(acl_subcommand: "CAT", categoryname?: string): Result<unknown, Context>;

    /**
     * Generate a pseudorandom secure password to use for ACL users
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-genpass)
     */
    acl(acl_subcommand: "GENPASS", bits?: number): Result<unknown, Context>;

    /**
     * Return the name of the user associated to the current connection
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-whoami)
     */
    acl(acl_subcommand: "WHOAMI"): Result<unknown, Context>;

    /**
     * List latest events denied because of ACLs in place
     * - _group_: server
     * - _complexity_: O(N) with N being the number of entries shown.
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-log)
     */
    acl(acl_subcommand: "LOG", count_or_reset?: string): Result<unknown, Context>;

    /**
     * Show helpful text about the different subcommands
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/acl-help)
     */
    acl(acl_subcommand: "HELP"): Result<unknown, Context>;

    /**
     * Append a value to a key
     * - _group_: string
     * - _complexity_: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/append)
     */
    append(key: string, value: string): Result<number, Context>;

    /**
     * Authenticate to the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/auth)
     */
    auth(password: string): Result<"OK", Context>;

    /**
     * Authenticate to the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/auth)
     */
    auth(username: string, password: string): Result<"OK", Context>;

    /**
     * Asynchronously rewrite the append-only file
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/bgrewriteaof)
     */
    bgrewriteaof(): Result<string, Context>;

    /**
     * Asynchronously save the dataset to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/bgsave)
     */
    bgsave(schedule?: "SCHEDULE"): Result<"OK", Context>;

    /**
     * Count set bits in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/bitcount)
     */
    bitcount(key: string, start_end?: [start: number, end: number]): Result<number, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        incrby?: [incrby: "INCRBY", type_offset_increment: [type: string, offset: number, increment: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        set?: [set: "SET", type_offset_value: [type: string, offset: number, value: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        set?: [set: "SET", type_offset_value: [type: string, offset: number, value: number]],
        incrby?: [incrby: "INCRBY", type_offset_increment: [type: string, offset: number, increment: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        get?: [get: "GET", type_offset: [type: string, offset: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        get?: [get: "GET", type_offset: [type: string, offset: number]],
        incrby?: [incrby: "INCRBY", type_offset_increment: [type: string, offset: number, increment: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        get?: [get: "GET", type_offset: [type: string, offset: number]],
        set?: [set: "SET", type_offset_value: [type: string, offset: number, value: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/bitfield)
     */
    bitfield(
        key: string,
        get?: [get: "GET", type_offset: [type: string, offset: number]],
        set?: [set: "SET", type_offset_value: [type: string, offset: number, value: number]],
        incrby?: [incrby: "INCRBY", type_offset_increment: [type: string, offset: number, increment: number]],
        overflow?: [overflow: "OVERFLOW", wrap_sat_or_fail: "WRAP" | "SAT" | "FAIL"]
    ): Result<unknown, Context>;

    /**
     * Perform bitwise operations between strings
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/bitop)
     */
    bitop(operation: string, destkey: string, ...key: Array<string>): Result<number, Context>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     *
     * [Full docs](https://redis.io/commands/bitpos)
     */
    bitpos(key: string, bit: number, end?: number): Result<number, Context>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     *
     * [Full docs](https://redis.io/commands/bitpos)
     */
    bitpos(key: string, bit: number, start?: number, end?: number): Result<number, Context>;

    /**
     * Remove and get the first element in a list, or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/blpop)
     */
    blpop(key: Array<string>, timeout: number): Result<Array<unknown> | null, Context>;

    /**
     * Remove and get the last element in a list, or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/brpop)
     */
    brpop(key: Array<string>, timeout: number): Result<Array<unknown> | null, Context>;

    /**
     * Pop an element from a list, push it to another list and return it; or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/brpoplpush)
     */
    brpoplpush(source: string, destination: string, timeout: number): Result<string | null, Context>;

    /**
     * Pop an element from a list, push it to another list and return it; or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/blmove)
     */
    blmove(
        source: string,
        destination: string,
        wherefrom: "LEFT" | "RIGHT",
        whereto: "LEFT" | "RIGHT",
        timeout: number
    ): Result<string | null, Context>;

    /**
     * Remove and return the member with the lowest score from one or more sorted sets, or block until one is available
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/bzpopmin)
     */
    bzpopmin(key: Array<string>, timeout: number): Result<Array<unknown> | null, Context>;

    /**
     * Remove and return the member with the highest score from one or more sorted sets, or block until one is available
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/bzpopmax)
     */
    bzpopmax(key: Array<string>, timeout: number): Result<Array<unknown> | null, Context>;

    /**
     * Instruct the server about tracking or not keys in the next request
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-caching)
     */
    client(client_subcommand: "CACHING", mode: "YES" | "NO"): Result<unknown, Context>;

    /**
     * Returns the client ID for the current connection
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/client-id)
     */
    client(client_subcommand: "ID"): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(client_subcommand: "KILL", skipme?: [skipme: "SKIPME", yes_no: string]): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Kill the connection of a client
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-kill)
     */
    client(
        client_subcommand: "KILL",
        ip_port?: string,
        id?: [id: "ID", client_id: number],
        type?: [type: "TYPE", normal_master_slave_or_pubsub: "normal" | "master" | "slave" | "pubsub"],
        user?: [user: "USER", username: string],
        addr?: [addr: "ADDR", ip_port: string],
        skipme?: [skipme: "SKIPME", yes_no: string]
    ): Result<unknown, Context>;

    /**
     * Get the list of client connections
     * - _group_: connection
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/client-list)
     */
    client(
        client_subcommand: "LIST",
        type?: [type: "TYPE", normal_master_replica_or_pubsub: "normal" | "master" | "replica" | "pubsub"]
    ): Result<unknown, Context>;

    /**
     * Get the current connection name
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 2.6.9
     *
     * [Full docs](https://redis.io/commands/client-getname)
     */
    client(client_subcommand: "GETNAME"): Result<unknown, Context>;

    /**
     * Get tracking notifications redirection client ID if any
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-getredir)
     */
    client(client_subcommand: "GETREDIR"): Result<unknown, Context>;

    /**
     * Stop processing commands from clients for some time
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 2.9.50
     *
     * [Full docs](https://redis.io/commands/client-pause)
     */
    client(client_subcommand: "PAUSE", timeout: number): Result<unknown, Context>;

    /**
     * Instruct the server whether to reply to commands
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/client-reply)
     */
    client(client_subcommand: "REPLY", reply_mode: "ON" | "OFF" | "SKIP"): Result<unknown, Context>;

    /**
     * Set the current connection name
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 2.6.9
     *
     * [Full docs](https://redis.io/commands/client-setname)
     */
    client(client_subcommand: "SETNAME", connection_name: string): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(client_subcommand: "TRACKING", status: "ON" | "OFF", noloop?: "NOLOOP"): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        bcast?: "BCAST",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        bcast?: "BCAST",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        bcast?: "BCAST",
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        bcast?: "BCAST",
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        bcast?: "BCAST",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        bcast?: "BCAST",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        bcast?: "BCAST",
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        bcast?: "BCAST",
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optin?: "OPTIN",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Enable or disable server assisted client side caching support
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/client-tracking)
     */
    client(
        client_subcommand: "TRACKING",
        status: "ON" | "OFF",
        redirect?: [redirect: "REDIRECT", client_id: number],
        prefix?: Array<[prefix: "PREFIX", prefix: string]>,
        bcast?: "BCAST",
        optin?: "OPTIN",
        optout?: "OPTOUT",
        noloop?: "NOLOOP"
    ): Result<unknown, Context>;

    /**
     * Unblock a client blocked in a blocking command from a different connection
     * - _group_: connection
     * - _complexity_: O(log N) where N is the number of client connections
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/client-unblock)
     */
    client(
        client_subcommand: "UNBLOCK",
        client_id: number,
        unblock_type?: "TIMEOUT" | "ERROR"
    ): Result<unknown, Context>;

    /**
     * Assign new hash slots to receiving node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of hash slot arguments
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-addslots)
     */
    cluster(cluster_subcommand: "ADDSLOTS", ...slot: Array<number>): Result<unknown, Context>;

    /**
     * Advance the cluster config epoch
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-bumpepoch)
     */
    cluster(cluster_subcommand: "BUMPEPOCH"): Result<unknown, Context>;

    /**
     * Return the number of failure reports active for a given node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of failure reports
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-count-failure-reports)
     */
    cluster(cluster_subcommand: "COUNT-FAILURE-REPORTS", node_id: string): Result<unknown, Context>;

    /**
     * Return the number of local keys in the specified hash slot
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-countkeysinslot)
     */
    cluster(cluster_subcommand: "COUNTKEYSINSLOT", slot: number): Result<unknown, Context>;

    /**
     * Set hash slots as unbound in receiving node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of hash slot arguments
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-delslots)
     */
    cluster(cluster_subcommand: "DELSLOTS", ...slot: Array<number>): Result<unknown, Context>;

    /**
     * Forces a replica to perform a manual failover of its master.
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-failover)
     */
    cluster(cluster_subcommand: "FAILOVER", options?: "FORCE" | "TAKEOVER"): Result<unknown, Context>;

    /**
     * Delete a node's own slots information
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-flushslots)
     */
    cluster(cluster_subcommand: "FLUSHSLOTS"): Result<unknown, Context>;

    /**
     * Remove a node from the nodes table
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-forget)
     */
    cluster(cluster_subcommand: "FORGET", node_id: string): Result<unknown, Context>;

    /**
     * Return local key names in the specified hash slot
     * - _group_: cluster
     * - _complexity_: O(log(N)) where N is the number of requested keys
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-getkeysinslot)
     */
    cluster(cluster_subcommand: "GETKEYSINSLOT", slot: number, count: number): Result<unknown, Context>;

    /**
     * Provides info about Redis Cluster node state
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-info)
     */
    cluster(cluster_subcommand: "INFO"): Result<unknown, Context>;

    /**
     * Returns the hash slot of the specified key
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of bytes in the key
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-keyslot)
     */
    cluster(cluster_subcommand: "KEYSLOT", key: string): Result<unknown, Context>;

    /**
     * Force a node cluster to handshake with another node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-meet)
     */
    cluster(cluster_subcommand: "MEET", ip: string, port: number): Result<unknown, Context>;

    /**
     * Return the node id
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-myid)
     */
    cluster(cluster_subcommand: "MYID"): Result<unknown, Context>;

    /**
     * Get Cluster config for the node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of Cluster nodes
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-nodes)
     */
    cluster(cluster_subcommand: "NODES"): Result<unknown, Context>;

    /**
     * Reconfigure a node as a replica of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-replicate)
     */
    cluster(cluster_subcommand: "REPLICATE", node_id: string): Result<unknown, Context>;

    /**
     * Reset a Redis Cluster node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-reset)
     */
    cluster(cluster_subcommand: "RESET", reset_type?: "HARD" | "SOFT"): Result<unknown, Context>;

    /**
     * Forces the node to save cluster state on disk
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-saveconfig)
     */
    cluster(cluster_subcommand: "SAVECONFIG"): Result<unknown, Context>;

    /**
     * Set the configuration epoch in a new node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-set-config-epoch)
     */
    cluster(cluster_subcommand: "SET-CONFIG-EPOCH", config_epoch: number): Result<unknown, Context>;

    /**
     * Bind a hash slot to a specific node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-setslot)
     */
    cluster(
        cluster_subcommand: "SETSLOT",
        slot: number,
        subcommand: "IMPORTING" | "MIGRATING" | "STABLE" | "NODE",
        node_id?: string
    ): Result<unknown, Context>;

    /**
     * List replica nodes of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-slaves)
     */
    cluster(cluster_subcommand: "SLAVES", node_id: string): Result<unknown, Context>;

    /**
     * List replica nodes of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-replicas)
     */
    cluster(cluster_subcommand: "REPLICAS", node_id: string): Result<unknown, Context>;

    /**
     * Get array of Cluster slot to node mappings
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of Cluster nodes
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/cluster-slots)
     */
    cluster(cluster_subcommand: "SLOTS"): Result<unknown, Context>;

    /**
     * Get array of Redis command details
     * - _group_: server
     * - _complexity_: O(N) where N is the total number of Redis commands
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/command)
     */
    command(): Result<Array<unknown>, Context>;

    /**
     * Get total number of Redis commands
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/command-count)
     */
    command(command_subcommand: "COUNT"): Result<unknown, Context>;

    /**
     * Extract keys given a full Redis command
     * - _group_: server
     * - _complexity_: O(N) where N is the number of arguments to the command
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/command-getkeys)
     */
    command(command_subcommand: "GETKEYS"): Result<unknown, Context>;

    /**
     * Get array of specific Redis command details
     * - _group_: server
     * - _complexity_: O(N) when N is number of commands to look up
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/command-info)
     */
    command(command_subcommand: "INFO", ...command_name: Array<string>): Result<unknown, Context>;

    /**
     * Get the value of a configuration parameter
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/config-get)
     */
    config(config_subcommand: "GET", parameter: string): Result<unknown, Context>;

    /**
     * Rewrite the configuration file with the in memory configuration
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/config-rewrite)
     */
    config(config_subcommand: "REWRITE"): Result<unknown, Context>;

    /**
     * Set a configuration parameter to the given value
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/config-set)
     */
    config(config_subcommand: "SET", parameter: string, value: string): Result<unknown, Context>;

    /**
     * Reset the stats returned by INFO
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/config-resetstat)
     */
    config(config_subcommand: "RESETSTAT"): Result<unknown, Context>;

    /**
     * Copy a key
     * - _group_: generic
     * - _complexity_: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/copy)
     */
    copy(source: string, destination: string, replace?: "REPLACE"): Result<number, Context>;

    /**
     * Copy a key
     * - _group_: generic
     * - _complexity_: O(N) worst case for collections, where N is the number of nested items. O(1) for string values.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/copy)
     */
    copy(
        source: string,
        destination: string,
        db?: [db: "DB", destination_db: number],
        replace?: "REPLACE"
    ): Result<number, Context>;

    /**
     * Return the number of keys in the selected database
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/dbsize)
     */
    dbsize(): Result<number, Context>;

    /**
     * Get debugging information about a key
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/debug-object)
     */
    debug(debug_subcommand: "OBJECT", key: string): Result<unknown, Context>;

    /**
     * Make the server crash
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/debug-segfault)
     */
    debug(debug_subcommand: "SEGFAULT"): Result<unknown, Context>;

    /**
     * Decrement the integer value of a key by one
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/decr)
     */
    decr(key: string): Result<number, Context>;

    /**
     * Decrement the integer value of a key by the given number
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/decrby)
     */
    decrby(key: string, decrement: number): Result<number, Context>;

    /**
     * Delete a key
     * - _group_: generic
     * - _complexity_: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/del)
     */
    del(...key: Array<string>): Result<number, Context>;

    /**
     * Discard all commands issued after MULTI
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/discard)
     */
    discard(): Result<"OK", Context>;

    /**
     * Return a serialized version of the value stored at the specified key.
     * - _group_: generic
     * - _complexity_: O(1) to access the key and additional O(N*M) to serialize it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/dump)
     */
    dump(key: string): Result<string, Context>;

    /**
     * Echo the given string
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/echo)
     */
    echo(message: string): Result<string, Context>;

    /**
     * Execute a Lua script server side
     * - _group_: scripting
     * - _complexity_: Depends on the script that is executed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/eval)
     */
    eval(script: string, numkeys: number, key: Array<string>, ...arg: Array<string>): Result<unknown, Context>;

    /**
     * Execute a Lua script server side
     * - _group_: scripting
     * - _complexity_: Depends on the script that is executed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/evalsha)
     */
    evalsha(sha_1: string, numkeys: number, key: Array<string>, ...arg: Array<string>): Result<unknown, Context>;

    /**
     * Execute all commands issued after MULTI
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/exec)
     */
    exec(): Result<Array<unknown> | null, Context>;

    /**
     * Determine if a key exists
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/exists)
     */
    exists(...key: Array<string>): Result<number, Context>;

    /**
     * Set a key's time to live in seconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/expire)
     */
    expire(key: string, seconds: number): Result<number, Context>;

    /**
     * Set the expiration for a key as a UNIX timestamp
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/expireat)
     */
    expireat(key: string, timestamp: unknown): Result<number, Context>;

    /**
     * Remove all keys from all databases
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/flushall)
     */
    flushall(async?: "ASYNC"): Result<"OK", Context>;

    /**
     * Remove all keys from the current database
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/flushdb)
     */
    flushdb(async?: "ASYNC"): Result<"OK", Context>;

    /**
     * Add one or more geospatial items in the geospatial index represented using a sorted set
     * - _group_: geo
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/geoadd)
     */
    geoadd(
        key: string,
        ...longitude_latitude_member: Array<[longitude: number, latitude: number, member: string]>
    ): Result<number, Context>;

    /**
     * Returns members of a geospatial index as standard geohash strings
     * - _group_: geo
     * - _complexity_: O(log(N)) for each member requested, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/geohash)
     */
    geohash(key: string, ...member: Array<string>): Result<Array<string>, Context>;

    /**
     * Returns longitude and latitude of members of a geospatial index
     * - _group_: geo
     * - _complexity_: O(log(N)) for each member requested, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/geopos)
     */
    geopos(key: string, ...member: Array<string>): Result<Array<unknown> | null, Context>;

    /**
     * Returns the distance between two members of a geospatial index
     * - _group_: geo
     * - _complexity_: O(log(N))
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/geodist)
     */
    geodist(
        key: string,
        member_1: string,
        member_2: string,
        unit?: "m" | "km" | "ft" | "mi"
    ): Result<string | null, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadius)
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/georadiusbymember)
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        count?: [count: "COUNT", count: number],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", key: string],
        storedist?: [storedist: "STOREDIST", key: string]
    ): Result<unknown, Context>;

    /**
     * Get the value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/get)
     */
    get(key: string): Result<string | null, Context>;

    /**
     * Returns the bit value at offset in the string value stored at key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/getbit)
     */
    getbit(key: string, offset: number): Result<number, Context>;

    /**
     * Get a substring of the string stored at a key
     * - _group_: string
     * - _complexity_: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
     * - _since_: 2.4.0
     *
     * [Full docs](https://redis.io/commands/getrange)
     */
    getrange(key: string, start: number, end: number): Result<string, Context>;

    /**
     * Set the string value of a key and return its old value
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/getset)
     */
    getset(key: string, value: string): Result<string | null, Context>;

    /**
     * Delete one or more hash fields
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields to be removed.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hdel)
     */
    hdel(key: string, ...field: Array<string>): Result<number, Context>;

    /**
     * switch Redis protocol
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/hello)
     */
    hello(protover: number, setname?: [setname: "SETNAME", clientname: string]): Result<Array<unknown>, Context>;

    /**
     * switch Redis protocol
     * - _group_: connection
     * - _complexity_: O(1)
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/hello)
     */
    hello(
        protover: number,
        auth?: [auth: "AUTH", username_password: [username: string, password: string]],
        setname?: [setname: "SETNAME", clientname: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Determine if a hash field exists
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hexists)
     */
    hexists(key: string, field: string): Result<number, Context>;

    /**
     * Get the value of a hash field
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hget)
     */
    hget(key: string, field: string): Result<string | null, Context>;

    /**
     * Get all the fields and values in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hgetall)
     */
    hgetall(key: string): Result<Record<string, string>, Context>;

    /**
     * Increment the integer value of a hash field by the given number
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hincrby)
     */
    hincrby(key: string, field: string, increment: number): Result<number, Context>;

    /**
     * Increment the float value of a hash field by the given amount
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/hincrbyfloat)
     */
    hincrbyfloat(key: string, field: string, increment: number): Result<string, Context>;

    /**
     * Get all the fields in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hkeys)
     */
    hkeys(key: string): Result<Array<string>, Context>;

    /**
     * Get the number of fields in a hash
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hlen)
     */
    hlen(key: string): Result<number, Context>;

    /**
     * Get the values of all the given hash fields
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields being requested.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hmget)
     */
    hmget(key: string, ...field: Array<string>): Result<Array<string | null>, Context>;

    /**
     * Set multiple hash fields to multiple values
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields being set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hmset)
     */
    hmset(key: string, ...field_value: Array<[field: string, value: string]>): Result<"OK", Context>;

    /**
     * Set the string value of a hash field
     * - _group_: hash
     * - _complexity_: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hset)
     */
    hset(key: string, ...field_value: Array<[field: string, value: string]>): Result<number, Context>;

    /**
     * Set the value of a hash field, only if the field does not exist
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hsetnx)
     */
    hsetnx(key: string, field: string, value: string): Result<number, Context>;

    /**
     * Get the length of the value of a hash field
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/hstrlen)
     */
    hstrlen(key: string, field: string): Result<number, Context>;

    /**
     * Get all the values in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/hvals)
     */
    hvals(key: string): Result<Array<string>, Context>;

    /**
     * Increment the integer value of a key by one
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/incr)
     */
    incr(key: string): Result<number, Context>;

    /**
     * Increment the integer value of a key by the given amount
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/incrby)
     */
    incrby(key: string, increment: number): Result<number, Context>;

    /**
     * Increment the float value of a key by the given amount
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/incrbyfloat)
     */
    incrbyfloat(key: string, increment: number): Result<string, Context>;

    /**
     * Get information and statistics about the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/info)
     */
    info(section?: string): Result<string, Context>;

    /**
     * Display some computer art and the Redis version
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/lolwut)
     */
    lolwut(version?: [version: "VERSION", version: number]): Result<string, Context>;

    /**
     * Find all keys matching the given pattern
     * - _group_: generic
     * - _complexity_: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/keys)
     */
    keys(pattern: string): Result<Array<string>, Context>;

    /**
     * Get the UNIX time stamp of the last successful save to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lastsave)
     */
    lastsave(): Result<number, Context>;

    /**
     * Get an element from a list by its index
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lindex)
     */
    lindex(key: string, index: number): Result<string | null, Context>;

    /**
     * Insert an element before or after another element in a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/linsert)
     */
    linsert(key: string, where: "BEFORE" | "AFTER", pivot: string, element: string): Result<number, Context>;

    /**
     * Get the length of a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/llen)
     */
    llen(key: string): Result<number, Context>;

    /**
     * Remove and get the first element in a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lpop)
     */
    lpop(key: string): Result<string | null, Context>;

    /**
     * Return the index of matching elements on a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
     * - _since_: 6.0.6
     *
     * [Full docs](https://redis.io/commands/lpos)
     */
    lpos(key: string, element: string, maxlen?: [maxlen: "MAXLEN", len: number]): Result<unknown, Context>;

    /**
     * Return the index of matching elements on a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
     * - _since_: 6.0.6
     *
     * [Full docs](https://redis.io/commands/lpos)
     */
    lpos(
        key: string,
        element: string,
        count?: [count: "COUNT", num_matches: number],
        maxlen?: [maxlen: "MAXLEN", len: number]
    ): Result<unknown, Context>;

    /**
     * Return the index of matching elements on a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
     * - _since_: 6.0.6
     *
     * [Full docs](https://redis.io/commands/lpos)
     */
    lpos(
        key: string,
        element: string,
        rank?: [rank: "RANK", rank: number],
        maxlen?: [maxlen: "MAXLEN", len: number]
    ): Result<unknown, Context>;

    /**
     * Return the index of matching elements on a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements in the list, for the average case. When searching for elements near the head or the tail of the list, or when the MAXLEN option is provided, the command may run in constant time.
     * - _since_: 6.0.6
     *
     * [Full docs](https://redis.io/commands/lpos)
     */
    lpos(
        key: string,
        element: string,
        rank?: [rank: "RANK", rank: number],
        count?: [count: "COUNT", num_matches: number],
        maxlen?: [maxlen: "MAXLEN", len: number]
    ): Result<unknown, Context>;

    /**
     * Prepend one or multiple elements to a list
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lpush)
     */
    lpush(key: string, ...element: Array<string>): Result<number, Context>;

    /**
     * Prepend an element to a list, only if the list exists
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/lpushx)
     */
    lpushx(key: string, ...element: Array<string>): Result<number, Context>;

    /**
     * Get a range of elements from a list
     * - _group_: list
     * - _complexity_: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lrange)
     */
    lrange(key: string, start: number, stop: number): Result<Array<string>, Context>;

    /**
     * Remove elements from a list
     * - _group_: list
     * - _complexity_: O(N+M) where N is the length of the list and M is the number of elements removed.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lrem)
     */
    lrem(key: string, count: number, element: string): Result<number, Context>;

    /**
     * Set the value of an element in a list by its index
     * - _group_: list
     * - _complexity_: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/lset)
     */
    lset(key: string, index: number, element: string): Result<"OK", Context>;

    /**
     * Trim a list to the specified range
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to be removed by the operation.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/ltrim)
     */
    ltrim(key: string, start: number, stop: number): Result<"OK", Context>;

    /**
     * Outputs memory problems report
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-doctor)
     */
    memory(memory_subcommand: "DOCTOR"): Result<unknown, Context>;

    /**
     * Show helpful text about the different subcommands
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-help)
     */
    memory(memory_subcommand: "HELP"): Result<unknown, Context>;

    /**
     * Show allocator internal stats
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-malloc-stats)
     */
    memory(memory_subcommand: "MALLOC-STATS"): Result<unknown, Context>;

    /**
     * Ask the allocator to release memory
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-purge)
     */
    memory(memory_subcommand: "PURGE"): Result<unknown, Context>;

    /**
     * Show memory usage details
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-stats)
     */
    memory(memory_subcommand: "STATS"): Result<unknown, Context>;

    /**
     * Estimate the memory usage of a key
     * - _group_: server
     * - _complexity_: O(N) where N is the number of samples.
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/memory-usage)
     */
    memory(
        memory_subcommand: "USAGE",
        key: string,
        samples?: [samples: "SAMPLES", count: number]
    ): Result<unknown, Context>;

    /**
     * Get the values of all the given keys
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to retrieve.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/mget)
     */
    mget(...key: Array<string>): Result<Array<string | null>, Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        auth?: [auth: "AUTH", password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        auth?: [auth: "AUTH", password: string],
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        replace?: "REPLACE",
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        replace?: "REPLACE",
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        replace?: "REPLACE",
        auth?: [auth: "AUTH", password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        replace?: "REPLACE",
        auth?: [auth: "AUTH", password: string],
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        auth?: [auth: "AUTH", password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        auth?: [auth: "AUTH", password: string],
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        replace?: "REPLACE",
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        replace?: "REPLACE",
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        replace?: "REPLACE",
        auth?: [auth: "AUTH", password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/migrate)
     */
    migrate(
        host: string,
        port: string,
        key: "key" | '""',
        destination_db: number,
        timeout: number,
        copy?: "COPY",
        replace?: "REPLACE",
        auth?: [auth: "AUTH", password: string],
        auth_2?: [auth_2: "AUTH2", username_password: string],
        keys?: [keys: "KEYS", array_string: Array<string>]
    ): Result<"OK", Context>;

    /**
     * List all modules loaded by the server
     * - _group_: server
     * - _complexity_: O(N) where N is the number of loaded modules.
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/module-list)
     */
    module(module_subcommand: "LIST"): Result<unknown, Context>;

    /**
     * Load a module
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/module-load)
     */
    module(module_subcommand: "LOAD", path: string, ...arg: Array<string>): Result<unknown, Context>;

    /**
     * Unload a module
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/module-unload)
     */
    module(module_subcommand: "UNLOAD", name: string): Result<unknown, Context>;

    /**
     * Listen for all requests received by the server in real time
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/monitor)
     */
    monitor(): Result<unknown, Context>;

    /**
     * Move a key to another database
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/move)
     */
    move(key: string, db: number): Result<number, Context>;

    /**
     * Set multiple keys to multiple values
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to set.
     * - _since_: 1.0.1
     *
     * [Full docs](https://redis.io/commands/mset)
     */
    mset(...key_value: Array<[key: string, value: string]>): Result<"OK", Context>;

    /**
     * Set multiple keys to multiple values, only if none of the keys exist
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to set.
     * - _since_: 1.0.1
     *
     * [Full docs](https://redis.io/commands/msetnx)
     */
    msetnx(...key_value: Array<[key: string, value: string]>): Result<number, Context>;

    /**
     * Mark the start of a transaction block
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/multi)
     */
    multi(): Result<"OK", Context>;

    /**
     * Inspect the internals of Redis objects
     * - _group_: generic
     * - _complexity_: O(1) for all the currently implemented subcommands.
     * - _since_: 2.2.3
     *
     * [Full docs](https://redis.io/commands/object)
     */
    object(subcommand: string, ...args: Array<string>): Result<unknown, Context>;

    /**
     * Remove the expiration from a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/persist)
     */
    persist(key: string): Result<number, Context>;

    /**
     * Set a key's time to live in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/pexpire)
     */
    pexpire(key: string, milliseconds: number): Result<number, Context>;

    /**
     * Set the expiration for a key as a UNIX timestamp specified in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/pexpireat)
     */
    pexpireat(key: string, milliseconds_timestamp: unknown): Result<number, Context>;

    /**
     * Adds the specified elements to the specified HyperLogLog.
     * - _group_: hyperloglog
     * - _complexity_: O(1) to add every element.
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/pfadd)
     */
    pfadd(key: string, ...element: Array<string>): Result<number, Context>;

    /**
     * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
     * - _group_: hyperloglog
     * - _complexity_: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/pfcount)
     */
    pfcount(...key: Array<string>): Result<number, Context>;

    /**
     * Merge N different HyperLogLogs into a single one.
     * - _group_: hyperloglog
     * - _complexity_: O(N) to merge N HyperLogLogs, but with high constant times.
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/pfmerge)
     */
    pfmerge(destkey: string, ...sourcekey: Array<string>): Result<"OK", Context>;

    /**
     * Ping the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/ping)
     */
    ping(message?: string): Result<"OK", Context>;

    /**
     * Set the value and expiration in milliseconds of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/psetex)
     */
    psetex(key: string, milliseconds: number, value: string): Result<unknown, Context>;

    /**
     * Listen for messages published to channels matching the given patterns
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of patterns the client is already subscribed to.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/psubscribe)
     */
    psubscribe(...pattern: Array<[pattern: string]>): Result<unknown, Context>;

    /**
     * Inspect the state of the Pub/Sub subsystem
     * - _group_: pubsub
     * - _complexity_: O(N) for the CHANNELS subcommand, where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns). O(N) for the NUMSUB subcommand, where N is the number of requested channels. O(1) for the NUMPAT subcommand.
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/pubsub)
     */
    pubsub(subcommand: string, ...argument: Array<string>): Result<Array<unknown>, Context>;

    /**
     * Get the time to live for a key in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/pttl)
     */
    pttl(key: string): Result<number, Context>;

    /**
     * Post a message to a channel
     * - _group_: pubsub
     * - _complexity_: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/publish)
     */
    publish(channel: string, message: string): Result<number, Context>;

    /**
     * Stop listening for messages posted to channels matching the given patterns
     * - _group_: pubsub
     * - _complexity_: O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/punsubscribe)
     */
    punsubscribe(...pattern: Array<string>): Result<unknown, Context>;

    /**
     * Close the connection
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/quit)
     */
    quit(): Result<"OK", Context>;

    /**
     * Return a random key from the keyspace
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/randomkey)
     */
    randomkey(): Result<string | null, Context>;

    /**
     * Enables read queries for a connection to a cluster replica node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/readonly)
     */
    readonly(): Result<"OK", Context>;

    /**
     * Disables read queries for a connection to a cluster replica node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/readwrite)
     */
    readwrite(): Result<"OK", Context>;

    /**
     * Rename a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/rename)
     */
    rename(key: string, newkey: string): Result<"OK", Context>;

    /**
     * Rename a key, only if the new key does not exist
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/renamenx)
     */
    renamenx(key: string, newkey: string): Result<number, Context>;

    /**
     * Reset the connection
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 6.2
     *
     * [Full docs](https://redis.io/commands/reset)
     */
    reset(): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        idletime?: [idletime: "IDLETIME", seconds: number],
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        absttl?: "ABSTTL",
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        absttl?: "ABSTTL",
        idletime?: [idletime: "IDLETIME", seconds: number],
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace?: "REPLACE",
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace?: "REPLACE",
        idletime?: [idletime: "IDLETIME", seconds: number],
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace?: "REPLACE",
        absttl?: "ABSTTL",
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/restore)
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace?: "REPLACE",
        absttl?: "ABSTTL",
        idletime?: [idletime: "IDLETIME", seconds: number],
        freq?: [freq: "FREQ", frequency: number]
    ): Result<"OK", Context>;

    /**
     * Return the role of the instance in the context of replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.12
     *
     * [Full docs](https://redis.io/commands/role)
     */
    role(): Result<Array<unknown>, Context>;

    /**
     * Remove and get the last element in a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/rpop)
     */
    rpop(key: string): Result<string | null, Context>;

    /**
     * Remove the last element in a list, prepend it to another list and return it
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/rpoplpush)
     */
    rpoplpush(source: string, destination: string): Result<string, Context>;

    /**
     * Pop an element from a list, push it to another list and return it
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/lmove)
     */
    lmove(
        source: string,
        destination: string,
        wherefrom: "LEFT" | "RIGHT",
        whereto: "LEFT" | "RIGHT"
    ): Result<string, Context>;

    /**
     * Append one or multiple elements to a list
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/rpush)
     */
    rpush(key: string, ...element: Array<string>): Result<number, Context>;

    /**
     * Append an element to a list, only if the list exists
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/rpushx)
     */
    rpushx(key: string, ...element: Array<string>): Result<number, Context>;

    /**
     * Add one or more members to a set
     * - _group_: set
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sadd)
     */
    sadd(key: string, ...member: Array<string>): Result<number, Context>;

    /**
     * Synchronously save the dataset to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/save)
     */
    save(): Result<"OK", Context>;

    /**
     * Get the number of members in a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/scard)
     */
    scard(key: string): Result<number, Context>;

    /**
     * Set the debug mode for executed scripts.
     * - _group_: scripting
     * - _complexity_: O(1)
     * - _since_: 3.2.0
     *
     * [Full docs](https://redis.io/commands/script-debug)
     */
    script(script_subcommand: "DEBUG", mode: "YES" | "SYNC" | "NO"): Result<unknown, Context>;

    /**
     * Check existence of scripts in the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the number of scripts to check (so checking a single script is an O(1) operation).
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/script-exists)
     */
    script(script_subcommand: "EXISTS", ...sha_1: Array<string>): Result<unknown, Context>;

    /**
     * Remove all the scripts from the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the number of scripts in cache
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/script-flush)
     */
    script(script_subcommand: "FLUSH"): Result<unknown, Context>;

    /**
     * Kill the script currently in execution.
     * - _group_: scripting
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/script-kill)
     */
    script(script_subcommand: "KILL"): Result<unknown, Context>;

    /**
     * Load the specified Lua script into the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the length in bytes of the script body.
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/script-load)
     */
    script(script_subcommand: "LOAD", script: string): Result<unknown, Context>;

    /**
     * Subtract multiple sets
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sdiff)
     */
    sdiff(...key: Array<string>): Result<Array<string>, Context>;

    /**
     * Subtract multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sdiffstore)
     */
    sdiffstore(destination: string, ...key: Array<string>): Result<number, Context>;

    /**
     * Change the selected database for the current connection
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/select)
     */
    select(index: number): Result<"OK", Context>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/set)
     */
    set(key: string, value: string, get?: "GET"): Result<"OK" | string | null, Context>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/set)
     */
    set(key: string, value: string, condition?: "NX" | "XX", get?: "GET"): Result<"OK" | string | null, Context>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/set)
     */
    set(
        key: string,
        value: string,
        expiration?: [ex_px: "EX" | "PX", number: number] | "KEEPTTL",
        get?: "GET"
    ): Result<"OK" | string | null, Context>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/set)
     */
    set(
        key: string,
        value: string,
        expiration?: [ex_px: "EX" | "PX", number: number] | "KEEPTTL",
        condition?: "NX" | "XX",
        get?: "GET"
    ): Result<"OK" | string | null, Context>;

    /**
     * Sets or clears the bit at offset in the string value stored at key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/setbit)
     */
    setbit(key: string, offset: number, value: number): Result<number, Context>;

    /**
     * Set the value and expiration of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/setex)
     */
    setex(key: string, seconds: number, value: string): Result<"OK", Context>;

    /**
     * Set the value of a key, only if the key does not exist
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/setnx)
     */
    setnx(key: string, value: string): Result<number, Context>;

    /**
     * Overwrite part of a string at key starting at the specified offset
     * - _group_: string
     * - _complexity_: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/setrange)
     */
    setrange(key: string, offset: number, value: string): Result<number, Context>;

    /**
     * Synchronously save the dataset to disk and then shut down the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/shutdown)
     */
    shutdown(save_mode?: "NOSAVE" | "SAVE"): Result<"OK", Context>;

    /**
     * Intersect multiple sets
     * - _group_: set
     * - _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sinter)
     */
    sinter(...key: Array<string>): Result<Array<string>, Context>;

    /**
     * Intersect multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sinterstore)
     */
    sinterstore(destination: string, ...key: Array<string>): Result<number, Context>;

    /**
     * Determine if a given value is a member of a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sismember)
     */
    sismember(key: string, member: string): Result<number, Context>;

    /**
     * Returns the membership associated with the given elements for a set
     * - _group_: set
     * - _complexity_: O(N) where N is the number of elements being checked for membership
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/smismember)
     */
    smismember(key: string, ...member: Array<string>): Result<Array<unknown>, Context>;

    /**
     * Make the server a replica of another instance, or promote it as master. Deprecated starting with Redis 5. Use REPLICAOF instead.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/slaveof)
     */
    slaveof(host: string, port: string): Result<"OK", Context>;

    /**
     * Make the server a replica of another instance, or promote it as master.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/replicaof)
     */
    replicaof(host: string, port: string): Result<"OK", Context>;

    /**
     * Manages the Redis slow queries log
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.2.12
     *
     * [Full docs](https://redis.io/commands/slowlog)
     */
    slowlog(subcommand: string, argument?: string): Result<unknown, Context>;

    /**
     * Get all the members in a set
     * - _group_: set
     * - _complexity_: O(N) where N is the set cardinality.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/smembers)
     */
    smembers(key: string): Result<Array<string>, Context>;

    /**
     * Move a member from one set to another
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/smove)
     */
    smove(source: string, destination: string, member: string): Result<number, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(key: string, store?: [store: "STORE", destination: string]): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        get?: Array<[get: "GET", pattern: string]>,
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        get?: Array<[get: "GET", pattern: string]>,
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        get?: Array<[get: "GET", pattern: string]>,
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        get?: Array<[get: "GET", pattern: string]>,
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sort)
     */
    sort(
        key: string,
        by?: [by: "BY", pattern: string],
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]],
        get?: Array<[get: "GET", pattern: string]>,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        store?: [store: "STORE", destination: string]
    ): Result<number | Array<unknown>, Context>;

    /**
     * Remove and return one or multiple random members from a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/spop)
     */
    spop(key: string, count?: number): Result<null | string | Array<string>, Context>;

    /**
     * Get one or multiple random members from a set
     * - _group_: set
     * - _complexity_: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/srandmember)
     */
    srandmember(key: string, count?: number): Result<string | Array<unknown> | null, Context>;

    /**
     * Remove one or more members from a set
     * - _group_: set
     * - _complexity_: O(N) where N is the number of members to be removed.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/srem)
     */
    srem(key: string, ...member: Array<string>): Result<number, Context>;

    /**
     * Run algorithms (currently LCS) against strings
     * - _group_: string
     * - _complexity_: For LCS O(strlen(s1)*strlen(s2))
     * - _since_: 6.0.0
     *
     * [Full docs](https://redis.io/commands/stralgo)
     */
    stralgo(algorithm: "LCS", ...algo_specific_argument: Array<string>): Result<unknown, Context>;

    /**
     * Get the length of the value stored in a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/strlen)
     */
    strlen(key: string): Result<number, Context>;

    /**
     * Listen for messages published to the given channels
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of channels to subscribe to.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/subscribe)
     */
    subscribe(...channel: Array<string>): Result<unknown, Context>;

    /**
     * Add multiple sets
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sunion)
     */
    sunion(...key: Array<string>): Result<Array<string>, Context>;

    /**
     * Add multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sunionstore)
     */
    sunionstore(destination: string, ...key: Array<string>): Result<number, Context>;

    /**
     * Swaps two Redis databases
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/swapdb)
     */
    swapdb(index_1: number, index_2: number): Result<"OK", Context>;

    /**
     * Internal command used for replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/sync)
     */
    sync(): Result<unknown, Context>;

    /**
     * Internal command used for replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/psync)
     */
    psync(replicationid: number, offset: number): Result<unknown, Context>;

    /**
     * Return the current server time
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     *
     * [Full docs](https://redis.io/commands/time)
     */
    time(): Result<Array<number>, Context>;

    /**
     * Alters the last access time of a key(s). Returns the number of existing keys specified.
     * - _group_: generic
     * - _complexity_: O(N) where N is the number of keys that will be touched.
     * - _since_: 3.2.1
     *
     * [Full docs](https://redis.io/commands/touch)
     */
    touch(...key: Array<string>): Result<number, Context>;

    /**
     * Get the time to live for a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/ttl)
     */
    ttl(key: string): Result<number, Context>;

    /**
     * Determine the type stored at key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     *
     * [Full docs](https://redis.io/commands/type)
     */
    type(key: string): Result<"none" | "string" | "list" | "set" | "zset" | "hash" | "stream", Context>;

    /**
     * Stop listening for messages posted to the given channels
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of clients already subscribed to a channel.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/unsubscribe)
     */
    unsubscribe(...channel: Array<string>): Result<unknown, Context>;

    /**
     * Delete a key asynchronously in another thread. Otherwise it is just as DEL, but non blocking.
     * - _group_: generic
     * - _complexity_: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
     * - _since_: 4.0.0
     *
     * [Full docs](https://redis.io/commands/unlink)
     */
    unlink(...key: Array<string>): Result<number, Context>;

    /**
     * Forget about all watched keys
     * - _group_: transactions
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/unwatch)
     */
    unwatch(): Result<"OK", Context>;

    /**
     * Wait for the synchronous replication of all the write commands sent in the context of the current connection
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     *
     * [Full docs](https://redis.io/commands/wait)
     */
    wait(numreplicas: number, timeout: number): Result<number, Context>;

    /**
     * Watch the given keys to determine execution of the MULTI/EXEC block
     * - _group_: transactions
     * - _complexity_: O(1) for every key.
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/watch)
     */
    watch(...key: Array<string>): Result<"OK", Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(key: string, ...score_member: Array<[score: number, member: string]>): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        change: "CH",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        change: "CH",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        comparison: "GT" | "LT",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        comparison: "GT" | "LT",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        comparison: "GT" | "LT",
        change: "CH",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        comparison: "GT" | "LT",
        change: "CH",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        change: "CH",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        change: "CH",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        comparison: "GT" | "LT",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        comparison: "GT" | "LT",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        comparison: "GT" | "LT",
        change: "CH",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zadd)
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        comparison: "GT" | "LT",
        change: "CH",
        increment: "INCR",
        ...score_member: Array<[score: number, member: string]>
    ): Result<number | string | null, Context>;

    /**
     * Get the number of members in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zcard)
     */
    zcard(key: string): Result<number, Context>;

    /**
     * Count the members in a sorted set with scores within the given values
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zcount)
     */
    zcount(
        key: string,
        min: number | ("-inf" | "+inf") | string,
        max: number | ("-inf" | "+inf") | string
    ): Result<number, Context>;

    /**
     * Subtract multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zdiff)
     */
    zdiff(numkeys: number, key: Array<string>, withscores?: "WITHSCORES"): Result<Array<unknown>, Context>;

    /**
     * Subtract multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zdiffstore)
     */
    zdiffstore(destination: string, numkeys: number, ...key: Array<string>): Result<number, Context>;

    /**
     * Increment the score of a member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zincrby)
     */
    zincrby(key: string, increment: number, member: string): Result<string, Context>;

    /**
     * Intersect multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zinter)
     */
    zinter(numkeys: number, key: Array<string>, withscores?: "WITHSCORES"): Result<Array<unknown>, Context>;

    /**
     * Intersect multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zinter)
     */
    zinter(
        numkeys: number,
        key: Array<string>,
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Intersect multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zinter)
     */
    zinter(
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Intersect multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zinter)
     */
    zinter(
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zinterstore)
     */
    zinterstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"]
    ): Result<number, Context>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zinterstore)
     */
    zinterstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"]
    ): Result<number, Context>;

    /**
     * Count the number of members in a sorted set between a given lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/zlexcount)
     */
    zlexcount(key: string, min: string, max: string): Result<number, Context>;

    /**
     * Remove and return members with the highest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/zpopmax)
     */
    zpopmax(key: string, count?: number): Result<Array<string>, Context>;

    /**
     * Remove and return members with the lowest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/zpopmin)
     */
    zpopmin(key: string, count?: number): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by index
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zrange)
     */
    zrange(key: string, start: number, stop: number, withscores?: "WITHSCORES"): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/zrangebylex)
     */
    zrangebylex(
        key: string,
        min: string,
        max: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/zrevrangebylex)
     */
    zrevrangebylex(
        key: string,
        max: string,
        min: string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     *
     * [Full docs](https://redis.io/commands/zrangebyscore)
     */
    zrangebyscore(
        key: string,
        min: number | ("-inf" | "+inf") | string,
        max: number | ("-inf" | "+inf") | string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     *
     * [Full docs](https://redis.io/commands/zrangebyscore)
     */
    zrangebyscore(
        key: string,
        min: number | ("-inf" | "+inf") | string,
        max: number | ("-inf" | "+inf") | string,
        withscores?: "WITHSCORES",
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Determine the index of a member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N))
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zrank)
     */
    zrank(key: string, member: string): Result<number | null, Context>;

    /**
     * Remove one or more members from a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zrem)
     */
    zrem(key: string, ...member: Array<string>): Result<number, Context>;

    /**
     * Remove all members in a sorted set between the given lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 2.8.9
     *
     * [Full docs](https://redis.io/commands/zremrangebylex)
     */
    zremrangebylex(key: string, min: string, max: string): Result<number, Context>;

    /**
     * Remove all members in a sorted set within the given indexes
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zremrangebyrank)
     */
    zremrangebyrank(key: string, start: number, stop: number): Result<number, Context>;

    /**
     * Remove all members in a sorted set within the given scores
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zremrangebyscore)
     */
    zremrangebyscore(
        key: string,
        min: number | ("-inf" | "+inf") | string,
        max: number | ("-inf" | "+inf") | string
    ): Result<number, Context>;

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zrevrange)
     */
    zrevrange(key: string, start: number, stop: number, withscores?: "WITHSCORES"): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/zrevrangebyscore)
     */
    zrevrangebyscore(
        key: string,
        max: number | ("-inf" | "+inf") | string,
        min: number | ("-inf" | "+inf") | string,
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     *
     * [Full docs](https://redis.io/commands/zrevrangebyscore)
     */
    zrevrangebyscore(
        key: string,
        max: number | ("-inf" | "+inf") | string,
        min: number | ("-inf" | "+inf") | string,
        withscores?: "WITHSCORES",
        limit?: [limit: "LIMIT", offset_count: [offset: number, count: number]]
    ): Result<Array<string>, Context>;

    /**
     * Determine the index of a member in a sorted set, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N))
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zrevrank)
     */
    zrevrank(key: string, member: string): Result<number | null, Context>;

    /**
     * Get the score associated with the given member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     *
     * [Full docs](https://redis.io/commands/zscore)
     */
    zscore(key: string, member: string): Result<string, Context>;

    /**
     * Add multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zunion)
     */
    zunion(numkeys: number, key: Array<string>, withscores?: "WITHSCORES"): Result<Array<unknown>, Context>;

    /**
     * Add multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zunion)
     */
    zunion(
        numkeys: number,
        key: Array<string>,
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Add multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zunion)
     */
    zunion(
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Add multiple sorted sets
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M*log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zunion)
     */
    zunion(
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"],
        withscores?: "WITHSCORES"
    ): Result<Array<unknown>, Context>;

    /**
     * Get the score associated with the given members in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(N) where N is the number of members being requested.
     * - _since_: 6.2.0
     *
     * [Full docs](https://redis.io/commands/zmscore)
     */
    zmscore(key: string, ...member: Array<string>): Result<Array<unknown> | null, Context>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zunionstore)
     */
    zunionstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"]
    ): Result<number, Context>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     *
     * [Full docs](https://redis.io/commands/zunionstore)
     */
    zunionstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights?: [weights: "WEIGHTS", array_number: Array<number>],
        aggregate?: [aggregate: "AGGREGATE", aggregate: "SUM" | "MIN" | "MAX"]
    ): Result<number, Context>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/scan)
     */
    scan(cursor: number, type?: [type: "TYPE", type: string]): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/scan)
     */
    scan(
        cursor: number,
        count?: [count: "COUNT", count: number],
        type?: [type: "TYPE", type: string]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/scan)
     */
    scan(
        cursor: number,
        match?: [match: "MATCH", pattern: string],
        type?: [type: "TYPE", type: string]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/scan)
     */
    scan(
        cursor: number,
        match?: [match: "MATCH", pattern: string],
        count?: [count: "COUNT", count: number],
        type?: [type: "TYPE", type: string]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/sscan)
     */
    sscan(
        key: string,
        cursor: number,
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/sscan)
     */
    sscan(
        key: string,
        cursor: number,
        match?: [match: "MATCH", pattern: string],
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/hscan)
     */
    hscan(
        key: string,
        cursor: number,
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/hscan)
     */
    hscan(
        key: string,
        cursor: number,
        match?: [match: "MATCH", pattern: string],
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/zscan)
     */
    zscan(
        key: string,
        cursor: number,
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     *
     * [Full docs](https://redis.io/commands/zscan)
     */
    zscan(
        key: string,
        cursor: number,
        match?: [match: "MATCH", pattern: string],
        count?: [count: "COUNT", count: number]
    ): Result<[cursor: string, values: Array<string>], Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(help?: "HELP"): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(stream?: [stream: "STREAM", key: string], help?: "HELP"): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(groups?: [groups: "GROUPS", key: string], help?: "HELP"): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(
        groups?: [groups: "GROUPS", key: string],
        stream?: [stream: "STREAM", key: string],
        help?: "HELP"
    ): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(
        consumers?: [consumers: "CONSUMERS", key_groupname: [key: string, groupname: string]],
        help?: "HELP"
    ): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(
        consumers?: [consumers: "CONSUMERS", key_groupname: [key: string, groupname: string]],
        stream?: [stream: "STREAM", key: string],
        help?: "HELP"
    ): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(
        consumers?: [consumers: "CONSUMERS", key_groupname: [key: string, groupname: string]],
        groups?: [groups: "GROUPS", key: string],
        help?: "HELP"
    ): Result<unknown, Context>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xinfo)
     */
    xinfo(
        consumers?: [consumers: "CONSUMERS", key_groupname: [key: string, groupname: string]],
        groups?: [groups: "GROUPS", key: string],
        stream?: [stream: "STREAM", key: string],
        help?: "HELP"
    ): Result<unknown, Context>;

    /**
     * Appends a new entry to a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xadd)
     */
    xadd(
        key: string,
        asterisk_or_id: "*" | "ID",
        ...field_value: Array<[field: string, value: string]>
    ): Result<string | null, Context>;

    /**
     * Appends a new entry to a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xadd)
     */
    xadd(
        key: string,
        nomkstream: "NOMKSTREAM",
        asterisk_or_id: "*" | "ID",
        ...field_value: Array<[field: string, value: string]>
    ): Result<string | null, Context>;

    /**
     * Appends a new entry to a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xadd)
     */
    xadd(
        key: string,
        maxlen: [maxlen: "MAXLEN", operator: number | [equals_or_tilde: "=" | "~", length: number]],
        asterisk_or_id: "*" | "ID",
        ...field_value: Array<[field: string, value: string]>
    ): Result<string | null, Context>;

    /**
     * Appends a new entry to a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xadd)
     */
    xadd(
        key: string,
        maxlen: [maxlen: "MAXLEN", operator: number | [equals_or_tilde: "=" | "~", length: number]],
        nomkstream: "NOMKSTREAM",
        asterisk_or_id: "*" | "ID",
        ...field_value: Array<[field: string, value: string]>
    ): Result<string | null, Context>;

    /**
     * Trims the stream to (approximately if '~' is passed) a certain size
     * - _group_: stream
     * - _complexity_: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xtrim)
     */
    xtrim(
        key: string,
        strategy: "MAXLEN",
        operator: number | [equals_or_tilde: "=" | "~", length: number]
    ): Result<number, Context>;

    /**
     * Removes the specified entries from the stream. Returns the number of items actually deleted, that may be different from the number of IDs passed in case certain IDs do not exist.
     * - _group_: stream
     * - _complexity_: O(1) for each single item to delete in the stream, regardless of the stream size.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xdel)
     */
    xdel(key: string, ...id: Array<string>): Result<number, Context>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xrange)
     */
    xrange(
        key: string,
        start: string,
        end: string,
        count?: [count: "COUNT", count: number]
    ): Result<Array<unknown>, Context>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xrevrange)
     */
    xrevrange(
        key: string,
        end: string,
        start: string,
        count?: [count: "COUNT", count: number]
    ): Result<Array<unknown>, Context>;

    /**
     * Return the number of entries in a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xlen)
     */
    xlen(key: string): Result<number, Context>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xread)
     */
    xread(streams: "STREAMS", key: Array<string>, ...id: Array<string>): Result<Array<unknown>, Context>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xread)
     */
    xread(
        block: [block: "BLOCK", milliseconds: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<Array<unknown>, Context>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xread)
     */
    xread(
        count: [count: "COUNT", count: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<Array<unknown>, Context>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xread)
     */
    xread(
        count: [count: "COUNT", count: number],
        block: [block: "BLOCK", milliseconds: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<Array<unknown>, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xgroup)
     */
    xgroup(
        create?:
            | [create: [create: "CREATE", key_groupname: [key: string, groupname: string]], id: "ID" | "$"]
            | [
                  create: [create: "CREATE", key_groupname: [key: string, groupname: string]],
                  id: "ID" | "$",
                  mkstream: "MKSTREAM"
              ],
        setid?: [setid: [setid: "SETID", key_groupname: [key: string, groupname: string]], id: "ID" | "$"],
        destroy?: [destroy: "DESTROY", key_groupname: [key: string, groupname: string]],
        createconsumer?: [
            createconsumer: "CREATECONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ],
        delconsumer?: [
            delconsumer: "DELCONSUMER",
            key_groupname_consumername: [key: string, groupname: string, consumername: string]
        ]
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        noack: "NOACK",
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        block: [block: "BLOCK", milliseconds: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        block: [block: "BLOCK", milliseconds: number],
        noack: "NOACK",
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        count: [count: "COUNT", count: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        count: [count: "COUNT", count: number],
        noack: "NOACK",
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        count: [count: "COUNT", count: number],
        block: [block: "BLOCK", milliseconds: number],
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xreadgroup)
     */
    xreadgroup(
        group: [group: "GROUP", group_consumer: [group: string, consumer: string]],
        count: [count: "COUNT", count: number],
        block: [block: "BLOCK", milliseconds: number],
        noack: "NOACK",
        streams: "STREAMS",
        key: Array<string>,
        ...id: Array<string>
    ): Result<unknown, Context>;

    /**
     * Marks a pending message as correctly processed, effectively removing it from the pending entries list of the consumer group. Return value of the command is the number of messages successfully acknowledged, that is, the IDs we were actually able to resolve in the PEL.
     * - _group_: stream
     * - _complexity_: O(1) for each message ID processed.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xack)
     */
    xack(key: string, group: string, ...id: Array<string>): Result<number, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time?: [time: "TIME", ms_unix_time: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time?: [time: "TIME", ms_unix_time: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time?: [time: "TIME", ms_unix_time: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time?: [time: "TIME", ms_unix_time: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        time?: [time: "TIME", ms_unix_time: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        time?: [time: "TIME", ms_unix_time: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        time?: [time: "TIME", ms_unix_time: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xclaim)
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle?: [idle: "IDLE", ms: number],
        time?: [time: "TIME", ms_unix_time: number],
        retrycount?: [retrycount: "RETRYCOUNT", count: number],
        force?: unknown,
        justid?: unknown
    ): Result<Array<unknown>, Context>;

    /**
     * Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). O(M), where M is the total number of entries scanned when used with the IDLE filter. When the command returns just the summary and the list of consumers is small, it runs in O(1) time; otherwise, an additional O(N) time for iterating every consumer.
     * - _since_: 5.0.0
     *
     * [Full docs](https://redis.io/commands/xpending)
     */
    xpending(
        key: string,
        group: string,
        filters?:
            | [start: string, end: string, count: number]
            | [idle: [idle: "IDLE", min_idle_time: number], start: string, end: string, count: number]
            | [start: string, end: string, count: number, consumer: string]
            | [idle: [idle: "IDLE", min_idle_time: number], start: string, end: string, count: number, consumer: string]
    ): Result<Array<unknown>, Context>;

    /**
     * Return a human readable latency analysis report.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-doctor)
     */
    latency(latency_subcommand: "DOCTOR"): Result<unknown, Context>;

    /**
     * Return a latency graph for the event.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-graph)
     */
    latency(latency_subcommand: "GRAPH", event: string): Result<unknown, Context>;

    /**
     * Return timestamp-latency samples for the event.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-history)
     */
    latency(latency_subcommand: "HISTORY", event: string): Result<unknown, Context>;

    /**
     * Return the latest latency samples for all events.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-latest)
     */
    latency(latency_subcommand: "LATEST"): Result<unknown, Context>;

    /**
     * Reset latency data for one or more events.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-reset)
     */
    latency(latency_subcommand: "RESET", ...event: Array<string>): Result<unknown, Context>;

    /**
     * Show helpful text about the different subcommands.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     *
     * [Full docs](https://redis.io/commands/latency-help)
     */
    latency(latency_subcommand: "HELP"): Result<unknown, Context>;
}
