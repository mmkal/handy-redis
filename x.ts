export interface Client {
    append(key: unknown, value: unknown): Promise<number>;
    auth(password: unknown): Promise<unknown>;
    bgrewriteaof(): Promise<unknown>;
    bgsave(): Promise<unknown>;
    bitcount(key: unknown, startEnd?: [number, number]): Promise<number>;
    bitfield(
        key: unknown,
        getTypeOffset?: ["GET", [unknown, number]],
        setTypeOffsetValue?: ["SET", [unknown, number, number]],
        incrbyTypeOffsetIncrement?: ["INCRBY", [unknown, number, number]],
        overflow?: ["OVERFLOW", "WRAP" | "SAT" | "FAIL"]
    ): Promise<unknown>;
    bitop(operation: unknown, destkey: unknown, key: Array<unknown>): Promise<number>;
    bitpos(key: unknown, bit: number, start?: number, end?: number): Promise<number>;
    blpop(key: Array<unknown>, timeout: number): Promise<unknown>;
    brpop(key: Array<unknown>, timeout: number): Promise<unknown>;
    brpoplpush(source: unknown, destination: unknown, timeout: number): Promise<unknown>;
    bzpopmin(key: Array<unknown>, timeout: number): Promise<unknown>;
    bzpopmax(key: Array<unknown>, timeout: number): Promise<unknown>;
    clientId(): Promise<unknown>;
    clientKill(
        ipPort?: unknown,
        idClientId?: ["ID", number],
        type?: ["TYPE", "normal" | "master" | "slave" | "pubsub"],
        addrIpPort?: ["ADDR", unknown],
        skipmeYesNo?: ["SKIPME", unknown]
    ): Promise<unknown>;
    clientList(type?: ["TYPE", "normal" | "master" | "replica" | "pubsub"]): Promise<unknown>;
    clientGetname(): Promise<unknown>;
    clientPause(timeout: number): Promise<unknown>;
    clientReply(replyMode: "ON" | "OFF" | "SKIP"): Promise<unknown>;
    clientSetname(connectionName: unknown): Promise<unknown>;
    clientUnblock(clientId: number, unblockType?: "TIMEOUT" | "ERROR"): Promise<unknown>;
    clusterAddslots(slot: Array<number>): Promise<unknown>;
    clusterBumpepoch(): Promise<unknown>;
    clusterCountFailureReports(nodeId: unknown): Promise<unknown>;
    clusterCountkeysinslot(slot: number): Promise<unknown>;
    clusterDelslots(slot: Array<number>): Promise<unknown>;
    clusterFailover(options?: "FORCE" | "TAKEOVER"): Promise<unknown>;
    clusterFlushslots(): Promise<unknown>;
    clusterForget(nodeId: unknown): Promise<unknown>;
    clusterGetkeysinslot(slot: number, count: number): Promise<unknown>;
    clusterInfo(): Promise<unknown>;
    clusterKeyslot(key: unknown): Promise<unknown>;
    clusterMeet(ip: unknown, port: number): Promise<unknown>;
    clusterMyid(): Promise<unknown>;
    clusterNodes(): Promise<unknown>;
    clusterReplicate(nodeId: unknown): Promise<unknown>;
    clusterReset(resetType?: "HARD" | "SOFT"): Promise<unknown>;
    clusterSaveconfig(): Promise<unknown>;
    clusterSetConfigEpoch(configEpoch: number): Promise<unknown>;
    clusterSetslot(
        slot: number,
        subcommand: "IMPORTING" | "MIGRATING" | "STABLE" | "NODE",
        nodeId?: unknown
    ): Promise<unknown>;
    clusterSlaves(nodeId: unknown): Promise<unknown>;
    clusterReplicas(nodeId: unknown): Promise<unknown>;
    clusterSlots(): Promise<unknown>;
    command(): Promise<Array<unknown>>;
    commandCount(): Promise<unknown>;
    commandGetkeys(): Promise<unknown>;
    commandInfo(commandName: Array<unknown>): Promise<unknown>;
    configGet(parameter: unknown): Promise<unknown>;
    configRewrite(): Promise<unknown>;
    configSet(parameter: unknown, value: unknown): Promise<unknown>;
    configResetstat(): Promise<unknown>;
    dbsize(): Promise<number>;
    debugObject(key: unknown): Promise<unknown>;
    debugSegfault(): Promise<unknown>;
    decr(key: unknown): Promise<number>;
    decrby(key: unknown, decrement: number): Promise<number>;
    del(key: Array<unknown>): Promise<number>;
    discard(): Promise<unknown>;
    dump(key: unknown): Promise<unknown>;
    echo(message: unknown): Promise<unknown>;
    eval(script: unknown, numkeys: number, key: Array<unknown>, arg: Array<unknown>): Promise<unknown>;
    evalsha(sha1: unknown, numkeys: number, key: Array<unknown>, arg: Array<unknown>): Promise<unknown>;
    exec(): Promise<unknown>;
    exists(key: Array<unknown>): Promise<number>;
    expire(key: unknown, seconds: number): Promise<number>;
    expireat(key: unknown, timestamp: unknown): Promise<number>;
    flushall(async?: "ASYNC"): Promise<unknown>;
    flushdb(async?: "ASYNC"): Promise<unknown>;
    geoadd(key: unknown, longitudeLatitudeMember: Array<[number, number, unknown]>): Promise<number>;
    geohash(key: unknown, member: Array<unknown>): Promise<Array<unknown>>;
    geopos(key: unknown, member: Array<unknown>): Promise<unknown>;
    geodist(key: unknown, member1: unknown, member2: unknown, unit?: "m" | "km" | "ft" | "mi"): Promise<unknown>;
    georadius(
        key: unknown,
        longitude: number,
        latitude: number,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        countCount?: ["COUNT", number],
        order?: "ASC" | "DESC",
        storeKey?: ["STORE", unknown],
        storedistKey?: ["STOREDIST", unknown]
    ): Promise<Array<unknown>>;
    georadiusbymember(
        key: unknown,
        member: unknown,
        radius: number,
        unit: "m" | "km" | "ft" | "mi",
        withcoord?: "WITHCOORD",
        withdist?: "WITHDIST",
        withhash?: "WITHHASH",
        countCount?: ["COUNT", number],
        order?: "ASC" | "DESC",
        storeKey?: ["STORE", unknown],
        storedistKey?: ["STOREDIST", unknown]
    ): Promise<unknown>;
    get(key: unknown): Promise<unknown>;
    getbit(key: unknown, offset: number): Promise<number>;
    getrange(key: unknown, start: number, end: number): Promise<unknown>;
    getset(key: unknown, value: unknown): Promise<unknown>;
    hdel(key: unknown, field: Array<unknown>): Promise<number>;
    hexists(key: unknown, field: unknown): Promise<number>;
    hget(key: unknown, field: unknown): Promise<unknown>;
    hgetall(key: unknown): Promise<Array<unknown>>;
    hincrby(key: unknown, field: unknown, increment: number): Promise<number>;
    hincrbyfloat(key: unknown, field: unknown, increment: number): Promise<unknown>;
    hkeys(key: unknown): Promise<Array<unknown>>;
    hlen(key: unknown): Promise<number>;
    hmget(key: unknown, field: Array<unknown>): Promise<Array<unknown>>;
    hmset(key: unknown, fieldValue: Array<[unknown, unknown]>): Promise<unknown>;
    hset(key: unknown, fieldValue: Array<[unknown, unknown]>): Promise<number>;
    hsetnx(key: unknown, field: unknown, value: unknown): Promise<number>;
    hstrlen(key: unknown, field: unknown): Promise<number>;
    hvals(key: unknown): Promise<Array<unknown>>;
    incr(key: unknown): Promise<number>;
    incrby(key: unknown, increment: number): Promise<number>;
    incrbyfloat(key: unknown, increment: number): Promise<unknown>;
    info(section?: unknown): Promise<unknown>;
    lolwut(versionVersion?: ["VERSION", number]): Promise<unknown>;
    keys(pattern: unknown): Promise<Array<unknown>>;
    lastsave(): Promise<number>;
    lindex(key: unknown, index: number): Promise<unknown>;
    linsert(key: unknown, where: "BEFORE" | "AFTER", pivot: unknown, element: unknown): Promise<number>;
    llen(key: unknown): Promise<number>;
    lpop(key: unknown): Promise<unknown>;
    lpush(key: unknown, element: Array<unknown>): Promise<number>;
    lpushx(key: unknown, element: Array<unknown>): Promise<number>;
    lrange(key: unknown, start: number, stop: number): Promise<Array<unknown>>;
    lrem(key: unknown, count: number, element: unknown): Promise<number>;
    lset(key: unknown, index: number, element: unknown): Promise<unknown>;
    ltrim(key: unknown, start: number, stop: number): Promise<unknown>;
    memoryDoctor(): Promise<unknown>;
    memoryHelp(): Promise<unknown>;
    memoryMallocStats(): Promise<unknown>;
    memoryPurge(): Promise<unknown>;
    memoryStats(): Promise<unknown>;
    memoryUsage(key: unknown, samplesCount?: ["SAMPLES", number]): Promise<unknown>;
    mget(key: Array<unknown>): Promise<Array<unknown>>;
    migrate(
        host: unknown,
        port: unknown,
        key: "key" | '""',
        destinationDb: number,
        timeout: number,
        copy?: "COPY",
        replace?: "REPLACE",
        authPassword?: ["AUTH", unknown],
        keysKey?: Array<["KEYS", unknown]>
    ): Promise<unknown>;
    moduleList(): Promise<unknown>;
    moduleLoad(path: unknown, arg?: Array<unknown>): Promise<unknown>;
    moduleUnload(name: unknown): Promise<unknown>;
    monitor(): Promise<unknown>;
    move(key: unknown, db: number): Promise<number>;
    mset(keyValue: Array<[unknown, unknown]>): Promise<unknown>;
    msetnx(keyValue: Array<[unknown, unknown]>): Promise<number>;
    multi(): Promise<unknown>;
    object(subcommand: unknown, args?: Array<unknown>): Promise<unknown>;
    persist(key: unknown): Promise<number>;
    pexpire(key: unknown, milliseconds: number): Promise<number>;
    pexpireat(key: unknown, millisecondsTimestamp: unknown): Promise<number>;
    pfadd(key: unknown, element: Array<unknown>): Promise<number>;
    pfcount(key: Array<unknown>): Promise<number>;
    pfmerge(destkey: unknown, sourcekey: Array<unknown>): Promise<unknown>;
    ping(message?: unknown): Promise<unknown>;
    psetex(key: unknown, milliseconds: number, value: unknown): Promise<unknown>;
    psubscribe(pattern: Array<[unknown]>): Promise<unknown>;
    pubsub(subcommand: unknown, argument?: Array<unknown>): Promise<Array<unknown>>;
    pttl(key: unknown): Promise<number>;
    publish(channel: unknown, message: unknown): Promise<number>;
    punsubscribe(pattern?: Array<unknown>): Promise<unknown>;
    quit(): Promise<unknown>;
    randomkey(): Promise<unknown>;
    readonly(): Promise<unknown>;
    readwrite(): Promise<unknown>;
    rename(key: unknown, newkey: unknown): Promise<unknown>;
    renamenx(key: unknown, newkey: unknown): Promise<number>;
    restore(
        key: unknown,
        ttl: number,
        serializedValue: unknown,
        replace?: "REPLACE",
        absttl?: "ABSTTL",
        idletimeSeconds?: ["IDLETIME", number],
        freqFrequency?: ["FREQ", number]
    ): Promise<unknown>;
    role(): Promise<Array<unknown>>;
    rpop(key: unknown): Promise<unknown>;
    rpoplpush(source: unknown, destination: unknown): Promise<unknown>;
    rpush(key: unknown, element: Array<unknown>): Promise<number>;
    rpushx(key: unknown, element: Array<unknown>): Promise<number>;
    sadd(key: unknown, member: Array<unknown>): Promise<number>;
    save(): Promise<unknown>;
    scard(key: unknown): Promise<number>;
    scriptDebug(mode: "YES" | "SYNC" | "NO"): Promise<unknown>;
    scriptExists(sha1: Array<unknown>): Promise<unknown>;
    scriptFlush(): Promise<unknown>;
    scriptKill(): Promise<unknown>;
    scriptLoad(script: unknown): Promise<unknown>;
    sdiff(key: Array<unknown>): Promise<Array<unknown>>;
    sdiffstore(destination: unknown, key: Array<unknown>): Promise<number>;
    select(index: number): Promise<unknown>;
    set(
        key: unknown,
        value: unknown,
        expiration?: "EX seconds" | "PX milliseconds",
        condition?: "NX" | "XX"
    ): Promise<unknown>;
    setbit(key: unknown, offset: number, value: number): Promise<number>;
    setex(key: unknown, seconds: number, value: unknown): Promise<unknown>;
    setnx(key: unknown, value: unknown): Promise<number>;
    setrange(key: unknown, offset: number, value: unknown): Promise<number>;
    shutdown(saveMode?: "NOSAVE" | "SAVE"): Promise<unknown>;
    sinter(key: Array<unknown>): Promise<Array<unknown>>;
    sinterstore(destination: unknown, key: Array<unknown>): Promise<number>;
    sismember(key: unknown, member: unknown): Promise<number>;
    slaveof(host: unknown, port: unknown): Promise<unknown>;
    replicaof(host: unknown, port: unknown): Promise<unknown>;
    slowlog(subcommand: unknown, argument?: unknown): Promise<unknown>;
    smembers(key: unknown): Promise<Array<unknown>>;
    smove(source: unknown, destination: unknown, member: unknown): Promise<number>;
    sort(
        key: unknown,
        byPattern?: ["BY", unknown],
        limitOffsetCount?: ["LIMIT", [number, number]],
        getPattern?: Array<["GET", unknown]>,
        order?: "ASC" | "DESC",
        sorting?: "ALPHA",
        storeDestination?: ["STORE", unknown]
    ): Promise<unknown>;
    spop(key: unknown, count?: number): Promise<unknown>;
    srandmember(key: unknown, count?: number): Promise<unknown>;
    srem(key: unknown, member: Array<unknown>): Promise<number>;
    strlen(key: unknown): Promise<number>;
    subscribe(channel: Array<unknown>): Promise<unknown>;
    sunion(key: Array<unknown>): Promise<Array<unknown>>;
    sunionstore(destination: unknown, key: Array<unknown>): Promise<number>;
    swapdb(index1: number, index2: number): Promise<unknown>;
    sync(): Promise<unknown>;
    psync(replicationid: number, offset: number): Promise<unknown>;
    time(): Promise<Array<unknown>>;
    touch(key: Array<unknown>): Promise<number>;
    ttl(key: unknown): Promise<number>;
    type(key: unknown): Promise<unknown>;
    unsubscribe(channel?: Array<unknown>): Promise<unknown>;
    unlink(key: Array<unknown>): Promise<number>;
    unwatch(): Promise<unknown>;
    wait(numreplicas: number, timeout: number): Promise<number>;
    watch(key: Array<unknown>): Promise<unknown>;
    zadd(
        key: unknown,
        condition?: "NX" | "XX",
        change?: "CH",
        increment?: "INCR",
        scoreMember: Array<[number, unknown]>
    ): Promise<unknown>;
    zcard(key: unknown): Promise<number>;
    zcount(key: unknown, min: number, max: number): Promise<number>;
    zincrby(key: unknown, increment: number, member: unknown): Promise<unknown>;
    zinterstore(
        destination: unknown,
        numkeys: number,
        key: Array<unknown>,
        weightsWeight?: Array<["WEIGHTS", number]>,
        aggregateAggregate?: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    zlexcount(key: unknown, min: unknown, max: unknown): Promise<number>;
    zpopmax(key: unknown, count?: number): Promise<Array<unknown>>;
    zpopmin(key: unknown, count?: number): Promise<Array<unknown>>;
    zrange(key: unknown, start: number, stop: number, withscores?: "WITHSCORES"): Promise<Array<unknown>>;
    zrangebylex(
        key: unknown,
        min: unknown,
        max: unknown,
        limitOffsetCount?: ["LIMIT", [number, number]]
    ): Promise<Array<unknown>>;
    zrevrangebylex(
        key: unknown,
        max: unknown,
        min: unknown,
        limitOffsetCount?: ["LIMIT", [number, number]]
    ): Promise<Array<unknown>>;
    zrangebyscore(
        key: unknown,
        min: number,
        max: number,
        withscores?: "WITHSCORES",
        limitOffsetCount?: ["LIMIT", [number, number]]
    ): Promise<Array<unknown>>;
    zrank(key: unknown, member: unknown): Promise<unknown>;
    zrem(key: unknown, member: Array<unknown>): Promise<number>;
    zremrangebylex(key: unknown, min: unknown, max: unknown): Promise<number>;
    zremrangebyrank(key: unknown, start: number, stop: number): Promise<number>;
    zremrangebyscore(key: unknown, min: number, max: number): Promise<number>;
    zrevrange(key: unknown, start: number, stop: number, withscores?: "WITHSCORES"): Promise<Array<unknown>>;
    zrevrangebyscore(
        key: unknown,
        max: number,
        min: number,
        withscores?: "WITHSCORES",
        limitOffsetCount?: ["LIMIT", [number, number]]
    ): Promise<Array<unknown>>;
    zrevrank(key: unknown, member: unknown): Promise<unknown>;
    zscore(key: unknown, member: unknown): Promise<unknown>;
    zunionstore(
        destination: unknown,
        numkeys: number,
        key: Array<unknown>,
        weightsWeight?: Array<["WEIGHTS", number]>,
        aggregateAggregate?: ["AGGREGATE", "SUM" | "MIN" | "MAX"]
    ): Promise<number>;
    scan(
        cursor: number,
        matchPattern?: ["MATCH", unknown],
        countCount?: ["COUNT", number],
        typeType?: ["TYPE", unknown]
    ): Promise<unknown>;
    sscan(
        key: unknown,
        cursor: number,
        matchPattern?: ["MATCH", unknown],
        countCount?: ["COUNT", number]
    ): Promise<unknown>;
    hscan(
        key: unknown,
        cursor: number,
        matchPattern?: ["MATCH", unknown],
        countCount?: ["COUNT", number]
    ): Promise<unknown>;
    zscan(
        key: unknown,
        cursor: number,
        matchPattern?: ["MATCH", unknown],
        countCount?: ["COUNT", number]
    ): Promise<unknown>;
    xinfo(
        consumersKeyGroupname?: ["CONSUMERS", [unknown, unknown]],
        groupsKey?: ["GROUPS", unknown],
        streamKey?: ["STREAM", unknown],
        help?: "HELP"
    ): Promise<unknown>;
    xadd(key: unknown, id: unknown, fieldValue: Array<[unknown, unknown]>): Promise<unknown>;
    xtrim(key: unknown, strategy: "MAXLEN", approx?: "~", count: number): Promise<number>;
    xdel(key: unknown, id: Array<unknown>): Promise<number>;
    xrange(key: unknown, start: unknown, end: unknown, countCount?: ["COUNT", number]): Promise<Array<unknown>>;
    xrevrange(key: unknown, end: unknown, start: unknown, countCount?: ["COUNT", number]): Promise<Array<unknown>>;
    xlen(key: unknown): Promise<number>;
    xread(
        countCount?: ["COUNT", number],
        blockMilliseconds?: ["BLOCK", number],
        streams: "STREAMS",
        key: Array<unknown>,
        id: Array<unknown>
    ): Promise<Array<unknown>>;
    xgroup(
        createKeyGroupnameIdOr?: ["CREATE", [unknown, unknown, unknown]],
        setidKeyGroupnameIdOr?: ["SETID", [unknown, unknown, unknown]],
        destroyKeyGroupname?: ["DESTROY", [unknown, unknown]],
        delconsumerKeyGroupnameConsumername?: ["DELCONSUMER", [unknown, unknown, unknown]]
    ): Promise<unknown>;
    xreadgroup(
        groupGroupConsumer: ["GROUP", [unknown, unknown]],
        countCount?: ["COUNT", number],
        blockMilliseconds?: ["BLOCK", number],
        noack?: "NOACK",
        streams: "STREAMS",
        key: Array<unknown>,
        id: Array<unknown>
    ): Promise<unknown>;
    xack(key: unknown, group: unknown, id: Array<unknown>): Promise<number>;
    xclaim(
        key: unknown,
        group: unknown,
        consumer: unknown,
        minIdleTime: unknown,
        id: Array<unknown>,
        idleMs?: ["IDLE", number],
        timeMsUnixTime?: ["TIME", number],
        retrycountCount?: ["RETRYCOUNT", number],
        force?: unknown,
        justid?: unknown
    ): Promise<Array<unknown>>;
    xpending(
        key: unknown,
        group: unknown,
        startEndCount?: [unknown, unknown, number],
        consumer?: unknown
    ): Promise<Array<unknown>>;
    latencyDoctor(): Promise<unknown>;
    latencyGraph(event: unknown): Promise<unknown>;
    latencyHistory(event: unknown): Promise<unknown>;
    latencyLatest(): Promise<unknown>;
    latencyReset(event?: unknown): Promise<unknown>;
    latencyHelp(): Promise<unknown>;
}
