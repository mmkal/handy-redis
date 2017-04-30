import { RedisClient } from "redis";
export class HandyRedis {
    constructor(public redis: RedisClient) {}
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
    append (key: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).append.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    auth (password: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).auth.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Asynchronously rewrite the append-only file'
     *
     * since: 1.0.0
     *
     * group: server
     */
    bgrewriteaof () {
        return new Promise((resolve, reject) => {
           (this.redis as any).bgrewriteaof.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Asynchronously save the dataset to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    bgsave () {
        return new Promise((resolve, reject) => {
           (this.redis as any).bgsave.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    bitcount (key: string, start_end?: [number, number]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).bitcount.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    bitfield (key: string, GET_type_offset?: [string, number], SET_type_offset_value?: [string, number, number], INCRBY_type_offset_increment?: [string, number, number], OVERFLOW?: "WRAP" | "SAT" | "FAIL") {
        return new Promise((resolve, reject) => {
           (this.redis as any).bitfield.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    bitop (operation: string, destkey: string, ...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).bitop.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    bitpos (key: string, bit: number, start?: number, end?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).bitpos.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Pop a value from a list, push it to another list and return it; or block until one is available'
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
    brpoplpush (source: string, destination: string, timeout: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).brpoplpush.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Get array of Redis command details'
     *
     * complexity: 'O(N) where N is the total number of Redis commands'
     *
     * since: 2.8.13
     *
     * group: server
     */
    command () {
        return new Promise((resolve, reject) => {
           (this.redis as any).command.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Return the number of keys in the selected database'
     *
     * since: 1.0.0
     *
     * group: server
     */
    dbsize () {
        return new Promise((resolve, reject) => {
           (this.redis as any).dbsize.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    decr (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).decr.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    decrby (key: string, decrement: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).decrby.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    del (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).del.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Discard all commands issued after MULTI'
     *
     * since: 2.0.0
     *
     * group: transactions
     */
    discard () {
        return new Promise((resolve, reject) => {
           (this.redis as any).discard.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    dump (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).dump.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    echo (message: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).echo.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    eval (script: string, numkeys: number, ...key_arg_pairs: Array<[string, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).eval.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    evalsha (sha1: string, numkeys: number, ...key_arg_pairs: Array<[string, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).evalsha.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Execute all commands issued after MULTI'
     *
     * since: 1.2.0
     *
     * group: transactions
     */
    exec () {
        return new Promise((resolve, reject) => {
           (this.redis as any).exec.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    exists (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).exists.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    expire (key: string, seconds: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).expire.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    expireat (key: string, timestamp: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).expireat.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    flushall (async?: "ASYNC") {
        return new Promise((resolve, reject) => {
           (this.redis as any).flushall.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    flushdb (async?: "ASYNC") {
        return new Promise((resolve, reject) => {
           (this.redis as any).flushdb.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    geoadd (key: string, ...longitude_latitude_members: Array<[number, number, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).geoadd.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    geohash (key: string, ...members: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).geohash.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    geopos (key: string, ...members: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).geopos.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     *     - {name: unit, type: string, optional: true}
     *
     * since: 3.2.0
     *
     * group: geo
     */
    geodist (key: string, member1: string, member2: string, unit?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).geodist.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    georadius (key: string, longitude: number, latitude: number, radius: number, unit: "m" | "km" | "ft" | "mi", withcoord?: "WITHCOORD", withdist?: "WITHDIST", withhash?: "WITHHASH", COUNT_count?: number, order?: "ASC" | "DESC", STORE_key?: string, STOREDIST_key?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).georadius.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    georadiusbymember (key: string, member: string, radius: number, unit: "m" | "km" | "ft" | "mi", withcoord?: "WITHCOORD", withdist?: "WITHDIST", withhash?: "WITHHASH", COUNT_count?: number, order?: "ASC" | "DESC", STORE_key?: string, STOREDIST_key?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).georadiusbymember.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    get (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).get.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    getbit (key: string, offset: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).getbit.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    getrange (key: string, start: number, end: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).getrange.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    getset (key: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).getset.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hdel (key: string, ...fields: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hdel.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hexists (key: string, field: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hexists.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hget (key: string, field: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hget.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hgetall (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hgetall.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hincrby (key: string, field: string, increment: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hincrby.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hincrbyfloat (key: string, field: string, increment: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hincrbyfloat.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hkeys (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hkeys.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hlen (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hlen.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hmget (key: string, ...fields: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hmget.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hmset (key: string, ...field_values: Array<[string, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hmset.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Set the string value of a hash field'
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
    hset (key: string, field: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hset.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hsetnx (key: string, field: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hsetnx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hstrlen (key: string, field: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hstrlen.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hvals (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hvals.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    incr (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).incr.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    incrby (key: string, increment: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).incrby.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    incrbyfloat (key: string, increment: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).incrbyfloat.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    info (section?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).info.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    keys (pattern: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).keys.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Get the UNIX time stamp of the last successful save to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    lastsave () {
        return new Promise((resolve, reject) => {
           (this.redis as any).lastsave.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    lindex (key: string, index: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lindex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     *     - {name: value, type: string}
     *
     * since: 2.2.0
     *
     * group: list
     */
    linsert (key: string, where: "BEFORE" | "AFTER", pivot: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).linsert.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    llen (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).llen.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    lpop (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lpop.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Prepend one or multiple values to a list'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lpush (key: string, ...values: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lpush.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Prepend a value to a list, only if the list exists'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     * since: 2.2.0
     *
     * group: list
     */
    lpushx (key: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lpushx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    lrange (key: string, start: number, stop: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lrange.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Remove elements from a list'
     *
     * complexity: 'O(N) where N is the length of the list.'
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: count, type: integer}
     *
     *     - {name: value, type: string}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lrem (key: string, count: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lrem.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     *     - {name: value, type: string}
     *
     * since: 1.0.0
     *
     * group: list
     */
    lset (key: string, index: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).lset.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    ltrim (key: string, start: number, stop: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).ltrim.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    mget (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).mget.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     *     - {name: key, command: KEYS, type: key, variadic: true, optional: true}
     *
     * since: 2.6.0
     *
     * group: generic
     */
    migrate (host: string, port: string, key: "key" | "\"\"", destination_db: number, timeout: number, copy?: "COPY", replace?: "REPLACE", KEYS_key?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).migrate.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Listen for all requests received by the server in real time'
     *
     * since: 1.0.0
     *
     * group: server
     */
    monitor () {
        return new Promise((resolve, reject) => {
           (this.redis as any).monitor.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    move (key: string, db: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).move.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    mset (...key_values: Array<[string, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).mset.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    msetnx (...key_values: Array<[string, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).msetnx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Mark the start of a transaction block'
     *
     * since: 1.2.0
     *
     * group: transactions
     */
    multi () {
        return new Promise((resolve, reject) => {
           (this.redis as any).multi.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    object (subcommand: string, ...argss: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).object.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    persist (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).persist.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pexpire (key: string, milliseconds: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pexpire.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pexpireat (key: string, milliseconds_timestamp: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pexpireat.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pfadd (key: string, ...elements: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pfadd.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pfcount (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pfcount.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pfmerge (destkey: string, ...sourcekeys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pfmerge.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    ping (message?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).ping.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    psetex (key: string, milliseconds: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).psetex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    psubscribe (...patterns: Array<[string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).psubscribe.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pubsub (subcommand: string, ...args: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pubsub.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    pttl (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).pttl.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    publish (channel: string, message: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).publish.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    punsubscribe (...patterns: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).punsubscribe.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Close the connection'
     *
     * since: 1.0.0
     *
     * group: connection
     */
    quit () {
        return new Promise((resolve, reject) => {
           (this.redis as any).quit.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Return a random key from the keyspace'
     *
     * complexity: O(1)
     *
     * since: 1.0.0
     *
     * group: generic
     */
    randomkey () {
        return new Promise((resolve, reject) => {
           (this.redis as any).randomkey.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Enables read queries for a connection to a cluster slave node'
     *
     * complexity: O(1)
     *
     * since: 3.0.0
     *
     * group: cluster
     */
    readonly () {
        return new Promise((resolve, reject) => {
           (this.redis as any).readonly.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Disables read queries for a connection to a cluster slave node'
     *
     * complexity: O(1)
     *
     * since: 3.0.0
     *
     * group: cluster
     */
    readwrite () {
        return new Promise((resolve, reject) => {
           (this.redis as any).readwrite.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    rename (key: string, newkey: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).rename.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    renamenx (key: string, newkey: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).renamenx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     * since: 2.6.0
     *
     * group: generic
     */
    restore (key: string, ttl: number, serialized_value: string, replace?: "REPLACE") {
        return new Promise((resolve, reject) => {
           (this.redis as any).restore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Return the role of the instance in the context of replication'
     *
     * since: 2.8.12
     *
     * group: server
     */
    role () {
        return new Promise((resolve, reject) => {
           (this.redis as any).role.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    rpop (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).rpop.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    rpoplpush (source: string, destination: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).rpoplpush.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Append one or multiple values to a list'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string, multiple: true}
     *
     * since: 1.0.0
     *
     * group: list
     */
    rpush (key: string, ...values: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).rpush.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Append a value to a list, only if the list exists'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: key, type: key}
     *
     *     - {name: value, type: string}
     *
     * since: 2.2.0
     *
     * group: list
     */
    rpushx (key: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).rpushx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sadd (key: string, ...members: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sadd.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Synchronously save the dataset to disk'
     *
     * since: 1.0.0
     *
     * group: server
     */
    save () {
        return new Promise((resolve, reject) => {
           (this.redis as any).save.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    scard (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).scard.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sdiff (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sdiff.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sdiffstore (destination: string, ...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sdiffstore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    select (index: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).select.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    set (key: string, value: string, EX_seconds?: number, PX_milliseconds?: number, condition?: "NX" | "XX") {
        return new Promise((resolve, reject) => {
           (this.redis as any).set.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     *     - {name: value, type: string}
     *
     * since: 2.2.0
     *
     * group: string
     */
    setbit (key: string, offset: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).setbit.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    setex (key: string, seconds: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).setex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    setnx (key: string, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).setnx.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    setrange (key: string, offset: number, value: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).setrange.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    shutdown (save_mode?: "NOSAVE" | "SAVE") {
        return new Promise((resolve, reject) => {
           (this.redis as any).shutdown.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sinter (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sinter.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sinterstore (destination: string, ...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sinterstore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sismember (key: string, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sismember.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Make the server a slave of another instance, or promote it as master'
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
    slaveof (host: string, port: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).slaveof.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    slowlog (subcommand: string, argument?: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).slowlog.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    smembers (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).smembers.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    smove (source: string, destination: string, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).smove.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    spop (key: string, count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).spop.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    srandmember (key: string, count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).srandmember.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    srem (key: string, ...members: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).srem.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    strlen (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).strlen.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Listen for messages published to the given channels'
     *
     * complexity: 'O(N) where N is the number of channels to subscribe to.'
     *
     * arguments:
     *
     *     - {name: [channel], type: [string], multiple: true}
     *
     * since: 2.0.0
     *
     * group: pubsub
     */
    subscribe (...channels: Array<[string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).subscribe.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sunion (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sunion.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sunionstore (destination: string, ...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sunionstore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Swaps two Redis databases'
     *
     * arguments:
     *
     *     - {name: index, type: integer}
     *
     *     - {name: index, type: integer}
     *
     * since: 4.0.0
     *
     * group: connection
     */
    swapdb (index: number, index_2: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).swapdb.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Internal command used for replication'
     *
     * since: 1.0.0
     *
     * group: server
     */
    sync () {
        return new Promise((resolve, reject) => {
           (this.redis as any).sync.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Return the current server time'
     *
     * complexity: O(1)
     *
     * since: 2.6.0
     *
     * group: server
     */
    time () {
        return new Promise((resolve, reject) => {
           (this.redis as any).time.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    touch (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).touch.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    ttl (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).ttl.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    type (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).type.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    unsubscribe (...channels: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).unsubscribe.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    unlink (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).unlink.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Forget about all watched keys'
     *
     * complexity: O(1)
     *
     * since: 2.2.0
     *
     * group: transactions
     */
    unwatch () {
        return new Promise((resolve, reject) => {
           (this.redis as any).unwatch.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
    /**
     * summary: 'Wait for the synchronous replication of all the write commands sent in the context of the current connection'
     *
     * complexity: O(1)
     *
     * arguments:
     *
     *     - {name: numslaves, type: integer}
     *
     *     - {name: timeout, type: integer}
     *
     * since: 3.0.0
     *
     * group: generic
     */
    wait (numslaves: number, timeout: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).wait.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    watch (...keys: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).watch.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zadd (key: string, condition?: "NX" | "XX", change?: "CH", increment?: "INCR", ...score_members: Array<[number, string]>) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zadd.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zcard (key: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zcard.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zcount (key: string, min: number, max: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zcount.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zincrby (key: string, increment: number, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zincrby.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zlexcount (key: string, min: string, max: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zlexcount.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrange (key: string, start: number, stop: number, withscores?: "WITHSCORES") {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrange.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrangebylex (key: string, min: string, max: string, LIMIT_offset_count?: [number, number]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrangebylex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrevrangebylex (key: string, max: string, min: string, LIMIT_offset_count?: [number, number]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrevrangebylex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrangebyscore (key: string, min: number, max: number, withscores?: "WITHSCORES", LIMIT_offset_count?: [number, number]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrangebyscore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrank (key: string, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrank.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrem (key: string, ...members: string[]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrem.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zremrangebylex (key: string, min: string, max: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zremrangebylex.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zremrangebyrank (key: string, start: number, stop: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zremrangebyrank.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zremrangebyscore (key: string, min: number, max: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zremrangebyscore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrevrange (key: string, start: number, stop: number, withscores?: "WITHSCORES") {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrevrange.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrevrangebyscore (key: string, max: number, min: number, withscores?: "WITHSCORES", LIMIT_offset_count?: [number, number]) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrevrangebyscore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zrevrank (key: string, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zrevrank.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zscore (key: string, member: string) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zscore.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
     * since: 2.8.0
     *
     * group: generic
     */
    scan (cursor: number, MATCH_pattern?: string, COUNT_count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).scan.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    sscan (key: string, cursor: number, MATCH_pattern?: string, COUNT_count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).sscan.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    hscan (key: string, cursor: number, MATCH_pattern?: string, COUNT_count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).hscan.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
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
    zscan (key: string, cursor: number, MATCH_pattern?: string, COUNT_count?: number) {
        return new Promise((resolve, reject) => {
           (this.redis as any).zscan.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);
       });
    }
}
