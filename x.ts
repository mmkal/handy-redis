export interface Client {
    /**
     * Append a value to a key
     * - _group_: string
     * - _complexity_: O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.
     * - _since_: 2.0.0
     */
    append(key: string, value: string): Promise<number>;

    /**
     * Authenticate to the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    auth(password: string): Promise<string>;

    /**
     * Asynchronously rewrite the append-only file
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    bgrewriteaof(): Promise<string>;

    /**
     * Asynchronously save the dataset to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    bgsave(): Promise<string>;

    /**
     * Count set bits in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.6.0
     */
    bitcount(key: string, start_end: [number, number]): Promise<number>;

    /**
     * Count set bits in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.6.0
     */
    bitcount(key: string): Promise<number>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        set_type_offset_value: [string, [string, number, number]],
        incrby_type_offset_increment: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        set_type_offset_value: [string, [string, number, number]],
        incrby_type_offset_increment: [string, [string, number, number]]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        set_type_offset_value: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        set_type_offset_value: [string, [string, number, number]]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        incrby_type_offset_increment: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        get_type_offset: [string, [string, number]],
        incrby_type_offset_increment: [string, [string, number, number]]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string, get_type_offset: [string, [string, number]], overflow: [string, string]): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string, get_type_offset: [string, [string, number]]): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        set_type_offset_value: [string, [string, number, number]],
        incrby_type_offset_increment: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        set_type_offset_value: [string, [string, number, number]],
        incrby_type_offset_increment: [string, [string, number, number]]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        set_type_offset_value: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string, set_type_offset_value: [string, [string, number, number]]): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(
        key: string,
        incrby_type_offset_increment: [string, [string, number, number]],
        overflow: [string, string]
    ): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string, incrby_type_offset_increment: [string, [string, number, number]]): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string, overflow: [string, string]): Promise<unknown>;

    /**
     * Perform arbitrary bitfield integer operations on strings
     * - _group_: string
     * - _complexity_: O(1) for each subcommand specified
     * - _since_: 3.2.0
     */
    bitfield(key: string): Promise<unknown>;

    /**
     * Perform bitwise operations between strings
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.6.0
     */
    bitop(operation: string, destkey: string, key: Array<string>): Promise<number>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     */
    bitpos(key: string, bit: number, start: number, end: number): Promise<number>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     */
    bitpos(key: string, bit: number, start: number): Promise<number>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     */
    bitpos(key: string, bit: number, end: number): Promise<number>;

    /**
     * Find first bit set or clear in a string
     * - _group_: string
     * - _complexity_: O(N)
     * - _since_: 2.8.7
     */
    bitpos(key: string, bit: number): Promise<number>;

    /**
     * Remove and get the first element in a list, or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    blpop(key: Array<string>, timeout: number): Promise<unknown>;

    /**
     * Remove and get the last element in a list, or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    brpop(key: Array<string>, timeout: number): Promise<unknown>;

    /**
     * Pop an element from a list, push it to another list and return it; or block until one is available
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    brpoplpush(source: string, destination: string, timeout: number): Promise<unknown>;

    /**
     * Remove and return the member with the lowest score from one or more sorted sets, or block until one is available
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 5.0.0
     */
    bzpopmin(key: Array<string>, timeout: number): Promise<unknown>;

    /**
     * Remove and return the member with the highest score from one or more sorted sets, or block until one is available
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 5.0.0
     */
    bzpopmax(key: Array<string>, timeout: number): Promise<unknown>;

    /**
     * Returns the client ID for the current connection
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     */
    clientId(): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        ip_port: string,
        id_client_id: [string, number],
        type: [string, string],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        ip_port: string,
        id_client_id: [string, number],
        type: [string, string],
        addr_ip_port: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        ip_port: string,
        id_client_id: [string, number],
        type: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, id_client_id: [string, number], type: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        ip_port: string,
        id_client_id: [string, number],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, id_client_id: [string, number], addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, id_client_id: [string, number], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, id_client_id: [string, number]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        ip_port: string,
        type: [string, string],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, type: [string, string], addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, type: [string, string], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, type: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, addr_ip_port: [string, string], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string, skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(ip_port: string): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        id_client_id: [string, number],
        type: [string, string],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        id_client_id: [string, number],
        type: [string, string],
        addr_ip_port: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        id_client_id: [string, number],
        type: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(id_client_id: [string, number], type: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        id_client_id: [string, number],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(id_client_id: [string, number], addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(id_client_id: [string, number], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(id_client_id: [string, number]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(
        type: [string, string],
        addr_ip_port: [string, string],
        skipme_yes_no: [string, string]
    ): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(type: [string, string], addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(type: [string, string], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(type: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(addr_ip_port: [string, string], skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(addr_ip_port: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(skipme_yes_no: [string, string]): Promise<unknown>;

    /**
     * Kill the connection of a client
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientKill(): Promise<unknown>;

    /**
     * Get the list of client connections
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientList(type: [string, string]): Promise<unknown>;

    /**
     * Get the list of client connections
     * - _group_: server
     * - _complexity_: O(N) where N is the number of client connections
     * - _since_: 2.4.0
     */
    clientList(): Promise<unknown>;

    /**
     * Get the current connection name
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.6.9
     */
    clientGetname(): Promise<unknown>;

    /**
     * Stop processing commands from clients for some time
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.9.50
     */
    clientPause(timeout: number): Promise<unknown>;

    /**
     * Instruct the server whether to reply to commands
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 3.2
     */
    clientReply(reply_mode: string): Promise<unknown>;

    /**
     * Set the current connection name
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.6.9
     */
    clientSetname(connection_name: string): Promise<unknown>;

    /**
     * Unblock a client blocked in a blocking command from a different connection
     * - _group_: server
     * - _complexity_: O(log N) where N is the number of client connections
     * - _since_: 5.0.0
     */
    clientUnblock(client_id: number, unblock_type: string): Promise<unknown>;

    /**
     * Unblock a client blocked in a blocking command from a different connection
     * - _group_: server
     * - _complexity_: O(log N) where N is the number of client connections
     * - _since_: 5.0.0
     */
    clientUnblock(client_id: number): Promise<unknown>;

    /**
     * Assign new hash slots to receiving node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of hash slot arguments
     * - _since_: 3.0.0
     */
    clusterAddslots(slot: Array<number>): Promise<unknown>;

    /**
     * Advance the cluster config epoch
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterBumpepoch(): Promise<unknown>;

    /**
     * Return the number of failure reports active for a given node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of failure reports
     * - _since_: 3.0.0
     */
    clusterCountFailureReports(node_id: string): Promise<unknown>;

    /**
     * Return the number of local keys in the specified hash slot
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterCountkeysinslot(slot: number): Promise<unknown>;

    /**
     * Set hash slots as unbound in receiving node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of hash slot arguments
     * - _since_: 3.0.0
     */
    clusterDelslots(slot: Array<number>): Promise<unknown>;

    /**
     * Forces a replica to perform a manual failover of its master.
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterFailover(options: string): Promise<unknown>;

    /**
     * Forces a replica to perform a manual failover of its master.
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterFailover(): Promise<unknown>;

    /**
     * Delete a node's own slots information
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterFlushslots(): Promise<unknown>;

    /**
     * Remove a node from the nodes table
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterForget(node_id: string): Promise<unknown>;

    /**
     * Return local key names in the specified hash slot
     * - _group_: cluster
     * - _complexity_: O(log(N)) where N is the number of requested keys
     * - _since_: 3.0.0
     */
    clusterGetkeysinslot(slot: number, count: number): Promise<unknown>;

    /**
     * Provides info about Redis Cluster node state
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterInfo(): Promise<unknown>;

    /**
     * Returns the hash slot of the specified key
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of bytes in the key
     * - _since_: 3.0.0
     */
    clusterKeyslot(key: string): Promise<unknown>;

    /**
     * Force a node cluster to handshake with another node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterMeet(ip: string, port: number): Promise<unknown>;

    /**
     * Return the node id
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterMyid(): Promise<unknown>;

    /**
     * Get Cluster config for the node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of Cluster nodes
     * - _since_: 3.0.0
     */
    clusterNodes(): Promise<unknown>;

    /**
     * Reconfigure a node as a replica of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterReplicate(node_id: string): Promise<unknown>;

    /**
     * Reset a Redis Cluster node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.
     * - _since_: 3.0.0
     */
    clusterReset(reset_type: string): Promise<unknown>;

    /**
     * Reset a Redis Cluster node
     * - _group_: cluster
     * - _complexity_: O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.
     * - _since_: 3.0.0
     */
    clusterReset(): Promise<unknown>;

    /**
     * Forces the node to save cluster state on disk
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterSaveconfig(): Promise<unknown>;

    /**
     * Set the configuration epoch in a new node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterSetConfigEpoch(config_epoch: number): Promise<unknown>;

    /**
     * Bind a hash slot to a specific node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterSetslot(slot: number, subcommand: string, node_id: string): Promise<unknown>;

    /**
     * Bind a hash slot to a specific node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterSetslot(slot: number, subcommand: string): Promise<unknown>;

    /**
     * List replica nodes of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    clusterSlaves(node_id: string): Promise<unknown>;

    /**
     * List replica nodes of the specified master node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     */
    clusterReplicas(node_id: string): Promise<unknown>;

    /**
     * Get array of Cluster slot to node mappings
     * - _group_: cluster
     * - _complexity_: O(N) where N is the total number of Cluster nodes
     * - _since_: 3.0.0
     */
    clusterSlots(): Promise<unknown>;

    /**
     * Get array of Redis command details
     * - _group_: server
     * - _complexity_: O(N) where N is the total number of Redis commands
     * - _since_: 2.8.13
     */
    command(): Promise<Array<unknown>>;

    /**
     * Get total number of Redis commands
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.8.13
     */
    commandCount(): Promise<unknown>;

    /**
     * Extract keys given a full Redis command
     * - _group_: server
     * - _complexity_: O(N) where N is the number of arguments to the command
     * - _since_: 2.8.13
     */
    commandGetkeys(): Promise<unknown>;

    /**
     * Get array of specific Redis command details
     * - _group_: server
     * - _complexity_: O(N) when N is number of commands to look up
     * - _since_: 2.8.13
     */
    commandInfo(command_name: Array<string>): Promise<unknown>;

    /**
     * Get the value of a configuration parameter
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.0.0
     */
    configGet(parameter: string): Promise<unknown>;

    /**
     * Rewrite the configuration file with the in memory configuration
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.0
     */
    configRewrite(): Promise<unknown>;

    /**
     * Set a configuration parameter to the given value
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.0.0
     */
    configSet(parameter: string, value: string): Promise<unknown>;

    /**
     * Reset the stats returned by INFO
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    configResetstat(): Promise<unknown>;

    /**
     * Return the number of keys in the selected database
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    dbsize(): Promise<number>;

    /**
     * Get debugging information about a key
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    debugObject(key: string): Promise<unknown>;

    /**
     * Make the server crash
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    debugSegfault(): Promise<unknown>;

    /**
     * Decrement the integer value of a key by one
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    decr(key: string): Promise<number>;

    /**
     * Decrement the integer value of a key by the given number
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    decrby(key: string, decrement: number): Promise<number>;

    /**
     * Delete a key
     * - _group_: generic
     * - _complexity_: O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).
     * - _since_: 1.0.0
     */
    del(key: Array<string>): Promise<number>;

    /**
     * Discard all commands issued after MULTI
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 2.0.0
     */
    discard(): Promise<string>;

    /**
     * Return a serialized version of the value stored at the specified key.
     * - _group_: generic
     * - _complexity_: O(1) to access the key and additional O(N*M) to serialized it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).
     * - _since_: 2.6.0
     */
    dump(key: string): Promise<string>;

    /**
     * Echo the given string
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    echo(message: string): Promise<string>;

    /**
     * Execute a Lua script server side
     * - _group_: scripting
     * - _complexity_: Depends on the script that is executed.
     * - _since_: 2.6.0
     */
    eval(script: string, numkeys: number, key: Array<string>, arg: Array<string>): Promise<unknown>;

    /**
     * Execute a Lua script server side
     * - _group_: scripting
     * - _complexity_: Depends on the script that is executed.
     * - _since_: 2.6.0
     */
    evalsha(sha_1: string, numkeys: number, key: Array<string>, arg: Array<string>): Promise<unknown>;

    /**
     * Execute all commands issued after MULTI
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 1.2.0
     */
    exec(): Promise<unknown>;

    /**
     * Determine if a key exists
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    exists(key: Array<string>): Promise<number>;

    /**
     * Set a key's time to live in seconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    expire(key: string, seconds: number): Promise<number>;

    /**
     * Set the expiration for a key as a UNIX timestamp
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     */
    expireat(key: string, timestamp: unknown): Promise<number>;

    /**
     * Remove all keys from all databases
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    flushall(async: string): Promise<string>;

    /**
     * Remove all keys from all databases
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    flushall(): Promise<string>;

    /**
     * Remove all keys from the current database
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    flushdb(async: string): Promise<string>;

    /**
     * Remove all keys from the current database
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    flushdb(): Promise<string>;

    /**
     * Add one or more geospatial items in the geospatial index represented using a sorted set
     * - _group_: geo
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     */
    geoadd(key: string, longitude_latitude_member: Array<[number, number, string]>): Promise<number>;

    /**
     * Returns members of a geospatial index as standard geohash strings
     * - _group_: geo
     * - _complexity_: O(log(N)) for each member requested, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     */
    geohash(key: string, member: Array<string>): Promise<Array<unknown>>;

    /**
     * Returns longitude and latitude of members of a geospatial index
     * - _group_: geo
     * - _complexity_: O(log(N)) for each member requested, where N is the number of elements in the sorted set.
     * - _since_: 3.2.0
     */
    geopos(key: string, member: Array<string>): Promise<unknown>;

    /**
     * Returns the distance between two members of a geospatial index
     * - _group_: geo
     * - _complexity_: O(log(N))
     * - _since_: 3.2.0
     */
    geodist(key: string, member_1: string, member_2: string, unit: string): Promise<unknown>;

    /**
     * Returns the distance between two members of a geospatial index
     * - _group_: geo
     * - _complexity_: O(log(N))
     * - _since_: 3.2.0
     */
    geodist(key: string, member_1: string, member_2: string): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withcoord: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withdist: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        withhash: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        count_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        order: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        order: string
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        store_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(
        key: string,
        longitude: number,
        latitude: number,
        radius: number,
        unit: string,
        storedist_key: [string, string]
    ): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadius(key: string, longitude: number, latitude: number, radius: number, unit: string): Promise<Array<unknown>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        withhash: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withdist: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        withhash: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withcoord: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(key: string, member: string, radius: number, unit: string, withcoord: string): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        withhash: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withdist: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(key: string, member: string, radius: number, unit: string, withdist: string): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        withhash: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(key: string, member: string, radius: number, unit: string, withhash: string): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        order: string
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        order: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        order: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        order: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(key: string, member: string, radius: number, unit: string, order: string): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        store_key: [string, string],
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        store_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(
        key: string,
        member: string,
        radius: number,
        unit: string,
        storedist_key: [string, string]
    ): Promise<unknown>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member
     * - _group_: geo
     * - _complexity_: O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.
     * - _since_: 3.2.0
     */
    georadiusbymember(key: string, member: string, radius: number, unit: string): Promise<unknown>;

    /**
     * Get the value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    get(key: string): Promise<unknown>;

    /**
     * Returns the bit value at offset in the string value stored at key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    getbit(key: string, offset: number): Promise<number>;

    /**
     * Get a substring of the string stored at a key
     * - _group_: string
     * - _complexity_: O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.
     * - _since_: 2.4.0
     */
    getrange(key: string, start: number, end: number): Promise<string>;

    /**
     * Set the string value of a key and return its old value
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    getset(key: string, value: string): Promise<unknown>;

    /**
     * Delete one or more hash fields
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields to be removed.
     * - _since_: 2.0.0
     */
    hdel(key: string, field: Array<string>): Promise<number>;

    /**
     * Determine if a hash field exists
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    hexists(key: string, field: string): Promise<number>;

    /**
     * Get the value of a hash field
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    hget(key: string, field: string): Promise<unknown>;

    /**
     * Get all the fields and values in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     */
    hgetall(key: string): Promise<Array<unknown>>;

    /**
     * Increment the integer value of a hash field by the given number
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    hincrby(key: string, field: string, increment: number): Promise<number>;

    /**
     * Increment the float value of a hash field by the given amount
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    hincrbyfloat(key: string, field: string, increment: number): Promise<string>;

    /**
     * Get all the fields in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     */
    hkeys(key: string): Promise<Array<unknown>>;

    /**
     * Get the number of fields in a hash
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    hlen(key: string): Promise<number>;

    /**
     * Get the values of all the given hash fields
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields being requested.
     * - _since_: 2.0.0
     */
    hmget(key: string, field: Array<string>): Promise<Array<unknown>>;

    /**
     * Set multiple hash fields to multiple values
     * - _group_: hash
     * - _complexity_: O(N) where N is the number of fields being set.
     * - _since_: 2.0.0
     */
    hmset(key: string, field_value: Array<[string, string]>): Promise<string>;

    /**
     * Set the string value of a hash field
     * - _group_: hash
     * - _complexity_: O(1) for each field/value pair added, so O(N) to add N field/value pairs when the command is called with multiple field/value pairs.
     * - _since_: 2.0.0
     */
    hset(key: string, field_value: Array<[string, string]>): Promise<number>;

    /**
     * Set the value of a hash field, only if the field does not exist
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    hsetnx(key: string, field: string, value: string): Promise<number>;

    /**
     * Get the length of the value of a hash field
     * - _group_: hash
     * - _complexity_: O(1)
     * - _since_: 3.2.0
     */
    hstrlen(key: string, field: string): Promise<number>;

    /**
     * Get all the values in a hash
     * - _group_: hash
     * - _complexity_: O(N) where N is the size of the hash.
     * - _since_: 2.0.0
     */
    hvals(key: string): Promise<Array<unknown>>;

    /**
     * Increment the integer value of a key by one
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    incr(key: string): Promise<number>;

    /**
     * Increment the integer value of a key by the given amount
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    incrby(key: string, increment: number): Promise<number>;

    /**
     * Increment the float value of a key by the given amount
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    incrbyfloat(key: string, increment: number): Promise<string>;

    /**
     * Get information and statistics about the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    info(section: string): Promise<string>;

    /**
     * Get information and statistics about the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    info(): Promise<string>;

    /**
     * Display some computer art and the Redis version
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 5.0.0
     */
    lolwut(version_version: [string, number]): Promise<string>;

    /**
     * Display some computer art and the Redis version
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 5.0.0
     */
    lolwut(): Promise<string>;

    /**
     * Find all keys matching the given pattern
     * - _group_: generic
     * - _complexity_: O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.
     * - _since_: 1.0.0
     */
    keys(pattern: string): Promise<Array<unknown>>;

    /**
     * Get the UNIX time stamp of the last successful save to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    lastsave(): Promise<number>;

    /**
     * Get an element from a list by its index
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to traverse to get to the element at index. This makes asking for the first or the last element of the list O(1).
     * - _since_: 1.0.0
     */
    lindex(key: string, index: number): Promise<unknown>;

    /**
     * Insert an element before or after another element in a list
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).
     * - _since_: 2.2.0
     */
    linsert(key: string, where: string, pivot: string, element: string): Promise<number>;

    /**
     * Get the length of a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    llen(key: string): Promise<number>;

    /**
     * Remove and get the first element in a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    lpop(key: string): Promise<unknown>;

    /**
     * Prepend one or multiple elements to a list
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     */
    lpush(key: string, element: Array<string>): Promise<number>;

    /**
     * Prepend an element to a list, only if the list exists
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 2.2.0
     */
    lpushx(key: string, element: Array<string>): Promise<number>;

    /**
     * Get a range of elements from a list
     * - _group_: list
     * - _complexity_: O(S+N) where S is the distance of start offset from HEAD for small lists, from nearest end (HEAD or TAIL) for large lists; and N is the number of elements in the specified range.
     * - _since_: 1.0.0
     */
    lrange(key: string, start: number, stop: number): Promise<Array<unknown>>;

    /**
     * Remove elements from a list
     * - _group_: list
     * - _complexity_: O(N+M) where N is the length of the list and M is the number of elements removed.
     * - _since_: 1.0.0
     */
    lrem(key: string, count: number, element: string): Promise<number>;

    /**
     * Set the value of an element in a list by its index
     * - _group_: list
     * - _complexity_: O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).
     * - _since_: 1.0.0
     */
    lset(key: string, index: number, element: string): Promise<string>;

    /**
     * Trim a list to the specified range
     * - _group_: list
     * - _complexity_: O(N) where N is the number of elements to be removed by the operation.
     * - _since_: 1.0.0
     */
    ltrim(key: string, start: number, stop: number): Promise<string>;

    /**
     * Outputs memory problems report
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    memoryDoctor(): Promise<unknown>;

    /**
     * Show helpful text about the different subcommands
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    memoryHelp(): Promise<unknown>;

    /**
     * Show allocator internal stats
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    memoryMallocStats(): Promise<unknown>;

    /**
     * Ask the allocator to release memory
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    memoryPurge(): Promise<unknown>;

    /**
     * Show memory usage details
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    memoryStats(): Promise<unknown>;

    /**
     * Estimate the memory usage of a key
     * - _group_: server
     * - _complexity_: O(N) where N is the number of samples.
     * - _since_: 4.0.0
     */
    memoryUsage(key: string, samples_count: [string, number]): Promise<unknown>;

    /**
     * Estimate the memory usage of a key
     * - _group_: server
     * - _complexity_: O(N) where N is the number of samples.
     * - _since_: 4.0.0
     */
    memoryUsage(key: string): Promise<unknown>;

    /**
     * Get the values of all the given keys
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to retrieve.
     * - _since_: 1.0.0
     */
    mget(key: Array<string>): Promise<Array<unknown>>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        replace: string,
        auth_password: [string, string],
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        replace: string,
        auth_password: [string, string]
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        replace: string,
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        replace: string
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        auth_password: [string, string],
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        auth_password: [string, string]
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string,
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        copy: string
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        replace: string,
        auth_password: [string, string],
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        replace: string,
        auth_password: [string, string]
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        replace: string,
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        replace: string
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        auth_password: [string, string],
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        auth_password: [string, string]
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(
        host: string,
        port: string,
        key: string,
        destination_db: number,
        timeout: number,
        keys_key: Array<[string, string]>
    ): Promise<string>;

    /**
     * Atomically transfer a key from a Redis instance to another one.
     * - _group_: generic
     * - _complexity_: This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.
     * - _since_: 2.6.0
     */
    migrate(host: string, port: string, key: string, destination_db: number, timeout: number): Promise<string>;

    /**
     * List all modules loaded by the server
     * - _group_: server
     * - _complexity_: O(N) where N is the number of loaded modules.
     * - _since_: 4.0.0
     */
    moduleList(): Promise<unknown>;

    /**
     * Load a module
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 4.0.0
     */
    moduleLoad(path: string, arg: Array<string>): Promise<unknown>;

    /**
     * Load a module
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 4.0.0
     */
    moduleLoad(path: string): Promise<unknown>;

    /**
     * Unload a module
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 4.0.0
     */
    moduleUnload(name: string): Promise<unknown>;

    /**
     * Listen for all requests received by the server in real time
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    monitor(): Promise<unknown>;

    /**
     * Move a key to another database
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    move(key: string, db: number): Promise<number>;

    /**
     * Set multiple keys to multiple values
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to set.
     * - _since_: 1.0.1
     */
    mset(key_value: Array<[string, string]>): Promise<string>;

    /**
     * Set multiple keys to multiple values, only if none of the keys exist
     * - _group_: string
     * - _complexity_: O(N) where N is the number of keys to set.
     * - _since_: 1.0.1
     */
    msetnx(key_value: Array<[string, string]>): Promise<number>;

    /**
     * Mark the start of a transaction block
     * - _group_: transactions
     * - _complexity_: undefined
     * - _since_: 1.2.0
     */
    multi(): Promise<string>;

    /**
     * Inspect the internals of Redis objects
     * - _group_: generic
     * - _complexity_: O(1) for all the currently implemented subcommands.
     * - _since_: 2.2.3
     */
    object(subcommand: string, args: Array<string>): Promise<unknown>;

    /**
     * Inspect the internals of Redis objects
     * - _group_: generic
     * - _complexity_: O(1) for all the currently implemented subcommands.
     * - _since_: 2.2.3
     */
    object(subcommand: string): Promise<unknown>;

    /**
     * Remove the expiration from a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    persist(key: string): Promise<number>;

    /**
     * Set a key's time to live in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    pexpire(key: string, milliseconds: number): Promise<number>;

    /**
     * Set the expiration for a key as a UNIX timestamp specified in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    pexpireat(key: string, milliseconds_timestamp: unknown): Promise<number>;

    /**
     * Adds the specified elements to the specified HyperLogLog.
     * - _group_: hyperloglog
     * - _complexity_: O(1) to add every element.
     * - _since_: 2.8.9
     */
    pfadd(key: string, element: Array<string>): Promise<number>;

    /**
     * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
     * - _group_: hyperloglog
     * - _complexity_: O(1) with a very small average constant time when called with a single key. O(N) with N being the number of keys, and much bigger constant times, when called with multiple keys.
     * - _since_: 2.8.9
     */
    pfcount(key: Array<string>): Promise<number>;

    /**
     * Merge N different HyperLogLogs into a single one.
     * - _group_: hyperloglog
     * - _complexity_: O(N) to merge N HyperLogLogs, but with high constant times.
     * - _since_: 2.8.9
     */
    pfmerge(destkey: string, sourcekey: Array<string>): Promise<string>;

    /**
     * Ping the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    ping(message: string): Promise<string>;

    /**
     * Ping the server
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    ping(): Promise<string>;

    /**
     * Set the value and expiration in milliseconds of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    psetex(key: string, milliseconds: number, value: string): Promise<unknown>;

    /**
     * Listen for messages published to channels matching the given patterns
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of patterns the client is already subscribed to.
     * - _since_: 2.0.0
     */
    psubscribe(pattern: Array<[string]>): Promise<unknown>;

    /**
     * Inspect the state of the Pub/Sub subsystem
     * - _group_: pubsub
     * - _complexity_: O(N) for the CHANNELS subcommand, where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns). O(N) for the NUMSUB subcommand, where N is the number of requested channels. O(1) for the NUMPAT subcommand.
     * - _since_: 2.8.0
     */
    pubsub(subcommand: string, argument: Array<string>): Promise<Array<unknown>>;

    /**
     * Inspect the state of the Pub/Sub subsystem
     * - _group_: pubsub
     * - _complexity_: O(N) for the CHANNELS subcommand, where N is the number of active channels, and assuming constant time pattern matching (relatively short channels and patterns). O(N) for the NUMSUB subcommand, where N is the number of requested channels. O(1) for the NUMPAT subcommand.
     * - _since_: 2.8.0
     */
    pubsub(subcommand: string): Promise<Array<unknown>>;

    /**
     * Get the time to live for a key in milliseconds
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    pttl(key: string): Promise<number>;

    /**
     * Post a message to a channel
     * - _group_: pubsub
     * - _complexity_: O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).
     * - _since_: 2.0.0
     */
    publish(channel: string, message: string): Promise<number>;

    /**
     * Stop listening for messages posted to channels matching the given patterns
     * - _group_: pubsub
     * - _complexity_: O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).
     * - _since_: 2.0.0
     */
    punsubscribe(pattern: Array<string>): Promise<unknown>;

    /**
     * Stop listening for messages posted to channels matching the given patterns
     * - _group_: pubsub
     * - _complexity_: O(N+M) where N is the number of patterns the client is already subscribed and M is the number of total patterns subscribed in the system (by any client).
     * - _since_: 2.0.0
     */
    punsubscribe(): Promise<unknown>;

    /**
     * Close the connection
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    quit(): Promise<string>;

    /**
     * Return a random key from the keyspace
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    randomkey(): Promise<unknown>;

    /**
     * Enables read queries for a connection to a cluster replica node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    readonly(): Promise<string>;

    /**
     * Disables read queries for a connection to a cluster replica node
     * - _group_: cluster
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    readwrite(): Promise<string>;

    /**
     * Rename a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    rename(key: string, newkey: string): Promise<string>;

    /**
     * Rename a key, only if the new key does not exist
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    renamenx(key: string, newkey: string): Promise<number>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        absttl: string,
        idletime_seconds: [string, number],
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        absttl: string,
        idletime_seconds: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        absttl: string,
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string, replace: string, absttl: string): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        idletime_seconds: [string, number],
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        idletime_seconds: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        replace: string,
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string, replace: string): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        absttl: string,
        idletime_seconds: [string, number],
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        absttl: string,
        idletime_seconds: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        absttl: string,
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string, absttl: string): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(
        key: string,
        ttl: number,
        serialized_value: string,
        idletime_seconds: [string, number],
        freq_frequency: [string, number]
    ): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string, idletime_seconds: [string, number]): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string, freq_frequency: [string, number]): Promise<string>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     * - _group_: generic
     * - _complexity_: O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).
     * - _since_: 2.6.0
     */
    restore(key: string, ttl: number, serialized_value: string): Promise<string>;

    /**
     * Return the role of the instance in the context of replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.12
     */
    role(): Promise<Array<unknown>>;

    /**
     * Remove and get the last element in a list
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    rpop(key: string): Promise<unknown>;

    /**
     * Remove the last element in a list, prepend it to another list and return it
     * - _group_: list
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     */
    rpoplpush(source: string, destination: string): Promise<string>;

    /**
     * Append one or multiple elements to a list
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     */
    rpush(key: string, element: Array<string>): Promise<number>;

    /**
     * Append an element to a list, only if the list exists
     * - _group_: list
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 2.2.0
     */
    rpushx(key: string, element: Array<string>): Promise<number>;

    /**
     * Add one or more members to a set
     * - _group_: set
     * - _complexity_: O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.
     * - _since_: 1.0.0
     */
    sadd(key: string, member: Array<string>): Promise<number>;

    /**
     * Synchronously save the dataset to disk
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    save(): Promise<string>;

    /**
     * Get the number of members in a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    scard(key: string): Promise<number>;

    /**
     * Set the debug mode for executed scripts.
     * - _group_: scripting
     * - _complexity_: O(1)
     * - _since_: 3.2.0
     */
    scriptDebug(mode: string): Promise<unknown>;

    /**
     * Check existence of scripts in the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the number of scripts to check (so checking a single script is an O(1) operation).
     * - _since_: 2.6.0
     */
    scriptExists(sha_1: Array<string>): Promise<unknown>;

    /**
     * Remove all the scripts from the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the number of scripts in cache
     * - _since_: 2.6.0
     */
    scriptFlush(): Promise<unknown>;

    /**
     * Kill the script currently in execution.
     * - _group_: scripting
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    scriptKill(): Promise<unknown>;

    /**
     * Load the specified Lua script into the script cache.
     * - _group_: scripting
     * - _complexity_: O(N) with N being the length in bytes of the script body.
     * - _since_: 2.6.0
     */
    scriptLoad(script: string): Promise<unknown>;

    /**
     * Subtract multiple sets
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     */
    sdiff(key: Array<string>): Promise<Array<unknown>>;

    /**
     * Subtract multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     */
    sdiffstore(destination: string, key: Array<string>): Promise<number>;

    /**
     * Change the selected database for the current connection
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    select(index: number): Promise<string>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    set(key: string, value: string, expiration: string, condition: string): Promise<unknown>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    set(key: string, value: string, expiration: string): Promise<unknown>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    set(key: string, value: string, condition: string): Promise<unknown>;

    /**
     * Set the string value of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    set(key: string, value: string): Promise<unknown>;

    /**
     * Sets or clears the bit at offset in the string value stored at key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    setbit(key: string, offset: number, value: number): Promise<number>;

    /**
     * Set the value and expiration of a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.0.0
     */
    setex(key: string, seconds: number, value: string): Promise<string>;

    /**
     * Set the value of a key, only if the key does not exist
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    setnx(key: string, value: string): Promise<number>;

    /**
     * Overwrite part of a string at key starting at the specified offset
     * - _group_: string
     * - _complexity_: O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.
     * - _since_: 2.2.0
     */
    setrange(key: string, offset: number, value: string): Promise<number>;

    /**
     * Synchronously save the dataset to disk and then shut down the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    shutdown(save_mode: string): Promise<string>;

    /**
     * Synchronously save the dataset to disk and then shut down the server
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    shutdown(): Promise<string>;

    /**
     * Intersect multiple sets
     * - _group_: set
     * - _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
     * - _since_: 1.0.0
     */
    sinter(key: Array<string>): Promise<Array<unknown>>;

    /**
     * Intersect multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N*M) worst case where N is the cardinality of the smallest set and M is the number of sets.
     * - _since_: 1.0.0
     */
    sinterstore(destination: string, key: Array<string>): Promise<number>;

    /**
     * Determine if a given value is a member of a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    sismember(key: string, member: string): Promise<number>;

    /**
     * Make the server a replica of another instance, or promote it as master. Deprecated starting with Redis 5. Use REPLICAOF instead.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    slaveof(host: string, port: string): Promise<string>;

    /**
     * Make the server a replica of another instance, or promote it as master.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 5.0.0
     */
    replicaof(host: string, port: string): Promise<string>;

    /**
     * Manages the Redis slow queries log
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.2.12
     */
    slowlog(subcommand: string, argument: string): Promise<unknown>;

    /**
     * Manages the Redis slow queries log
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.2.12
     */
    slowlog(subcommand: string): Promise<unknown>;

    /**
     * Get all the members in a set
     * - _group_: set
     * - _complexity_: O(N) where N is the set cardinality.
     * - _since_: 1.0.0
     */
    smembers(key: string): Promise<Array<unknown>>;

    /**
     * Move a member from one set to another
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    smove(source: string, destination: string, member: string): Promise<number>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        order: string,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        order: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        limit_offset_count: [string, [number, number]],
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], limit_offset_count: [string, [number, number]]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        order: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        get_pattern: Array<[string, string]>,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], get_pattern: Array<[string, string]>): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], order: string, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], order: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        by_pattern: [string, string],
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string], store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, by_pattern: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        order: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        sorting: string
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        get_pattern: Array<[string, string]>
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, limit_offset_count: [string, [number, number]], order: string, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, limit_offset_count: [string, [number, number]], order: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, limit_offset_count: [string, [number, number]], sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        limit_offset_count: [string, [number, number]],
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, limit_offset_count: [string, [number, number]]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        get_pattern: Array<[string, string]>,
        order: string,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, get_pattern: Array<[string, string]>, order: string, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        get_pattern: Array<[string, string]>,
        order: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, get_pattern: Array<[string, string]>, order: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(
        key: string,
        get_pattern: Array<[string, string]>,
        sorting: string,
        store_destination: [string, string]
    ): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, get_pattern: Array<[string, string]>, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, get_pattern: Array<[string, string]>, store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, get_pattern: Array<[string, string]>): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, order: string, sorting: string, store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, order: string, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, order: string, store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, order: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, sorting: string, store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, sorting: string): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string, store_destination: [string, string]): Promise<unknown>;

    /**
     * Sort the elements in a list, set or sorted set
     * - _group_: generic
     * - _complexity_: O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.
     * - _since_: 1.0.0
     */
    sort(key: string): Promise<unknown>;

    /**
     * Remove and return one or multiple random members from a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    spop(key: string, count: number): Promise<unknown>;

    /**
     * Remove and return one or multiple random members from a set
     * - _group_: set
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    spop(key: string): Promise<unknown>;

    /**
     * Get one or multiple random members from a set
     * - _group_: set
     * - _complexity_: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
     * - _since_: 1.0.0
     */
    srandmember(key: string, count: number): Promise<unknown>;

    /**
     * Get one or multiple random members from a set
     * - _group_: set
     * - _complexity_: Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.
     * - _since_: 1.0.0
     */
    srandmember(key: string): Promise<unknown>;

    /**
     * Remove one or more members from a set
     * - _group_: set
     * - _complexity_: O(N) where N is the number of members to be removed.
     * - _since_: 1.0.0
     */
    srem(key: string, member: Array<string>): Promise<number>;

    /**
     * Get the length of the value stored in a key
     * - _group_: string
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    strlen(key: string): Promise<number>;

    /**
     * Listen for messages published to the given channels
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of channels to subscribe to.
     * - _since_: 2.0.0
     */
    subscribe(channel: Array<string>): Promise<unknown>;

    /**
     * Add multiple sets
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     */
    sunion(key: Array<string>): Promise<Array<unknown>>;

    /**
     * Add multiple sets and store the resulting set in a key
     * - _group_: set
     * - _complexity_: O(N) where N is the total number of elements in all given sets.
     * - _since_: 1.0.0
     */
    sunionstore(destination: string, key: Array<string>): Promise<number>;

    /**
     * Swaps two Redis databases
     * - _group_: connection
     * - _complexity_: undefined
     * - _since_: 4.0.0
     */
    swapdb(index_1: number, index_2: number): Promise<string>;

    /**
     * Internal command used for replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 1.0.0
     */
    sync(): Promise<unknown>;

    /**
     * Internal command used for replication
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.0
     */
    psync(replicationid: number, offset: number): Promise<unknown>;

    /**
     * Return the current server time
     * - _group_: server
     * - _complexity_: O(1)
     * - _since_: 2.6.0
     */
    time(): Promise<Array<unknown>>;

    /**
     * Alters the last access time of a key(s). Returns the number of existing keys specified.
     * - _group_: generic
     * - _complexity_: O(N) where N is the number of keys that will be touched.
     * - _since_: 3.2.1
     */
    touch(key: Array<string>): Promise<number>;

    /**
     * Get the time to live for a key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    ttl(key: string): Promise<number>;

    /**
     * Determine the type stored at key
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 1.0.0
     */
    type(key: string): Promise<string>;

    /**
     * Stop listening for messages posted to the given channels
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of clients already subscribed to a channel.
     * - _since_: 2.0.0
     */
    unsubscribe(channel: Array<string>): Promise<unknown>;

    /**
     * Stop listening for messages posted to the given channels
     * - _group_: pubsub
     * - _complexity_: O(N) where N is the number of clients already subscribed to a channel.
     * - _since_: 2.0.0
     */
    unsubscribe(): Promise<unknown>;

    /**
     * Delete a key asynchronously in another thread. Otherwise it is just as DEL, but non blocking.
     * - _group_: generic
     * - _complexity_: O(1) for each key removed regardless of its size. Then the command does O(N) work in a different thread in order to reclaim memory, where N is the number of allocations the deleted objects where composed of.
     * - _since_: 4.0.0
     */
    unlink(key: Array<string>): Promise<number>;

    /**
     * Forget about all watched keys
     * - _group_: transactions
     * - _complexity_: O(1)
     * - _since_: 2.2.0
     */
    unwatch(): Promise<string>;

    /**
     * Wait for the synchronous replication of all the write commands sent in the context of the current connection
     * - _group_: generic
     * - _complexity_: O(1)
     * - _since_: 3.0.0
     */
    wait(numreplicas: number, timeout: number): Promise<number>;

    /**
     * Watch the given keys to determine execution of the MULTI/EXEC block
     * - _group_: transactions
     * - _complexity_: O(1) for every key.
     * - _since_: 2.2.0
     */
    watch(key: Array<string>): Promise<string>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(
        key: string,
        condition: string,
        change: string,
        increment: string,
        score_member: Array<[number, string]>
    ): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, condition: string, change: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, condition: string, increment: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, condition: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, change: string, increment: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, change: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, increment: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) for each item added, where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zadd(key: string, score_member: Array<[number, string]>): Promise<unknown>;

    /**
     * Get the number of members in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     */
    zcard(key: string): Promise<number>;

    /**
     * Count the members in a sorted set with scores within the given values
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 2.0.0
     */
    zcount(key: string, min: number, max: number): Promise<number>;

    /**
     * Increment the score of a member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) where N is the number of elements in the sorted set.
     * - _since_: 1.2.0
     */
    zincrby(key: string, increment: number, member: string): Promise<string>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zinterstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights_weight: Array<[string, number]>,
        aggregate_aggregate: [string, string]
    ): Promise<number>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zinterstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights_weight: Array<[string, number]>
    ): Promise<number>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zinterstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        aggregate_aggregate: [string, string]
    ): Promise<number>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zinterstore(destination: string, numkeys: number, key: Array<string>): Promise<number>;

    /**
     * Count the number of members in a sorted set between a given lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)) with N being the number of elements in the sorted set.
     * - _since_: 2.8.9
     */
    zlexcount(key: string, min: string, max: string): Promise<number>;

    /**
     * Remove and return members with the highest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     */
    zpopmax(key: string, count: number): Promise<Array<unknown>>;

    /**
     * Remove and return members with the highest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     */
    zpopmax(key: string): Promise<Array<unknown>>;

    /**
     * Remove and return members with the lowest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     */
    zpopmin(key: string, count: number): Promise<Array<unknown>>;

    /**
     * Remove and return members with the lowest scores in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.
     * - _since_: 5.0.0
     */
    zpopmin(key: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by index
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     */
    zrange(key: string, start: number, stop: number, withscores: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by index
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     */
    zrange(key: string, start: number, stop: number): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     */
    zrangebylex(
        key: string,
        min: string,
        max: string,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     */
    zrangebylex(key: string, min: string, max: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     */
    zrevrangebylex(
        key: string,
        max: string,
        min: string,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.8.9
     */
    zrevrangebylex(key: string, max: string, min: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number,
        withscores: string,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     */
    zrangebyscore(key: string, min: number, max: number, withscores: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     */
    zrangebyscore(
        key: string,
        min: number,
        max: number,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 1.0.5
     */
    zrangebyscore(key: string, min: number, max: number): Promise<Array<unknown>>;

    /**
     * Determine the index of a member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(log(N))
     * - _since_: 2.0.0
     */
    zrank(key: string, member: string): Promise<unknown>;

    /**
     * Remove one or more members from a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.
     * - _since_: 1.2.0
     */
    zrem(key: string, member: Array<string>): Promise<number>;

    /**
     * Remove all members in a sorted set between the given lexicographical range
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 2.8.9
     */
    zremrangebylex(key: string, min: string, max: string): Promise<number>;

    /**
     * Remove all members in a sorted set within the given indexes
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 2.0.0
     */
    zremrangebyrank(key: string, start: number, stop: number): Promise<number>;

    /**
     * Remove all members in a sorted set within the given scores
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.
     * - _since_: 1.2.0
     */
    zremrangebyscore(key: string, min: number, max: number): Promise<number>;

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     */
    zrevrange(key: string, start: number, stop: number, withscores: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.
     * - _since_: 1.2.0
     */
    zrevrange(key: string, start: number, stop: number): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number,
        withscores: string,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     */
    zrevrangebyscore(key: string, max: number, min: number, withscores: string): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     */
    zrevrangebyscore(
        key: string,
        max: number,
        min: number,
        limit_offset_count: [string, [number, number]]
    ): Promise<Array<unknown>>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements being returned. If M is constant (e.g. always asking for the first 10 elements with LIMIT), you can consider it O(log(N)).
     * - _since_: 2.2.0
     */
    zrevrangebyscore(key: string, max: number, min: number): Promise<Array<unknown>>;

    /**
     * Determine the index of a member in a sorted set, with scores ordered from high to low
     * - _group_: sorted_set
     * - _complexity_: O(log(N))
     * - _since_: 2.0.0
     */
    zrevrank(key: string, member: string): Promise<unknown>;

    /**
     * Get the score associated with the given member in a sorted set
     * - _group_: sorted_set
     * - _complexity_: O(1)
     * - _since_: 1.2.0
     */
    zscore(key: string, member: string): Promise<string>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zunionstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights_weight: Array<[string, number]>,
        aggregate_aggregate: [string, string]
    ): Promise<number>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zunionstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        weights_weight: Array<[string, number]>
    ): Promise<number>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zunionstore(
        destination: string,
        numkeys: number,
        key: Array<string>,
        aggregate_aggregate: [string, string]
    ): Promise<number>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key
     * - _group_: sorted_set
     * - _complexity_: O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.
     * - _since_: 2.0.0
     */
    zunionstore(destination: string, numkeys: number, key: Array<string>): Promise<number>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(
        cursor: number,
        match_pattern: [string, string],
        count_count: [string, number],
        type_type: [string, string]
    ): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, match_pattern: [string, string], count_count: [string, number]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, match_pattern: [string, string], type_type: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, match_pattern: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, count_count: [string, number], type_type: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, count_count: [string, number]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number, type_type: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate the keys space
     * - _group_: generic
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.
     * - _since_: 2.8.0
     */
    scan(cursor: number): Promise<unknown>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    sscan(
        key: string,
        cursor: number,
        match_pattern: [string, string],
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    sscan(key: string, cursor: number, match_pattern: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    sscan(key: string, cursor: number, count_count: [string, number]): Promise<unknown>;

    /**
     * Incrementally iterate Set elements
     * - _group_: set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    sscan(key: string, cursor: number): Promise<unknown>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    hscan(
        key: string,
        cursor: number,
        match_pattern: [string, string],
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    hscan(key: string, cursor: number, match_pattern: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    hscan(key: string, cursor: number, count_count: [string, number]): Promise<unknown>;

    /**
     * Incrementally iterate hash fields and associated values
     * - _group_: hash
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    hscan(key: string, cursor: number): Promise<unknown>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    zscan(
        key: string,
        cursor: number,
        match_pattern: [string, string],
        count_count: [string, number]
    ): Promise<unknown>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    zscan(key: string, cursor: number, match_pattern: [string, string]): Promise<unknown>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    zscan(key: string, cursor: number, count_count: [string, number]): Promise<unknown>;

    /**
     * Incrementally iterate sorted sets elements and associated scores
     * - _group_: sorted_set
     * - _complexity_: O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection..
     * - _since_: 2.8.0
     */
    zscan(key: string, cursor: number): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(
        consumers_key_groupname: [string, [string, string]],
        groups_key: [string, string],
        stream_key: [string, string],
        help: string
    ): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(
        consumers_key_groupname: [string, [string, string]],
        groups_key: [string, string],
        stream_key: [string, string]
    ): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(
        consumers_key_groupname: [string, [string, string]],
        groups_key: [string, string],
        help: string
    ): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(consumers_key_groupname: [string, [string, string]], groups_key: [string, string]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(
        consumers_key_groupname: [string, [string, string]],
        stream_key: [string, string],
        help: string
    ): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(consumers_key_groupname: [string, [string, string]], stream_key: [string, string]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(consumers_key_groupname: [string, [string, string]], help: string): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(consumers_key_groupname: [string, [string, string]]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(groups_key: [string, string], stream_key: [string, string], help: string): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(groups_key: [string, string], stream_key: [string, string]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(groups_key: [string, string], help: string): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(groups_key: [string, string]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(stream_key: [string, string], help: string): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(stream_key: [string, string]): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(help: string): Promise<unknown>;

    /**
     * Get information on streams and consumer groups
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of returned items for the subcommands CONSUMERS and GROUPS. The STREAM subcommand is O(log N) with N being the number of items in the stream.
     * - _since_: 5.0.0
     */
    xinfo(): Promise<unknown>;

    /**
     * Appends a new entry to a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     */
    xadd(key: string, id: string, field_value: Array<[string, string]>): Promise<string>;

    /**
     * Trims the stream to (approximately if '~' is passed) a certain size
     * - _group_: stream
     * - _complexity_: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
     * - _since_: 5.0.0
     */
    xtrim(key: string, strategy: string, approx: string, count: number): Promise<number>;

    /**
     * Trims the stream to (approximately if '~' is passed) a certain size
     * - _group_: stream
     * - _complexity_: O(N), with N being the number of evicted entries. Constant times are very small however, since entries are organized in macro nodes containing multiple entries that can be released with a single deallocation.
     * - _since_: 5.0.0
     */
    xtrim(key: string, strategy: string, count: number): Promise<number>;

    /**
     * Removes the specified entries from the stream. Returns the number of items actually deleted, that may be different from the number of IDs passed in case certain IDs do not exist.
     * - _group_: stream
     * - _complexity_: O(1) for each single item to delete in the stream, regardless of the stream size.
     * - _since_: 5.0.0
     */
    xdel(key: string, id: Array<string>): Promise<number>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     */
    xrange(key: string, start: string, end: string, count_count: [string, number]): Promise<Array<unknown>>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements being returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     */
    xrange(key: string, start: string, end: string): Promise<Array<unknown>>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     */
    xrevrange(key: string, end: string, start: string, count_count: [string, number]): Promise<Array<unknown>>;

    /**
     * Return a range of elements in a stream, with IDs matching the specified IDs interval, in reverse order (from greater to smaller IDs) compared to XRANGE
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).
     * - _since_: 5.0.0
     */
    xrevrange(key: string, end: string, start: string): Promise<Array<unknown>>;

    /**
     * Return the number of entires in a stream
     * - _group_: stream
     * - _complexity_: O(1)
     * - _since_: 5.0.0
     */
    xlen(key: string): Promise<number>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xread(
        count_count: [string, number],
        block_milliseconds: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<Array<unknown>>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xread(
        count_count: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<Array<unknown>>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xread(
        block_milliseconds: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<Array<unknown>>;

    /**
     * Return never seen elements in multiple streams, with IDs greater than the ones reported by the caller for each stream. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(N) with N being the number of elements being returned, it means that XREAD-ing with a fixed COUNT is O(1). Note that when the BLOCK option is used, XADD will pay O(M) time in order to serve the M clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xread(streams: string, key: Array<string>, id: Array<string>): Promise<Array<unknown>>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        setid_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        setid_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        setid_key_groupname_id_or: [string, [string, string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        setid_key_groupname_id_or: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        create_key_groupname_id_or: [string, [string, string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(create_key_groupname_id_or: [string, [string, string, string]]): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        setid_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        setid_key_groupname_id_or: [string, [string, string, string]],
        destroy_key_groupname: [string, [string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        setid_key_groupname_id_or: [string, [string, string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(setid_key_groupname_id_or: [string, [string, string, string]]): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(
        destroy_key_groupname: [string, [string, string]],
        delconsumer_key_groupname_consumername: [string, [string, string, string]]
    ): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(destroy_key_groupname: [string, [string, string]]): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(delconsumer_key_groupname_consumername: [string, [string, string, string]]): Promise<unknown>;

    /**
     * Create, destroy, and manage consumer groups.
     * - _group_: stream
     * - _complexity_: O(1) for all the subcommands, with the exception of the DESTROY subcommand which takes an additional O(M) time in order to delete the M entries inside the consumer group pending entries list (PEL).
     * - _since_: 5.0.0
     */
    xgroup(): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        count_count: [string, number],
        block_milliseconds: [string, number],
        noack: string,
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        count_count: [string, number],
        block_milliseconds: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        count_count: [string, number],
        noack: string,
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        count_count: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        block_milliseconds: [string, number],
        noack: string,
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        block_milliseconds: [string, number],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        noack: string,
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Return new entries from a stream using a consumer group, or access the history of the pending entries for a given consumer. Can block.
     * - _group_: stream
     * - _complexity_: For each stream mentioned: O(M) with M being the number of elements returned. If M is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1). On the other side when XREADGROUP blocks, XADD will pay the O(N) time in order to serve the N clients blocked on the stream getting new data.
     * - _since_: 5.0.0
     */
    xreadgroup(
        group_group_consumer: [string, [string, string]],
        streams: string,
        key: Array<string>,
        id: Array<string>
    ): Promise<unknown>;

    /**
     * Marks a pending message as correctly processed, effectively removing it from the pending entries list of the consumer group. Return value of the command is the number of messages successfully acknowledged, that is, the IDs we were actually able to resolve in the PEL.
     * - _group_: stream
     * - _complexity_: O(1) for each message ID processed.
     * - _since_: 5.0.0
     */
    xack(key: string, group: string, id: Array<string>): Promise<number>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        time_ms_unix_time: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        retrycount_count: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        retrycount_count: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        retrycount_count: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        retrycount_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        idle_ms: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        retrycount_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        time_ms_unix_time: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount_count: [string, number],
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount_count: [string, number],
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount_count: [string, number],
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        retrycount_count: [string, number]
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        force: unknown,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        force: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>,
        justid: unknown
    ): Promise<Array<unknown>>;

    /**
     * Changes (or acquires) ownership of a message in a consumer group, as if the message was delivered to the specified consumer.
     * - _group_: stream
     * - _complexity_: O(log N) with N being the number of messages in the PEL of the consumer group.
     * - _since_: 5.0.0
     */
    xclaim(
        key: string,
        group: string,
        consumer: string,
        min_idle_time: string,
        id: Array<string>
    ): Promise<Array<unknown>>;

    /**
     * Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.
     * - _since_: 5.0.0
     */
    xpending(
        key: string,
        group: string,
        start_end_count: [string, string, number],
        consumer: string
    ): Promise<Array<unknown>>;

    /**
     * Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.
     * - _since_: 5.0.0
     */
    xpending(key: string, group: string, start_end_count: [string, string, number]): Promise<Array<unknown>>;

    /**
     * Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.
     * - _since_: 5.0.0
     */
    xpending(key: string, group: string, consumer: string): Promise<Array<unknown>>;

    /**
     * Return information and entries from a stream consumer group pending entries list, that are messages fetched but never acknowledged.
     * - _group_: stream
     * - _complexity_: O(N) with N being the number of elements returned, so asking for a small fixed number of entries per call is O(1). When the command returns just the summary it runs in O(1) time assuming the list of consumers is small, otherwise there is additional O(N) time needed to iterate every consumer.
     * - _since_: 5.0.0
     */
    xpending(key: string, group: string): Promise<Array<unknown>>;

    /**
     * Return a human readable latency analysis report.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyDoctor(): Promise<unknown>;

    /**
     * Return a latency graph for the event.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyGraph(event: string): Promise<unknown>;

    /**
     * Return timestamp-latency samples for the event.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyHistory(event: string): Promise<unknown>;

    /**
     * Return the latest latency samples for all events.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyLatest(): Promise<unknown>;

    /**
     * Reset latency data for one or more events.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyReset(event: string): Promise<unknown>;

    /**
     * Reset latency data for one or more events.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyReset(): Promise<unknown>;

    /**
     * Show helpful text about the different subcommands.
     * - _group_: server
     * - _complexity_: undefined
     * - _since_: 2.8.13
     */
    latencyHelp(): Promise<unknown>;
}
