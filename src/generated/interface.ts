import { RedisClient } from "redis";
import { AdditionalFunctions } from "../overrides";
export interface IHandyRedis extends AdditionalFunctions {
    /** the underlying node_redis client */
    redis: RedisClient;
    /**
     * summary: 'Append a value to a key'
     *
     * complexity: 'O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     * since: 2.0.0
     *
     * group: string
     */
    append(
        key: string,
        value: string
    ): Promise<number>;
    /**
     * summary: 'Authenticate to the server'
     *
     * arguments:
     *
     *     - {name: password, type: string}
     *
     * since: 1.0.0
     *
     * group: connection
     */
    auth(
        password: string
    ): Promise<any>;
    /**
     * summary: 'Asynchronously rewrite the append-only file'
     *
     * since: 1.0.0
     *
     * group: server
     */
    bgrewriteaof(): Promise<any>;
    /**
     * summary: 'Asynchronously save the dataset to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    bgsave(): Promise<any>;
    /**
     * summary: 'Count set bits in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [start, end], type: [integer, integer], optional: true}
     *
     * since: 2.6.0
     *
     * group: string
     */
    bitcount(
        key: string,
        start_end: [number, number]
    ): Promise<number>;
    /**
     * summary: 'Count set bits in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [start, end], type: [integer, integer], optional: true}
     *
     * since: 2.6.0
     *
     * group: string
     */
    bitcount(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        set_type_offset_value: ["SET", string, number, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        set_type_offset_value: ["SET", string, number, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        set_type_offset_value: ["SET", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        set_type_offset_value: ["SET", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        get_type_offset: ["GET", string, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        set_type_offset_value: ["SET", string, number, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        set_type_offset_value: ["SET", string, number, number],
        incrby_type_offset_increment: ["INCRBY", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        set_type_offset_value: ["SET", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        set_type_offset_value: ["SET", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        incrby_type_offset_increment: ["INCRBY", string, number, number],
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        incrby_type_offset_increment: ["INCRBY", string, number, number]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string,
        overflow: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<any>;
    /**
     * summary: 'Perform arbitrary bitfield integer operations on strings'
     *
     * complexity: 'O(1) for each subcommand specified'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: GET, name: [type, offset], type: [type, integer], optional: true}
     *
     *     - {command: SET, name: [type, offset, value], type: [type, integer, integer], optional: true}
     *
     *     - {command: INCRBY, name: [type, offset, increment], type: [type, integer, integer], optional: true}
     *
     *     - {command: OVERFLOW, type: enum, enum: [WRAP, SAT, FAIL], optional: true}
     *
     * since: 3.2.0
     *
     * group: string
     */
    bitfield(
        key: string
    ): Promise<any>;
    /**
     * summary: 'Perform bitwise operations between strings'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: operation, type: string}
     *
     *     - {name: destkey, type: key}
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 2.6.0
     *
     * group: string
     */
    bitop(
        operation: string,
        destkey: string,
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Find first bit set or clear in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: bit, type: integer}
     *
     *     - {name: start, type: integer, optional: true}
     *
     *     - {name: end, type: integer, optional: true}
     *
     * since: 2.8.7
     *
     * group: string
     */
    bitpos(
        key: string,
        bit: number,
        start: number,
        end: number
    ): Promise<number>;
    /**
     * summary: 'Find first bit set or clear in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: bit, type: integer}
     *
     *     - {name: start, type: integer, optional: true}
     *
     *     - {name: end, type: integer, optional: true}
     *
     * since: 2.8.7
     *
     * group: string
     */
    bitpos(
        key: string,
        bit: number,
        start: number
    ): Promise<number>;
    /**
     * summary: 'Find first bit set or clear in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: bit, type: integer}
     *
     *     - {name: start, type: integer, optional: true}
     *
     *     - {name: end, type: integer, optional: true}
     *
     * since: 2.8.7
     *
     * group: string
     */
    bitpos(
        key: string,
        bit: number,
        end: number
    ): Promise<number>;
    /**
     * summary: 'Find first bit set or clear in a string'
     *
     * complexity: O(N)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: bit, type: integer}
     *
     *     - {name: start, type: integer, optional: true}
     *
     *     - {name: end, type: integer, optional: true}
     *
     * since: 2.8.7
     *
     * group: string
     */
    bitpos(
        key: string,
        bit: number
    ): Promise<number>;
    /**
     * summary: 'Remove and get the first element in a list, or block until one is available'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 2.0.0
     *
     * group: list
     */
    blpop(
        keys: string[],
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Remove and get the last element in a list, or block until one is available'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 2.0.0
     *
     * group: list
     */
    brpop(
        keys: string[],
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Pop an element from a list, push it to another list and return it; or block until one is available'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: source, type: key}
     *
     *     - {name: destination, type: key}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 2.2.0
     *
     * group: list
     */
    brpoplpush(
        source: string,
        destination: string,
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Remove and return the member with the lowest score from one or more sorted sets, or block until one is available'
     *
     * complexity: 'O(log(N)) with N being the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    bzpopmin(
        keys: string[],
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Remove and return the member with the highest score from one or more sorted sets, or block until one is available'
     *
     * complexity: 'O(log(N)) with N being the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    bzpopmax(
        keys: string[],
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Get array of Redis command details'
     *
     * complexity: 'O(N) where N is the total number of Redis commands'
     *
     * since: 2.8.13
     *
     * group: server
     */
    command(
        ...args: any[]
    ): Promise<Array<any[]>>;
    /**
     * summary: 'Get array of Redis command details'
     *
     * complexity: 'O(N) where N is the total number of Redis commands'
     *
     * since: 2.8.13
     *
     * group: server
     */
    command(): Promise<Array<any[]>>;
    /**
     * summary: 'Return the number of keys in the selected database'
     *
     * since: 1.0.0
     *
     * group: server
     */
    dbsize(): Promise<number>;
    /**
     * summary: 'Decrement the integer value of a key by one'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: string
     */
    decr(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Decrement the integer value of a key by the given number'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: decrement, type: integer}
     *
     * since: 1.0.0
     *
     * group: string
     */
    decrby(
        key: string,
        decrement: number
    ): Promise<number>;
    /**
     * summary: 'Delete a key'
     *
     * complexity: 'O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    del(
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Discard all commands issued after MULTI'
     *
     * since: 2.0.0
     *
     * group: transactions
     */
    discard(): Promise<any>;
    /**
     * summary: 'Return a serialized version of the value stored at the specified key.'
     *
     * complexity: 'O(1) to access the key and additional O(N*M) to serialized it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    dump(
        key: string
    ): Promise<string>;
    /**
     * summary: 'Echo the given string'
     *
     * arguments:
     *
     *     - {name: message, type: string}
     *
     * since: 1.0.0
     *
     * group: connection
     */
    echo(
        message: string
    ): Promise<string>;
    /**
     * summary: 'Execute a Lua script server side'
     *
     * complexity: 'Depends on the script that is executed.'
     *
     * arguments:
     *
     *     - {name: script, type: string}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: arg, type: string, multiple: true}
     *
     * since: 2.6.0
     *
     * group: scripting
     */
    eval(
        script: string,
        numkeys: number,
        keys: string[],
        args: string[]
    ): Promise<any>;
    /**
     * summary: 'Execute a Lua script server side'
     *
     * complexity: 'Depends on the script that is executed.'
     *
     * arguments:
     *
     *     - {name: sha1, type: string}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: arg, type: string, multiple: true}
     *
     * since: 2.6.0
     *
     * group: scripting
     */
    evalsha(
        sha1: string,
        numkeys: number,
        keys: string[],
        args: string[]
    ): Promise<any>;
    /**
     * summary: 'Execute all commands issued after MULTI'
     *
     * since: 1.2.0
     *
     * group: transactions
     */
    exec(): Promise<any>;
    /**
     * summary: 'Determine if a key exists'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    exists(
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Set a key''s time to live in seconds'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: seconds, type: integer}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    expire(
        key: string,
        seconds: number
    ): Promise<number>;
    /**
     * summary: 'Set the expiration for a key as a UNIX timestamp'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: timestamp, type: 'posix time'}
     *
     * since: 1.2.0
     *
     * group: generic
     */
    expireat(
        key: string,
        timestamp: number
    ): Promise<number>;
    /**
     * summary: 'Remove all keys from all databases'
     *
     * arguments:
     *
     *     - {name: async, type: enum, enum: [ASYNC], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    flushall(
        async: "ASYNC"
    ): Promise<any>;
    /**
     * summary: 'Remove all keys from all databases'
     *
     * arguments:
     *
     *     - {name: async, type: enum, enum: [ASYNC], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    flushall(): Promise<any>;
    /**
     * summary: 'Remove all keys from the current database'
     *
     * arguments:
     *
     *     - {name: async, type: enum, enum: [ASYNC], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    flushdb(
        async: "ASYNC"
    ): Promise<any>;
    /**
     * summary: 'Remove all keys from the current database'
     *
     * arguments:
     *
     *     - {name: async, type: enum, enum: [ASYNC], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    flushdb(): Promise<any>;
    /**
     * summary: 'Add one or more geospatial items in the geospatial index represented using a sorted set'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [longitude, latitude, member], type: [double, double, string], multiple: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geoadd(
        key: string,
        ...longitude_latitude_members: Array<[number, number, string]>
    ): Promise<number>;
    /**
     * summary: 'Returns members of a geospatial index as standard geohash strings'
     *
     * complexity: 'O(log(N)) for each member requested, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string, multiple: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geohash(
        key: string,
        ...members: string[]
    ): Promise<string[]>;
    /**
     * summary: 'Returns longitude and latitude of members of a geospatial index'
     *
     * complexity: 'O(log(N)) for each member requested, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string, multiple: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geopos(
        key: string,
        ...members: string[]
    ): Promise<Array<string[] | null>>;
    /**
     * summary: 'Returns the distance between two members of a geospatial index'
     *
     * complexity: O(log(N))
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member1, type: string}
     *
     *     - {name: member2, type: string}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi], optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geodist(
        key: string,
        member1: string,
        member2: string,
        unit: "m" | "km" | "ft" | "mi"
    ): Promise<string | null>;
    /**
     * summary: 'Returns the distance between two members of a geospatial index'
     *
     * complexity: O(log(N))
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member1, type: string}
     *
     *     - {name: member2, type: string}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi], optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geodist(
        key: string,
        member1: string,
        member2: string
    ): Promise<string | null>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store_key: ["STORE", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        storedist_key: ["STOREDIST", string]
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: longitude, type: double}
     *
     *     - {name: latitude, type: double}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi"
    ): Promise<any[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        withhash: "WITHHASH"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withdist: "WITHDIST"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        withhash: "WITHHASH"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord: "WITHCOORD"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        withhash: "WITHHASH"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withdist: "WITHDIST"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withhash: "WITHHASH"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        count: ["COUNT", number]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        order: "ASC" | "DESC"
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store_key: ["STORE", string],
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        store_key: ["STORE", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        storedist_key: ["STOREDIST", string]
    ): Promise<string[]>;
    /**
     * summary: 'Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member'
     *
     * complexity: 'O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     *     - {name: radius, type: double}
     *
     *     - {name: unit, type: enum, enum: [m, km, ft, mi]}
     *
     *     - {name: withcoord, type: enum, enum: [WITHCOORD], optional: true}
     *
     *     - {name: withdist, type: enum, enum: [WITHDIST], optional: true}
     *
     *     - {name: withhash, type: enum, enum: [WITHHASH], optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {command: STORE, name: key, type: key, optional: true}
     *
     *     - {command: STOREDIST, name: key, type: key, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: "m" | "km" | "ft" | "mi"
    ): Promise<string[]>;
    /**
     * summary: 'Get the value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: string
     */
    get(
        key: string
    ): Promise<string | null>;
    /**
     * summary: 'Returns the bit value at offset in the string value stored at key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: offset, type: integer}
     *
     * since: 2.2.0
     *
     * group: string
     */
    getbit(
        key: string,
        offset: number
    ): Promise<number>;
    /**
     * summary: 'Get a substring of the string stored at a key'
     *
     * complexity: 'O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: end, type: integer}
     *
     * since: 2.4.0
     *
     * group: string
     */
    getrange(
        key: string,
        start: number,
        end: number
    ): Promise<string>;
    /**
     * summary: 'Set the string value of a key and return its old value'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     * since: 1.0.0
     *
     * group: string
     */
    getset(
        key: string,
        value: string
    ): Promise<string>;
    /**
     * summary: 'Delete one or more hash fields'
     *
     * complexity: 'O(N) where N is the number of fields to be removed.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string, multiple: true}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hdel(
        key: string,
        ...fields: string[]
    ): Promise<number>;
    /**
     * summary: 'Determine if a hash field exists'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hexists(
        key: string,
        field: string
    ): Promise<number>;
    /**
     * summary: 'Get the value of a hash field'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hget(
        key: string,
        field: string
    ): Promise<string | null>;
    /**
     * summary: 'Get all the fields and values in a hash'
     *
     * complexity: 'O(N) where N is the size of the hash.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hgetall(
        key: string
    ): Promise<any>;
    /**
     * summary: 'Increment the integer value of a hash field by the given number'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     *     - {name: increment, type: integer}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hincrby(
        key: string,
        field: string,
        increment: number
    ): Promise<number>;
    /**
     * summary: 'Increment the float value of a hash field by the given amount'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     *     - {name: increment, type: double}
     *
     * since: 2.6.0
     *
     * group: hash
     */
    hincrbyfloat(
        key: string,
        field: string,
        increment: number
    ): Promise<any>;
    /**
     * summary: 'Get all the fields in a hash'
     *
     * complexity: 'O(N) where N is the size of the hash.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hkeys(
        key: string
    ): Promise<string[]>;
    /**
     * summary: 'Get the number of fields in a hash'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hlen(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Get the values of all the given hash fields'
     *
     * complexity: 'O(N) where N is the number of fields being requested.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string, multiple: true}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hmget(
        key: string,
        ...fields: string[]
    ): Promise<Array<string | null>>;
    /**
     * summary: 'Set multiple hash fields to multiple values'
     *
     * complexity: 'O(N) where N is the number of fields being set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [field, value], type: [string, string], multiple: true}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hmset(
        key: string,
        ...field_values: Array<[string, string]>
    ): Promise<string>;
    /**
     * summary: 'Set the string value of a hash field'
     *
     * complexity: 'O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [field, value], type: [string, string], multiple: true}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hset(
        key: string,
        field: string,
        value: string
    ): Promise<number>;
    /**
     * summary: 'Set the string value of a hash field'
     *
     * complexity: 'O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: [field, value], type: [string, string], multiple: true}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hset(
        key: string,
        ...field_values: Array<[string, string]>
    ): Promise<number>;
    /**
     * summary: 'Set the value of a hash field, only if the field does not exist'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     *     - {name: value, type: string}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hsetnx(
        key: string,
        field: string,
        value: string
    ): Promise<number>;
    /**
     * summary: 'Get the length of the value of a hash field'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: field, type: string}
     *
     * since: 3.2.0
     *
     * group: hash
     */
    hstrlen(
        key: string,
        field: string
    ): Promise<number>;
    /**
     * summary: 'Get all the values in a hash'
     *
     * complexity: 'O(N) where N is the size of the hash.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.0.0
     *
     * group: hash
     */
    hvals(
        key: string
    ): Promise<string[]>;
    /**
     * summary: 'Increment the integer value of a key by one'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: string
     */
    incr(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Increment the integer value of a key by the given amount'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: increment, type: integer}
     *
     * since: 1.0.0
     *
     * group: string
     */
    incrby(
        key: string,
        increment: number
    ): Promise<number>;
    /**
     * summary: 'Increment the float value of a key by the given amount'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: increment, type: double}
     *
     * since: 2.6.0
     *
     * group: string
     */
    incrbyfloat(
        key: string,
        increment: number
    ): Promise<string>;
    /**
     * summary: 'Get information and statistics about the server'
     *
     * arguments:
     *
     *     - {name: section, type: string, optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    info(
        section: string
    ): Promise<string>;
    /**
     * summary: 'Get information and statistics about the server'
     *
     * arguments:
     *
     *     - {name: section, type: string, optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    info(): Promise<string>;
    /**
     * summary: 'Display some computer art and the Redis version'
     *
     * arguments:
     *
     *     - {command: VERSION, name: version, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: server
     */
    lolwut(
        version: ["VERSION", number]
    ): Promise<any>;
    /**
     * summary: 'Display some computer art and the Redis version'
     *
     * arguments:
     *
     *     - {command: VERSION, name: version, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: server
     */
    lolwut(): Promise<any>;
    /**
     * summary: 'Find all keys matching the given pattern'
     *
     * complexity: 'O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.'
     *
     * arguments:
     *
     *     - {name: pattern, type: pattern}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    keys(
        pattern: string
    ): Promise<string[]>;
    /**
     * summary: 'Get the UNIX time stamp of the last successful save to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    lastsave(): Promise<number>;
    /**
     * summary: 'Get an element from a list by its index'
     *
     * complexity: 'O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: index, type: integer}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lindex(
        key: string,
        index: number
    ): Promise<string | null>;
    /**
     * summary: 'Insert an element before or after another element in a list'
     *
     * complexity: 'O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: where, type: enum, enum: [BEFORE, AFTER]}
     *
     *     - {name: pivot, type: string}
     *
     *     - {name: element, type: string}
     *
     * since: 2.2.0
     *
     * group: list
     */
    linsert(
        key: string,
        where: "BEFORE" | "AFTER",
        pivot: string,
        element: string
    ): Promise<number>;
    /**
     * summary: 'Get the length of a list'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: list
     */
    llen(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Remove and get the first element in a list'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lpop(
        key: string
    ): Promise<string>;
    /**
     * summary: 'Prepend one or multiple elements to a list'
     *
     * complexity: 'O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: element, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lpush(
        key: string,
        ...elements: string[]
    ): Promise<number>;
    /**
     * summary: 'Prepend an element to a list, only if the list exists'
     *
     * complexity: 'O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: element, type: string, multiple: true}
     *
     * since: 2.2.0
     *
     * group: list
     */
    lpushx(
        key: string,
        ...elements: string[]
    ): Promise<number>;
    /**
     * summary: 'Get a range of elements from a list'
     *
     * complexity: 'O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lrange(
        key: string,
        start: number,
        stop: number
    ): Promise<any[]>;
    /**
     * summary: 'Remove elements from a list'
     *
     * complexity: 'O(N+M) where N is the length of the list and M is the number of elements removed.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer}
     *
     *     - {name: element, type: string}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lrem(
        key: string,
        count: number,
        element: string
    ): Promise<number>;
    /**
     * summary: 'Set the value of an element in a list by its index'
     *
     * complexity: 'O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: index, type: integer}
     *
     *     - {name: element, type: string}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lset(
        key: string,
        index: number,
        element: string
    ): Promise<string>;
    /**
     * summary: 'Trim a list to the specified range'
     *
     * complexity: 'O(N) where N is the number of elements to be removed by the operation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     * since: 1.0.0
     *
     * group: list
     */
    ltrim(
        key: string,
        start: number,
        stop: number
    ): Promise<string>;
    /**
     * summary: 'Get the values of all the given keys'
     *
     * complexity: 'O(N) where N is the number of keys to retrieve.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    mget(
        ...keys: string[]
    ): Promise<Array<string | null>>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        replace: "REPLACE",
        auth_password: ["AUTH", string],
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        replace: "REPLACE",
        auth_password: ["AUTH", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        replace: "REPLACE",
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        replace: "REPLACE"
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        auth_password: ["AUTH", string],
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        auth_password: ["AUTH", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY",
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        copy: "COPY"
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        replace: "REPLACE",
        auth_password: ["AUTH", string],
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        replace: "REPLACE",
        auth_password: ["AUTH", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        replace: "REPLACE",
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        replace: "REPLACE"
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        auth_password: ["AUTH", string],
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        auth_password: ["AUTH", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number,
        keys_key: ["KEYS", string]
    ): Promise<any>;
    /**
     * summary: 'Atomically transfer a key from a Redis instance to another one.'
     *
     * complexity: 'This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     *     - {name: key, type: enum, enum: [key, '""']}
     *
     *     - {name: destination-db, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     *     - {name: copy, type: enum, enum: [COPY], optional: true}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {command: AUTH, name: password, type: string, optional: true}
     *
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate(
        host: string,
        port: string,
        key: "key" | "\"\"",
        destinationDb: number,
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Listen for all requests received by the server in real time'
     *
     * since: 1.0.0
     *
     * group: server
     */
    monitor(): Promise<any>;
    /**
     * summary: 'Move a key to another database'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: db, type: integer}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    move(
        key: string,
        db: number
    ): Promise<any>;
    /**
     * summary: 'Set multiple keys to multiple values'
     *
     * complexity: 'O(N) where N is the number of keys to set.'
     *
     * arguments:
     *
     *     - {name: [key, value], type: [key, string], multiple: true}
     *
     * since: 1.0.1
     *
     * group: string
     */
    mset(
        ...key_values: Array<[string, string]>
    ): Promise<string>;
    /**
     * summary: 'Set multiple keys to multiple values, only if none of the keys exist'
     *
     * complexity: 'O(N) where N is the number of keys to set.'
     *
     * arguments:
     *
     *     - {name: [key, value], type: [key, string], multiple: true}
     *
     * since: 1.0.1
     *
     * group: string
     */
    msetnx(
        ...key_values: Array<[string, string]>
    ): Promise<number>;
    /**
     * summary: 'Mark the start of a transaction block'
     *
     * since: 1.2.0
     *
     * group: transactions
     */
    multi: RedisClient["multi"];
    /**
     * summary: 'Inspect the internals of Redis objects'
     *
     * complexity: 'O(1) for all the currently implemented subcommands.'
     *
     * since: 2.2.3
     *
     * group: generic
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: arguments, type: string, optional: true, multiple: true}
     */
    object(
        subcommand: string,
        ...argss: string[]
    ): Promise<any>;
    /**
     * summary: 'Inspect the internals of Redis objects'
     *
     * complexity: 'O(1) for all the currently implemented subcommands.'
     *
     * since: 2.2.3
     *
     * group: generic
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: arguments, type: string, optional: true, multiple: true}
     */
    object(
        subcommand: string
    ): Promise<any>;
    /**
     * summary: 'Remove the expiration from a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.2.0
     *
     * group: generic
     */
    persist(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Set a key''s time to live in milliseconds'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: milliseconds, type: integer}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    pexpire(
        key: string,
        milliseconds: number
    ): Promise<number>;
    /**
     * summary: 'Set the expiration for a key as a UNIX timestamp specified in milliseconds'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: milliseconds-timestamp, type: 'posix time'}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    pexpireat(
        key: string,
        millisecondsTimestamp: number
    ): Promise<number>;
    /**
     * summary: 'Adds the specified elements to the specified HyperLogLog.'
     *
     * complexity: 'O(1) to add every element.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: element, type: string, multiple: true}
     *
     * since: 2.8.9
     *
     * group: hyperloglog
     */
    pfadd(
        key: string,
        ...elements: string[]
    ): Promise<number>;
    /**
     * summary: 'Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).'
     *
     * complexity: 'O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 2.8.9
     *
     * group: hyperloglog
     */
    pfcount(
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Merge N different HyperLogLogs into a single one.'
     *
     * complexity: 'O(N) to merge N HyperLogLogs, but with high constant times.'
     *
     * arguments:
     *
     *     - {name: destkey, type: key}
     *
     *     - {name: sourcekey, type: key, multiple: true}
     *
     * since: 2.8.9
     *
     * group: hyperloglog
     */
    pfmerge(
        destkey: string,
        ...sourcekeys: string[]
    ): Promise<string>;
    /**
     * summary: 'Ping the server'
     *
     * arguments:
     *
     *     - {name: message, type: string, optional: true}
     *
     * since: 1.0.0
     *
     * group: connection
     */
    ping(
        message: string
    ): Promise<string>;
    /**
     * summary: 'Ping the server'
     *
     * arguments:
     *
     *     - {name: message, type: string, optional: true}
     *
     * since: 1.0.0
     *
     * group: connection
     */
    ping(): Promise<string>;
    /**
     * summary: 'Set the value and expiration in milliseconds of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: milliseconds, type: integer}
     *
     *     - {name: value, type: string}
     *
     * since: 2.6.0
     *
     * group: string
     */
    psetex(
        key: string,
        milliseconds: number,
        value: string
    ): Promise<string>;
    /**
     * summary: 'Listen for messages published to channels matching the given patterns'
     *
     * complexity: 'O(N) where N is the number of patterns the client is already subscribed to.'
     *
     * arguments:
     *
     *     - {name: [pattern], type: [pattern], multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    psubscribe(
        ...patterns: Array<[string]>
    ): Promise<any>;
    /**
     * summary: 'Inspect the state of the Pub/Sub subsystem'
     *
     * complexity: 'O(N) for the CHANNELS subcommand, where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns). O(N) for the NUMSUB subcommand, where N is the number of requested channels. O(1) for the NUMPAT subcommand.'
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: argument, type: string, optional: true, multiple: true}
     *
     * since: 2.8.0
     *
     * group: pubsub
     */
    pubsub(
        subcommand: string,
        ...args: string[]
    ): Promise<any>;
    /**
     * summary: 'Inspect the state of the Pub/Sub subsystem'
     *
     * complexity: 'O(N) for the CHANNELS subcommand, where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns). O(N) for the NUMSUB subcommand, where N is the number of requested channels. O(1) for the NUMPAT subcommand.'
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: argument, type: string, optional: true, multiple: true}
     *
     * since: 2.8.0
     *
     * group: pubsub
     */
    pubsub(
        subcommand: string
    ): Promise<any>;
    /**
     * summary: 'Get the time to live for a key in milliseconds'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    pttl(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Post a message to a channel'
     *
     * complexity: 'O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).'
     *
     * arguments:
     *
     *     - {name: channel, type: string}
     *
     *     - {name: message, type: string}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    publish(
        channel: string,
        message: string
    ): Promise<any>;
    /**
     * summary: 'Stop listening for messages posted to channels matching the given patterns'
     *
     * complexity: 'O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).'
     *
     * arguments:
     *
     *     - {name: pattern, type: pattern, optional: true, multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    punsubscribe(
        ...patterns: string[]
    ): Promise<any>;
    /**
     * summary: 'Stop listening for messages posted to channels matching the given patterns'
     *
     * complexity: 'O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).'
     *
     * arguments:
     *
     *     - {name: pattern, type: pattern, optional: true, multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    punsubscribe(): Promise<any>;
    /**
     * summary: 'Close the connection'
     *
     * since: 1.0.0
     *
     * group: connection
     */
    quit(): Promise<any>;
    /**
     * summary: 'Return a random key from the keyspace'
     *
     * complexity: O(1)
     *
     * since: 1.0.0
     *
     * group: generic
     */
    randomkey(): Promise<any>;
    /**
     * summary: 'Enables read queries for a connection to a cluster replica node'
     *
     * complexity: O(1)
     *
     * since: 3.0.0
     *
     * group: cluster
     */
    readonly(): Promise<any>;
    /**
     * summary: 'Disables read queries for a connection to a cluster replica node'
     *
     * complexity: O(1)
     *
     * since: 3.0.0
     *
     * group: cluster
     */
    readwrite(): Promise<any>;
    /**
     * summary: 'Rename a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: newkey, type: key}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    rename(
        key: string,
        newkey: string
    ): Promise<string>;
    /**
     * summary: 'Rename a key, only if the new key does not exist'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: newkey, type: key}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    renamenx(
        key: string,
        newkey: string
    ): Promise<number>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        absttl: "ABSTTL",
        idletime_seconds: ["IDLETIME", number],
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        absttl: "ABSTTL",
        idletime_seconds: ["IDLETIME", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        absttl: "ABSTTL",
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        absttl: "ABSTTL"
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        idletime_seconds: ["IDLETIME", number],
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        idletime_seconds: ["IDLETIME", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE",
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        replace: "REPLACE"
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        absttl: "ABSTTL",
        idletime_seconds: ["IDLETIME", number],
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        absttl: "ABSTTL",
        idletime_seconds: ["IDLETIME", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        absttl: "ABSTTL",
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        absttl: "ABSTTL"
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        idletime_seconds: ["IDLETIME", number],
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        idletime_seconds: ["IDLETIME", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string,
        freq_frequency: ["FREQ", number]
    ): Promise<any>;
    /**
     * summary: 'Create a key using the provided serialized value, previously obtained using DUMP.'
     *
     * complexity: 'O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ttl, type: integer}
     *
     *     - {name: serialized-value, type: string}
     *
     *     - {name: replace, type: enum, enum: [REPLACE], optional: true}
     *
     *     - {name: absttl, type: enum, enum: [ABSTTL], optional: true}
     *
     *     - {command: IDLETIME, name: seconds, type: integer, optional: true}
     *
     *     - {command: FREQ, name: frequency, type: integer, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    restore(
        key: string,
        ttl: number,
        serializedValue: string
    ): Promise<any>;
    /**
     * summary: 'Return the role of the instance in the context of replication'
     *
     * since: 2.8.12
     *
     * group: server
     */
    role(): Promise<any[]>;
    /**
     * summary: 'Remove and get the last element in a list'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: list
     */
    rpop(
        key: string
    ): Promise<string>;
    /**
     * summary: 'Remove the last element in a list, prepend it to another list and return it'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: source, type: key}
     *
     *     - {name: destination, type: key}
     *
     * since: 1.2.0
     *
     * group: list
     */
    rpoplpush(
        source: string,
        destination: string
    ): Promise<string>;
    /**
     * summary: 'Append one or multiple elements to a list'
     *
     * complexity: 'O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: element, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: list
     */
    rpush(
        key: string,
        ...elements: string[]
    ): Promise<number>;
    /**
     * summary: 'Append an element to a list, only if the list exists'
     *
     * complexity: 'O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: element, type: string, multiple: true}
     *
     * since: 2.2.0
     *
     * group: list
     */
    rpushx(
        key: string,
        ...elements: string[]
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a set'
     *
     * complexity: 'O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sadd(
        key: string,
        ...members: string[]
    ): Promise<number>;
    /**
     * summary: 'Synchronously save the dataset to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    save(): Promise<any>;
    /**
     * summary: 'Get the number of members in a set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: set
     */
    scard(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Subtract multiple sets'
     *
     * complexity: 'O(N) where N is the total number of elements in all given sets.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sdiff(
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Subtract multiple sets and store the resulting set in a key'
     *
     * complexity: 'O(N) where N is the total number of elements in all given sets.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sdiffstore(
        destination: string,
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Change the selected database for the current connection'
     *
     * arguments:
     *
     *     - {name: index, type: integer}
     *
     * since: 1.0.0
     *
     * group: connection
     */
    select(
        index: number
    ): Promise<any>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        ex_seconds: ["EX", number],
        px_milliseconds: ["PX", number],
        condition: "NX" | "XX"
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        ex_seconds: ["EX", number],
        px_milliseconds: ["PX", number]
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        ex_seconds: ["EX", number],
        condition: "NX" | "XX"
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        ex_seconds: ["EX", number]
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        px_milliseconds: ["PX", number],
        condition: "NX" | "XX"
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        px_milliseconds: ["PX", number]
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string,
        condition: "NX" | "XX"
    ): Promise<string | null>;
    /**
     * summary: 'Set the string value of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     *     - {command: EX, name: seconds, type: integer, optional: true}
     *
     *     - {command: PX, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     * since: 1.0.0
     *
     * group: string
     */
    set(
        key: string,
        value: string
    ): Promise<string | null>;
    /**
     * summary: 'Sets or clears the bit at offset in the string value stored at key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: offset, type: integer}
     *
     *     - {name: value, type: integer}
     *
     * since: 2.2.0
     *
     * group: string
     */
    setbit(
        key: string,
        offset: number,
        value: number | string
    ): Promise<number>;
    /**
     * summary: 'Set the value and expiration of a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: seconds, type: integer}
     *
     *     - {name: value, type: string}
     *
     * since: 2.0.0
     *
     * group: string
     */
    setex(
        key: string,
        seconds: number,
        value: string
    ): Promise<string>;
    /**
     * summary: 'Set the value of a key, only if the key does not exist'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     * since: 1.0.0
     *
     * group: string
     */
    setnx(
        key: string,
        value: string
    ): Promise<number>;
    /**
     * summary: 'Overwrite part of a string at key starting at the specified offset'
     *
     * complexity: 'O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: offset, type: integer}
     *
     *     - {name: value, type: string}
     *
     * since: 2.2.0
     *
     * group: string
     */
    setrange(
        key: string,
        offset: number,
        value: string
    ): Promise<number>;
    /**
     * summary: 'Synchronously save the dataset to disk and then shut down the server'
     *
     * arguments:
     *
     *     - {name: save-mode, type: enum, enum: [NOSAVE, SAVE], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    shutdown(
        saveMode: "NOSAVE" | "SAVE"
    ): Promise<any>;
    /**
     * summary: 'Synchronously save the dataset to disk and then shut down the server'
     *
     * arguments:
     *
     *     - {name: save-mode, type: enum, enum: [NOSAVE, SAVE], optional: true}
     *
     * since: 1.0.0
     *
     * group: server
     */
    shutdown(): Promise<any>;
    /**
     * summary: 'Intersect multiple sets'
     *
     * complexity: 'O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sinter(
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Intersect multiple sets and store the resulting set in a key'
     *
     * complexity: 'O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sinterstore(
        destination: string,
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Determine if a given value is a member of a set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sismember(
        key: string,
        member: string
    ): Promise<number>;
    /**
     * summary: 'Make the server a replica of another instance, or promote it as master. Deprecated starting with Redis 5. Use REPLICAOF instead.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     * since: 1.0.0
     *
     * group: server
     */
    slaveof(
        host: string,
        port: string
    ): Promise<any>;
    /**
     * summary: 'Make the server a replica of another instance, or promote it as master.'
     *
     * arguments:
     *
     *     - {name: host, type: string}
     *
     *     - {name: port, type: string}
     *
     * since: 5.0.0
     *
     * group: server
     */
    replicaof(
        host: string,
        port: string
    ): Promise<any>;
    /**
     * summary: 'Manages the Redis slow queries log'
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: argument, type: string, optional: true}
     *
     * since: 2.2.12
     *
     * group: server
     */
    slowlog(
        subcommand: string,
        arg: string
    ): Promise<any>;
    /**
     * summary: 'Manages the Redis slow queries log'
     *
     * arguments:
     *
     *     - {name: subcommand, type: string}
     *
     *     - {name: argument, type: string, optional: true}
     *
     * since: 2.2.12
     *
     * group: server
     */
    slowlog(
        subcommand: string
    ): Promise<any>;
    /**
     * summary: 'Get all the members in a set'
     *
     * complexity: 'O(N) where N is the set cardinality.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: set
     */
    smembers(
        key: string
    ): Promise<any[]>;
    /**
     * summary: 'Move a member from one set to another'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: source, type: key}
     *
     *     - {name: destination, type: key}
     *
     *     - {name: member, type: string}
     *
     * since: 1.0.0
     *
     * group: set
     */
    smove(
        source: string,
        destination: string,
        member: string
    ): Promise<number>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        ...get_patterns: Array<["GET", string]>
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number],
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        get_patterns: Array<["GET", string]>,
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        ...get_patterns: Array<["GET", string]>
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string],
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        by_pattern: ["BY", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        get_patterns: Array<["GET", string]>,
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        ...get_patterns: Array<["GET", string]>
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number],
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        get_patterns: Array<["GET", string]>,
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        ...get_patterns: Array<["GET", string]>
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        order: "ASC" | "DESC",
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        order: "ASC" | "DESC",
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        order: "ASC" | "DESC",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        order: "ASC" | "DESC"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        sorting: "ALPHA",
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        sorting: "ALPHA"
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string,
        store_destination: ["STORE", string]
    ): Promise<any>;
    /**
     * summary: 'Sort the elements in a list, set or sorted set'
     *
     * complexity: 'O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {command: BY, name: pattern, type: pattern, optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     *     - {command: GET, name: pattern, type: string, optional: true, multiple: true}
     *
     *     - {name: order, type: enum, enum: [ASC, DESC], optional: true}
     *
     *     - {name: sorting, type: enum, enum: [ALPHA], optional: true}
     *
     *     - {command: STORE, name: destination, type: key, optional: true}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    sort(
        key: string
    ): Promise<any>;
    /**
     * summary: 'Remove and return one or multiple random members from a set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    spop(
        key: string,
        count: number
    ): Promise<any>;
    /**
     * summary: 'Remove and return one or multiple random members from a set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    spop(
        key: string
    ): Promise<any>;
    /**
     * summary: 'Get one or multiple random members from a set'
     *
     * complexity: 'Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    srandmember(
        key: string,
        count: number
    ): Promise<any>;
    /**
     * summary: 'Get one or multiple random members from a set'
     *
     * complexity: 'Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    srandmember(
        key: string
    ): Promise<any>;
    /**
     * summary: 'Remove one or more members from a set'
     *
     * complexity: 'O(N) where N is the number of members to be removed.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    srem(
        key: string,
        ...members: string[]
    ): Promise<number>;
    /**
     * summary: 'Get the length of the value stored in a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 2.2.0
     *
     * group: string
     */
    strlen(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Listen for messages published to the given channels'
     *
     * complexity: 'O(N) where N is the number of channels to subscribe to.'
     *
     * arguments:
     *
     *     - {name: channel, type: string, multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    subscribe(
        ...channels: string[]
    ): Promise<any>;
    /**
     * summary: 'Add multiple sets'
     *
     * complexity: 'O(N) where N is the total number of elements in all given sets.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sunion(
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Add multiple sets and store the resulting set in a key'
     *
     * complexity: 'O(N) where N is the total number of elements in all given sets.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 1.0.0
     *
     * group: set
     */
    sunionstore(
        destination: string,
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Swaps two Redis databases'
     *
     * arguments:
     *
     *     - {name: index1, type: integer}
     *
     *     - {name: index2, type: integer}
     *
     * since: 4.0.0
     *
     * group: connection
     */
    swapdb(
        index1: number,
        index2: number
    ): Promise<any>;
    /**
     * summary: 'Internal command used for replication'
     *
     * since: 1.0.0
     *
     * group: server
     */
    sync(): Promise<any>;
    /**
     * summary: 'Internal command used for replication'
     *
     * arguments:
     *
     *     - {name: replicationid, type: integer}
     *
     *     - {name: offset, type: integer}
     *
     * since: 2.8.0
     *
     * group: server
     */
    psync(
        replicationid: number,
        offset: number
    ): Promise<any>;
    /**
     * summary: 'Return the current server time'
     *
     * complexity: O(1)
     *
     * since: 2.6.0
     *
     * group: server
     */
    time(): Promise<string[]>;
    /**
     * summary: 'Alters the last access time of a key(s). Returns the number of existing keys specified.'
     *
     * complexity: 'O(N) where N is the number of keys that will be touched.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 3.2.1
     *
     * group: generic
     */
    touch(
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Get the time to live for a key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    ttl(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Determine the type stored at key'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.0.0
     *
     * group: generic
     */
    type(
        key: string
    ): Promise<string>;
    /**
     * summary: 'Stop listening for messages posted to the given channels'
     *
     * complexity: 'O(N) where N is the number of clients already subscribed to a channel.'
     *
     * arguments:
     *
     *     - {name: channel, type: string, optional: true, multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    unsubscribe(
        ...channels: string[]
    ): Promise<any>;
    /**
     * summary: 'Stop listening for messages posted to the given channels'
     *
     * complexity: 'O(N) where N is the number of clients already subscribed to a channel.'
     *
     * arguments:
     *
     *     - {name: channel, type: string, optional: true, multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    unsubscribe(): Promise<any>;
    /**
     * summary: 'Delete a key asynchronously in another thread. Otherwise it is just as DEL, but non blocking.'
     *
     * complexity: 'O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 4.0.0
     *
     * group: generic
     */
    unlink(
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Forget about all watched keys'
     *
     * complexity: O(1)
     *
     * since: 2.2.0
     *
     * group: transactions
     */
    unwatch(): Promise<any>;
    /**
     * summary: 'Wait for the synchronous replication of all the write commands sent in the context of the current connection'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: numreplicas, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 3.0.0
     *
     * group: generic
     */
    wait(
        numreplicas: number,
        timeout: number
    ): Promise<any>;
    /**
     * summary: 'Watch the given keys to determine execution of the MULTI/EXEC block'
     *
     * complexity: 'O(1) for every key.'
     *
     * arguments:
     *
     *     - {name: key, type: key, multiple: true}
     *
     * since: 2.2.0
     *
     * group: transactions
     */
    watch(
        ...keys: string[]
    ): Promise<any>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        change: "CH",
        increment: "INCR",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        change: "CH",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        increment: "INCR",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        condition: "NX" | "XX",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        change: "CH",
        increment: "INCR",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        change: "CH",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        increment: "INCR",
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Add one or more members to a sorted set, or update its score if it already exists'
     *
     * complexity: 'O(log(N)) for each item added, where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: condition, type: enum, enum: [NX, XX], optional: true}
     *
     *     - {name: change, type: enum, enum: [CH], optional: true}
     *
     *     - {name: increment, type: enum, enum: [INCR], optional: true}
     *
     *     - {name: [score, member], type: [double, string], multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zadd(
        key: string,
        ...score_members: Array<[number, string]>
    ): Promise<number>;
    /**
     * summary: 'Get the number of members in a sorted set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zcard(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Count the members in a sorted set with scores within the given values'
     *
     * complexity: 'O(log(N)) with N being the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zcount(
        key: string,
        min: number,
        max: number
    ): Promise<number>;
    /**
     * summary: 'Increment the score of a member in a sorted set'
     *
     * complexity: 'O(log(N)) where N is the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: increment, type: integer}
     *
     *     - {name: member, type: string}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zincrby(
        key: string,
        increment: number,
        member: string
    ): Promise<string>;
    /**
     * summary: 'Intersect multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zinterstore(
        destination: string,
        numkeys: number,
        keys: string[],
        weights_weight: ["WEIGHTS", number],
        aggregate: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    /**
     * summary: 'Intersect multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zinterstore(
        destination: string,
        numkeys: number,
        keys: string[],
        weights_weight: ["WEIGHTS", number]
    ): Promise<number>;
    /**
     * summary: 'Intersect multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zinterstore(
        destination: string,
        numkeys: number,
        keys: string[],
        aggregate: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    /**
     * summary: 'Intersect multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zinterstore(
        destination: string,
        numkeys: number,
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Count the number of members in a sorted set between a given lexicographical range'
     *
     * complexity: 'O(log(N)) with N being the number of elements in the sorted set.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: string}
     *
     *     - {name: max, type: string}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zlexcount(
        key: string,
        min: string,
        max: string
    ): Promise<number>;
    /**
     * summary: 'Remove and return members with the highest scores in a sorted set'
     *
     * complexity: 'O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    zpopmax(
        key: string,
        count: number
    ): Promise<string[]>;
    /**
     * summary: 'Remove and return members with the highest scores in a sorted set'
     *
     * complexity: 'O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    zpopmax(
        key: string
    ): Promise<string[]>;
    /**
     * summary: 'Remove and return members with the lowest scores in a sorted set'
     *
     * complexity: 'O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    zpopmin(
        key: string,
        count: number
    ): Promise<string[]>;
    /**
     * summary: 'Remove and return members with the lowest scores in a sorted set'
     *
     * complexity: 'O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: sorted_set
     */
    zpopmin(
        key: string
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by index'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zrange(
        key: string,
        start: number,
        stop: number,
        withscores: "WITHSCORES"
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by index'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zrange(
        key: string,
        start: number,
        stop: number
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by lexicographical range'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: string}
     *
     *     - {name: max, type: string}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zrangebylex(
        key: string,
        min: string,
        max: string,
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by lexicographical range'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: string}
     *
     *     - {name: max, type: string}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zrangebylex(
        key: string,
        min: string,
        max: string
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: string}
     *
     *     - {name: min, type: string}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zrevrangebylex(
        key: string,
        max: string,
        min: string,
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: string}
     *
     *     - {name: min, type: string}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zrevrangebylex(
        key: string,
        max: string,
        min: string
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 1.0.5
     *
     * group: sorted_set
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number,
        withscores: "WITHSCORES",
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 1.0.5
     *
     * group: sorted_set
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number,
        withscores: "WITHSCORES"
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 1.0.5
     *
     * group: sorted_set
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number,
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 1.0.5
     *
     * group: sorted_set
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number
    ): Promise<any[]>;
    /**
     * summary: 'Determine the index of a member in a sorted set'
     *
     * complexity: O(log(N))
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zrank(
        key: string,
        member: string
    ): Promise<number | null>;
    /**
     * summary: 'Remove one or more members from a sorted set'
     *
     * complexity: 'O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string, multiple: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zrem(
        key: string,
        ...members: string[]
    ): Promise<number>;
    /**
     * summary: 'Remove all members in a sorted set between the given lexicographical range'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: string}
     *
     *     - {name: max, type: string}
     *
     * since: 2.8.9
     *
     * group: sorted_set
     */
    zremrangebylex(
        key: string,
        min: string,
        max: string
    ): Promise<number>;
    /**
     * summary: 'Remove all members in a sorted set within the given indexes'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zremrangebyrank(
        key: string,
        start: number,
        stop: number
    ): Promise<number>;
    /**
     * summary: 'Remove all members in a sorted set within the given scores'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: min, type: double}
     *
     *     - {name: max, type: double}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zremrangebyscore(
        key: string,
        min: number,
        max: number
    ): Promise<number>;
    /**
     * summary: 'Return a range of members in a sorted set, by index, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zrevrange(
        key: string,
        start: number,
        stop: number,
        withscores: "WITHSCORES"
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by index, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: integer}
     *
     *     - {name: stop, type: integer}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zrevrange(
        key: string,
        start: number,
        stop: number
    ): Promise<string[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: double}
     *
     *     - {name: min, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.2.0
     *
     * group: sorted_set
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number,
        withscores: "WITHSCORES",
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: double}
     *
     *     - {name: min, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.2.0
     *
     * group: sorted_set
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number,
        withscores: "WITHSCORES"
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: double}
     *
     *     - {name: min, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.2.0
     *
     * group: sorted_set
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number,
        limit_offset_count: ["LIMIT", number, number]
    ): Promise<any[]>;
    /**
     * summary: 'Return a range of members in a sorted set, by score, with scores ordered from high to low'
     *
     * complexity: 'O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: max, type: double}
     *
     *     - {name: min, type: double}
     *
     *     - {name: withscores, type: enum, enum: [WITHSCORES], optional: true}
     *
     *     - {command: LIMIT, name: [offset, count], type: [integer, integer], optional: true}
     *
     * since: 2.2.0
     *
     * group: sorted_set
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number
    ): Promise<any[]>;
    /**
     * summary: 'Determine the index of a member in a sorted set, with scores ordered from high to low'
     *
     * complexity: O(log(N))
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zrevrank(
        key: string,
        member: string
    ): Promise<number | null>;
    /**
     * summary: 'Get the score associated with the given member in a sorted set'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: member, type: string}
     *
     * since: 1.2.0
     *
     * group: sorted_set
     */
    zscore(
        key: string,
        member: string
    ): Promise<string>;
    /**
     * summary: 'Add multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zunionstore(
        destination: string,
        numkeys: number,
        keys: string[],
        weights_weight: ["WEIGHTS", number],
        aggregate: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    /**
     * summary: 'Add multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zunionstore(
        destination: string,
        numkeys: number,
        keys: string[],
        weights_weight: ["WEIGHTS", number]
    ): Promise<number>;
    /**
     * summary: 'Add multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zunionstore(
        destination: string,
        numkeys: number,
        keys: string[],
        aggregate: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    /**
     * summary: 'Add multiple sorted sets and store the resulting sorted set in a new key'
     *
     * complexity: 'O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.'
     *
     * arguments:
     *
     *     - {name: destination, type: key}
     *
     *     - {name: numkeys, type: integer}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {command: WEIGHTS, name: weight, type: integer, variadic: true, optional: true}
     *
     *     - {command: AGGREGATE, name: aggregate, type: enum, enum: [SUM, MIN, MAX], optional: true}
     *
     * since: 2.0.0
     *
     * group: sorted_set
     */
    zunionstore(
        destination: string,
        numkeys: number,
        ...keys: string[]
    ): Promise<number>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        match_pattern: ["MATCH", string],
        count: ["COUNT", number],
        type: ["TYPE", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        match_pattern: ["MATCH", string],
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        match_pattern: ["MATCH", string],
        type: ["TYPE", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        match_pattern: ["MATCH", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        count: ["COUNT", number],
        type: ["TYPE", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number,
        type: ["TYPE", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate the keys space'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.'
     *
     * arguments:
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: TYPE, name: type, type: string, optional: true}
     *
     * since: 2.8.0
     *
     * group: generic
     */
    scan(
        cursor: number
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate Set elements'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: set
     */
    sscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string],
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate Set elements'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: set
     */
    sscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate Set elements'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: set
     */
    sscan(
        key: string,
        cursor: number,
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate Set elements'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: set
     */
    sscan(
        key: string,
        cursor: number
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate hash fields and associated values'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: hash
     */
    hscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string],
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate hash fields and associated values'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: hash
     */
    hscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate hash fields and associated values'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: hash
     */
    hscan(
        key: string,
        cursor: number,
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate hash fields and associated values'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: hash
     */
    hscan(
        key: string,
        cursor: number
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate sorted sets elements and associated scores'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: sorted_set
     */
    zscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string],
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate sorted sets elements and associated scores'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: sorted_set
     */
    zscan(
        key: string,
        cursor: number,
        match_pattern: ["MATCH", string]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate sorted sets elements and associated scores'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: sorted_set
     */
    zscan(
        key: string,
        cursor: number,
        count: ["COUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Incrementally iterate sorted sets elements and associated scores'
     *
     * complexity: 'O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: cursor, type: integer}
     *
     *     - {command: MATCH, name: pattern, type: pattern, optional: true}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 2.8.0
     *
     * group: sorted_set
     */
    zscan(
        key: string,
        cursor: number
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        groups_key: ["GROUPS", string],
        stream_key: ["STREAM", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        groups_key: ["GROUPS", string],
        stream_key: ["STREAM", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        groups_key: ["GROUPS", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        groups_key: ["GROUPS", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        stream_key: ["STREAM", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        stream_key: ["STREAM", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        consumers_key_groupname: ["CONSUMERS", string, string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        groups_key: ["GROUPS", string],
        stream_key: ["STREAM", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        groups_key: ["GROUPS", string],
        stream_key: ["STREAM", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        groups_key: ["GROUPS", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        groups_key: ["GROUPS", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        stream_key: ["STREAM", string],
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        stream_key: ["STREAM", string]
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(
        help: "HELP"
    ): Promise<any>;
    /**
     * summary: 'Get information on streams and consumer groups'
     *
     * complexity: 'O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.'
     *
     * arguments:
     *
     *     - {command: CONSUMERS, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: GROUPS, name: key, type: key, optional: true}
     *
     *     - {command: STREAM, name: key, type: key, optional: true}
     *
     *     - {name: help, type: enum, enum: [HELP], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xinfo(): Promise<any>;
    /**
     * summary: 'Appends a new entry to a stream'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ID, type: string}
     *
     *     - {name: [field, value], type: [string, string], multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xadd(
        key: string,
        id: string,
        ...field_values: Array<[string, string]>
    ): Promise<string>;
    /**
     * summary: 'Trims the stream to (approximately if ''~'' is passed) a certain size'
     *
     * complexity: 'O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: strategy, type: enum, enum: [MAXLEN]}
     *
     *     - {name: approx, type: enum, enum: ['~'], optional: true}
     *
     *     - {name: count, type: integer}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xtrim(
        key: string,
        strategy: "MAXLEN",
        approx: "~",
        count: number
    ): Promise<number>;
    /**
     * summary: 'Trims the stream to (approximately if ''~'' is passed) a certain size'
     *
     * complexity: 'O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: strategy, type: enum, enum: [MAXLEN]}
     *
     *     - {name: approx, type: enum, enum: ['~'], optional: true}
     *
     *     - {name: count, type: integer}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xtrim(
        key: string,
        strategy: "MAXLEN",
        count: number
    ): Promise<number>;
    /**
     * summary: 'Removes the specified entries from the stream. Returns the number of items actually deleted, that may be different from the number of IDs passed in case certain IDs do not exist.'
     *
     * complexity: 'O(1) for each single item to delete in the stream, regardless of the stream size.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xdel(
        key: string,
        ...ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return a range of elements in a stream, with IDs matching the specified IDs interval'
     *
     * complexity: 'O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: string}
     *
     *     - {name: end, type: string}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xrange(
        key: string,
        start: string,
        end: string,
        count: ["COUNT", number]
    ): Promise<Array<any[]>>;
    /**
     * summary: 'Return a range of elements in a stream, with IDs matching the specified IDs interval'
     *
     * complexity: 'O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: start, type: string}
     *
     *     - {name: end, type: string}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xrange(
        key: string,
        start: string,
        end: string
    ): Promise<Array<any[]>>;
    /**
     * summary: 'Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE'
     *
     * complexity: 'O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: end, type: string}
     *
     *     - {name: start, type: string}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xrevrange(
        key: string,
        end: string,
        start: string,
        count: ["COUNT", number]
    ): Promise<Array<any[]>>;
    /**
     * summary: 'Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE'
     *
     * complexity: 'O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: end, type: string}
     *
     *     - {name: start, type: string}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xrevrange(
        key: string,
        end: string,
        start: string
    ): Promise<Array<any[]>>;
    /**
     * summary: 'Return the number of entires in a stream'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xlen(
        key: string
    ): Promise<number>;
    /**
     * summary: 'Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.'
     *
     * complexity: 'For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: id, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xread(
        count: ["COUNT", number],
        block_milliseconds: ["BLOCK", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.'
     *
     * complexity: 'For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: id, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xread(
        count: ["COUNT", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.'
     *
     * complexity: 'For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: id, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xread(
        block_milliseconds: ["BLOCK", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.'
     *
     * complexity: 'For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: id, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xread(
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        setid_key_groupname_idOr$: ["SETID", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        create_key_groupname_idOr$: ["CREATE", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        destroy_key_groupname: ["DESTROY", string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        setid_key_groupname_idOr$: ["SETID", string, string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        setid_key_groupname_idOr$: ["SETID", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        destroy_key_groupname: ["DESTROY", string, string],
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        destroy_key_groupname: ["DESTROY", string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(
        delconsumer_key_groupname_consumername: ["DELCONSUMER", string, string, string]
    ): Promise<any>;
    /**
     * summary: 'Create, destroy, and manage consumer groups.'
     *
     * complexity: 'O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).'
     *
     * arguments:
     *
     *     - {command: CREATE, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: SETID, name: [key, groupname, id-or-$], type: [key, string, string], optional: true}
     *
     *     - {command: DESTROY, name: [key, groupname], type: [key, string], optional: true}
     *
     *     - {command: DELCONSUMER, name: [key, groupname, consumername], type: [key, string, string], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xgroup(): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        count: ["COUNT", number],
        block_milliseconds: ["BLOCK", number],
        noack: "NOACK",
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        count: ["COUNT", number],
        block_milliseconds: ["BLOCK", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        count: ["COUNT", number],
        noack: "NOACK",
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        count: ["COUNT", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        block_milliseconds: ["BLOCK", number],
        noack: "NOACK",
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        block_milliseconds: ["BLOCK", number],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        noack: "NOACK",
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.'
     *
     * complexity: 'For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.'
     *
     * arguments:
     *
     *     - {command: GROUP, name: [group, consumer], type: [string, string]}
     *
     *     - {command: COUNT, name: count, type: integer, optional: true}
     *
     *     - {command: BLOCK, name: milliseconds, type: integer, optional: true}
     *
     *     - {name: noack, type: enum, enum: [NOACK], optional: true}
     *
     *     - {name: streams, type: enum, enum: [STREAMS]}
     *
     *     - {name: key, type: key, multiple: true}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xreadgroup(
        group_group_consumer: ["GROUP", string, string],
        streams: "STREAMS",
        keys: string[],
        ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Marks a pending message as correctly processed, effectively removing it from the pending entries list of the consumer group. Return value of the command is the number of messages successfully acknowledged, that is, the IDs we were actually able to resolve in the PEL.'
     *
     * complexity: 'O(1) for each message ID processed.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xack(
        key: string,
        group: string,
        ...ids: string[]
    ): Promise<number>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        time_msUnixTime: ["TIME", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        retrycount_count: ["RETRYCOUNT", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        retrycount_count: ["RETRYCOUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        idle_ms: ["IDLE", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        retrycount_count: ["RETRYCOUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        time_msUnixTime: ["TIME", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        retrycount_count: ["RETRYCOUNT", number],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        retrycount_count: ["RETRYCOUNT", number],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        retrycount_count: ["RETRYCOUNT", number],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        retrycount_count: ["RETRYCOUNT", number]
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        force: any,
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        force: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ids: string[],
        justid: any
    ): Promise<any>;
    /**
     * summary: 'Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.'
     *
     * complexity: 'O(log N) with N being the number of messages in the PEL of the consumer group.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: consumer, type: string}
     *
     *     - {name: min-idle-time, type: string}
     *
     *     - {name: ID, type: string, multiple: true}
     *
     *     - {command: IDLE, name: ms, type: integer, optional: true}
     *
     *     - {command: TIME, name: ms-unix-time, type: integer, optional: true}
     *
     *     - {command: RETRYCOUNT, name: count, type: integer, optional: true}
     *
     *     - {name: force, enum: [FORCE], optional: true}
     *
     *     - {name: justid, enum: [JUSTID], optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        minIdleTime: string,
        ...ids: string[]
    ): Promise<any>;
    /**
     * summary: 'Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.'
     *
     * complexity: 'O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: [start, end, count], type: [string, string, integer], optional: true}
     *
     *     - {name: consumer, type: string, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xpending(
        key: string,
        group: string,
        start_end_count: [string, string, number],
        consumer: string
    ): Promise<any>;
    /**
     * summary: 'Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.'
     *
     * complexity: 'O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: [start, end, count], type: [string, string, integer], optional: true}
     *
     *     - {name: consumer, type: string, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xpending(
        key: string,
        group: string,
        start_end_count: [string, string, number]
    ): Promise<any>;
    /**
     * summary: 'Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.'
     *
     * complexity: 'O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: [start, end, count], type: [string, string, integer], optional: true}
     *
     *     - {name: consumer, type: string, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xpending(
        key: string,
        group: string,
        consumer: string
    ): Promise<any>;
    /**
     * summary: 'Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.'
     *
     * complexity: 'O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: group, type: string}
     *
     *     - {name: [start, end, count], type: [string, string, integer], optional: true}
     *
     *     - {name: consumer, type: string, optional: true}
     *
     * since: 5.0.0
     *
     * group: stream
     */
    xpending(
        key: string,
        group: string
    ): Promise<any>;
}
