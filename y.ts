import { Client } from "./x";

export const f = async (client: Client) => {
    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/readme.md 0
    // set mykey foo
    await client.set("mykey", "foo");

    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/readme.md 0
    // get mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/set-xx-nx.md 0
    // set foo bar1 XX
    await client.set("foo", "bar1", "XX");

    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/set-xx-nx.md 0
    // set foo bar2 XX
    await client.set("foo", "bar2", "XX");

    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/set-xx-nx.md 0
    // set bar foo1 NX
    await client.set("bar", "foo1", "NX");

    // C:/Users/mkale/src/handy-redis/scripts/more-cli-examples/set-xx-nx.md 0
    // set bar foo2 NX
    await client.set("bar", "foo2", "NX");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 0
    // EXISTS mykey
    await client.exists("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 0
    // APPEND mykey "Hello"
    await client.append("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 0
    // APPEND mykey " World"
    await client.append("mykey", " World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 1
    // APPEND ts "0043"
    await client.append("ts", "0043");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 1
    // APPEND ts "0035"
    await client.append("ts", "0035");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 1
    // GETRANGE ts 0 3
    await client.getrange("ts", 0, 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/append.md 1
    // GETRANGE ts 4 7
    await client.getrange("ts", 4, 7);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitcount.md 0
    // SET mykey "foobar"
    await client.set("mykey", "foobar");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitcount.md 0
    // BITCOUNT mykey
    await client.bitcount("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitcount.md 0
    // BITCOUNT mykey 0 0
    await client.bitcount("mykey", [0, 0]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitcount.md 0
    // BITCOUNT mykey 1 1
    await client.bitcount("mykey", [1, 1]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitop.md 0
    // SET key1 "foobar"
    await client.set("key1", "foobar");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitop.md 0
    // SET key2 "abcdef"
    await client.set("key2", "abcdef");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitop.md 0
    // BITOP AND dest key1 key2
    await client.bitop("AND", "dest", "key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitop.md 0
    // GET dest
    await client.get("dest");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // SET mykey "\xff\xf0\x00"
    await client.set("mykey", "\\xff\\xf0\\x00");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // BITPOS mykey 0
    await client.bitpos("mykey", 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // SET mykey "\x00\xff\xf0"
    await client.set("mykey", "\\x00\\xff\\xf0");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // BITPOS mykey 1 0
    await client.bitpos("mykey", 1, 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // BITPOS mykey 1 2
    await client.bitpos("mykey", 1, 2);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // set mykey "\x00\x00\x00"
    await client.set("mykey", "\\x00\\x00\\x00");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/bitpos.md 0
    // BITPOS mykey 1
    await client.bitpos("mykey", 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/client-id.md 0
    // CLIENT ID
    // Error decoding:
    // CLIENT not found
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-count.md 0
    // COMMAND COUNT
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: COUNT
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-getkeys.md 0
    // COMMAND GETKEYS MSET a b c d e f
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,MSET,a,b,c,d,e,f
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-getkeys.md 0
    // COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,EVAL,not consulted,3,key1,key2,key3,arg1,arg2,arg3,argN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-getkeys.md 0
    // COMMAND GETKEYS SORT mylist ALPHA STORE outlist
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,SORT,mylist,ALPHA,STORE,outlist
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-info.md 0
    // COMMAND INFO get set eval
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,get,set,eval
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command-info.md 0
    // COMMAND INFO foo evalsha config bar
    // Error decoding:
    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,foo,evalsha,config,bar
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/command.md 0
    // COMMAND
    await client.command();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decr.md 0
    // SET mykey "10"
    await client.set("mykey", "10");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decr.md 0
    // DECR mykey
    await client.decr("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decr.md 0
    // SET mykey "234293482390480948029348230948"
    await client.set("mykey", "234293482390480948029348230948");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decr.md 0
    // DECR mykey
    await client.decr("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decrby.md 0
    // SET mykey "10"
    await client.set("mykey", "10");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/decrby.md 0
    // DECRBY mykey 3
    await client.decrby("mykey", 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/del.md 0
    // SET key1 "Hello"
    await client.set("key1", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/del.md 0
    // SET key2 "World"
    await client.set("key2", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/del.md 0
    // DEL key1 key2 key3
    await client.del("key1", "key2", "key3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/dump.md 0
    // SET mykey 10
    await client.set("mykey", "10");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/dump.md 0
    // DUMP mykey
    await client.dump("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/echo.md 0
    // ECHO "Hello World!"
    await client.echo("Hello World!");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/exists.md 0
    // SET key1 "Hello"
    await client.set("key1", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/exists.md 0
    // EXISTS key1
    await client.exists("key1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/exists.md 0
    // EXISTS nosuchkey
    await client.exists("nosuchkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/exists.md 0
    // SET key2 "World"
    await client.set("key2", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/exists.md 0
    // EXISTS key1 key2 nosuchkey
    await client.exists("key1", "key2", "nosuchkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expire.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expire.md 0
    // EXPIRE mykey 10
    await client.expire("mykey", 10);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expire.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expire.md 0
    // SET mykey "Hello World"
    await client.set("mykey", "Hello World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expire.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expireat.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expireat.md 0
    // EXISTS mykey
    await client.exists("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expireat.md 0
    // EXPIREAT mykey 1293840000
    // Error decoding:
    // decoding EXPIREAT overload 0 (key,timestamp): { name: 'key', schema: { type: 'string' } },{ name: 'timestamp', schema: {} }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [1293840000], target args remainin count: 1
    // Not smart enough to deal with { name: 'timestamp', schema: {} } yet
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/expireat.md 0
    // EXISTS mykey
    await client.exists("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoadd.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoadd.md 0
    // GEODIST Sicily Palermo Catania
    await client.geodist("Sicily", "Palermo", "Catania");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoadd.md 0
    // GEORADIUS Sicily 15 37 100 km
    await client.georadius("Sicily", 15, 37, 100, "km");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoadd.md 0
    // GEORADIUS Sicily 15 37 200 km
    await client.georadius("Sicily", 15, 37, 200, "km");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodecode.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodecode.md 0
    // ZSCORE Sicily "Palermo"
    await client.zscore("Sicily", "Palermo");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodecode.md 0
    // GEODECODE 3479099956230698
    // Error decoding:
    // GEODECODE not found
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodist.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodist.md 0
    // GEODIST Sicily Palermo Catania
    await client.geodist("Sicily", "Palermo", "Catania");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodist.md 0
    // GEODIST Sicily Palermo Catania km
    await client.geodist("Sicily", "Palermo", "Catania", "km");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodist.md 0
    // GEODIST Sicily Palermo Catania mi
    await client.geodist("Sicily", "Palermo", "Catania", "mi");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geodist.md 0
    // GEODIST Sicily Foo Bar
    await client.geodist("Sicily", "Foo", "Bar");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoencode.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoencode.md 0
    // ZSCORE Sicily "Palermo"
    await client.zscore("Sicily", "Palermo");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geoencode.md 0
    // GEOENCODE 13.361389 38.115556 100 km
    // Error decoding:
    // GEOENCODE not found
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geohash.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geohash.md 0
    // GEOHASH Sicily Palermo Catania
    await client.geohash("Sicily", "Palermo", "Catania");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geopos.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/geopos.md 0
    // GEOPOS Sicily Palermo Catania NonExisting
    await client.geopos("Sicily", "Palermo", "Catania", "NonExisting");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadius.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadius.md 0
    // GEORADIUS Sicily 15 37 200 km WITHDIST
    await client.georadius("Sicily", 15, 37, 200, "km", "WITHDIST");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadius.md 0
    // GEORADIUS Sicily 15 37 200 km WITHCOORD
    await client.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadius.md 0
    // GEORADIUS Sicily 15 37 200 km WITHCOORD WITHDIST
    await client.georadius("Sicily", 15, 37, 200, "km", "WITHCOORD", "WITHDIST");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadiusbymember.md 0
    // GEOADD Sicily 13.583333 37.316667 "Agrigento"
    await client.geoadd("Sicily", [13.583333, 37.316667, "Agrigento"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadiusbymember.md 0
    // GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
    await client.geoadd("Sicily", [13.361389, 38.115556, "Palermo"], [15.087269, 37.502669, "Catania"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/georadiusbymember.md 0
    // GEORADIUSBYMEMBER Sicily Agrigento 100 km
    await client.georadiusbymember("Sicily", "Agrigento", 100, "km");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/get.md 0
    // GET nonexisting
    await client.get("nonexisting");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/get.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/get.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getbit.md 0
    // SETBIT mykey 7 1
    await client.setbit("mykey", 7, 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getbit.md 0
    // GETBIT mykey 0
    await client.getbit("mykey", 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getbit.md 0
    // GETBIT mykey 7
    await client.getbit("mykey", 7);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getbit.md 0
    // GETBIT mykey 100
    await client.getbit("mykey", 100);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getrange.md 0
    // SET mykey "This is a string"
    await client.set("mykey", "This is a string");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getrange.md 0
    // GETRANGE mykey 0 3
    await client.getrange("mykey", 0, 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getrange.md 0
    // GETRANGE mykey -3 -1
    await client.getrange("mykey", -3, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getrange.md 0
    // GETRANGE mykey 0 -1
    await client.getrange("mykey", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getrange.md 0
    // GETRANGE mykey 10 100
    await client.getrange("mykey", 10, 100);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 0
    // INCR mycounter
    await client.incr("mycounter");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 0
    // GETSET mycounter "0"
    await client.getset("mycounter", "0");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 0
    // GET mycounter
    await client.get("mycounter");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 1
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 1
    // GETSET mykey "World"
    await client.getset("mykey", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/getset.md 1
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hdel.md 0
    // HSET myhash field1 "foo"
    await client.hset("myhash", ["field1", "foo"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hdel.md 0
    // HDEL myhash field1
    await client.hdel("myhash", "field1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hdel.md 0
    // HDEL myhash field2
    await client.hdel("myhash", "field2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hexists.md 0
    // HSET myhash field1 "foo"
    await client.hset("myhash", ["field1", "foo"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hexists.md 0
    // HEXISTS myhash field1
    await client.hexists("myhash", "field1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hexists.md 0
    // HEXISTS myhash field2
    await client.hexists("myhash", "field2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hget.md 0
    // HSET myhash field1 "foo"
    await client.hset("myhash", ["field1", "foo"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hget.md 0
    // HGET myhash field1
    await client.hget("myhash", "field1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hget.md 0
    // HGET myhash field2
    await client.hget("myhash", "field2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hgetall.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hgetall.md 0
    // HSET myhash field2 "World"
    await client.hset("myhash", ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hgetall.md 0
    // HGETALL myhash
    await client.hgetall("myhash");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrby.md 0
    // HSET myhash field 5
    await client.hset("myhash", ["field", "5"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrby.md 0
    // HINCRBY myhash field 1
    await client.hincrby("myhash", "field", 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrby.md 0
    // HINCRBY myhash field -1
    await client.hincrby("myhash", "field", -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrby.md 0
    // HINCRBY myhash field -10
    await client.hincrby("myhash", "field", -10);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrbyfloat.md 0
    // HSET mykey field 10.50
    await client.hset("mykey", ["field", "10.50"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrbyfloat.md 0
    // HINCRBYFLOAT mykey field 0.1
    await client.hincrbyfloat("mykey", "field", 0.1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrbyfloat.md 0
    // HINCRBYFLOAT mykey field -5
    await client.hincrbyfloat("mykey", "field", -5);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrbyfloat.md 0
    // HSET mykey field 5.0e3
    await client.hset("mykey", ["field", "5.0e3"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hincrbyfloat.md 0
    // HINCRBYFLOAT mykey field 2.0e2
    // Error decoding:
    // decoding HINCRBYFLOAT overload 0 (key,field,increment): { name: 'key', schema: { type: 'string' } },{ name: 'field', schema: { type: 'string' } },{ name: 'increment', schema: { type: 'number' } }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [field,2.0e2], target args remainin count: 2
    // field successfully decoded as field (string). Decoded value field. Tokens remaining [2.0e2], target args remainin count: 1
    // 2.0e2 parsed into a bad number 200
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hkeys.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hkeys.md 0
    // HSET myhash field2 "World"
    await client.hset("myhash", ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hkeys.md 0
    // HKEYS myhash
    await client.hkeys("myhash");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hlen.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hlen.md 0
    // HSET myhash field2 "World"
    await client.hset("myhash", ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hlen.md 0
    // HLEN myhash
    await client.hlen("myhash");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmget.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmget.md 0
    // HSET myhash field2 "World"
    await client.hset("myhash", ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmget.md 0
    // HMGET myhash field1 field2 nofield
    await client.hmget("myhash", "field1", "field2", "nofield");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmset.md 0
    // HMSET myhash field1 "Hello" field2 "World"
    await client.hmset("myhash", ["field1", "Hello"], ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmset.md 0
    // HGET myhash field1
    await client.hget("myhash", "field1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hmset.md 0
    // HGET myhash field2
    await client.hget("myhash", "field2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hset.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hset.md 0
    // HGET myhash field1
    await client.hget("myhash", "field1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hsetnx.md 0
    // HSETNX myhash field "Hello"
    await client.hsetnx("myhash", "field", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hsetnx.md 0
    // HSETNX myhash field "World"
    await client.hsetnx("myhash", "field", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hsetnx.md 0
    // HGET myhash field
    await client.hget("myhash", "field");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hstrlen.md 0
    // HMSET myhash f1 HelloWorld f2 99 f3 -256
    await client.hmset("myhash", ["f1", "HelloWorld"], ["f2", "99"], ["f3", "-256"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hstrlen.md 0
    // HSTRLEN myhash f1
    await client.hstrlen("myhash", "f1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hstrlen.md 0
    // HSTRLEN myhash f2
    await client.hstrlen("myhash", "f2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hstrlen.md 0
    // HSTRLEN myhash f3
    await client.hstrlen("myhash", "f3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hvals.md 0
    // HSET myhash field1 "Hello"
    await client.hset("myhash", ["field1", "Hello"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hvals.md 0
    // HSET myhash field2 "World"
    await client.hset("myhash", ["field2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/hvals.md 0
    // HVALS myhash
    await client.hvals("myhash");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incr.md 0
    // SET mykey "10"
    await client.set("mykey", "10");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incr.md 0
    // INCR mykey
    await client.incr("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incr.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrby.md 0
    // SET mykey "10"
    await client.set("mykey", "10");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrby.md 0
    // INCRBY mykey 5
    await client.incrby("mykey", 5);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrbyfloat.md 0
    // SET mykey 10.50
    await client.set("mykey", "10.50");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrbyfloat.md 0
    // INCRBYFLOAT mykey 0.1
    await client.incrbyfloat("mykey", 0.1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrbyfloat.md 0
    // INCRBYFLOAT mykey -5
    await client.incrbyfloat("mykey", -5);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrbyfloat.md 0
    // SET mykey 5.0e3
    await client.set("mykey", "5.0e3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/incrbyfloat.md 0
    // INCRBYFLOAT mykey 2.0e2
    // Error decoding:
    // decoding INCRBYFLOAT overload 0 (key,increment): { name: 'key', schema: { type: 'string' } },{ name: 'increment', schema: { type: 'number' } }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [2.0e2], target args remainin count: 1
    // 2.0e2 parsed into a bad number 200
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/info.md 0
    // INFO
    await client.info();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/keys.md 0
    // MSET firstname Jack lastname Stuntman age 35
    await client.mset(["firstname", "Jack"], ["lastname", "Stuntman"], ["age", "35"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/keys.md 0
    // KEYS *name*
    await client.keys("*name*");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/keys.md 0
    // KEYS a??
    await client.keys("a??");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/keys.md 0
    // KEYS *
    await client.keys("*");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lindex.md 0
    // LPUSH mylist "World"
    await client.lpush("mylist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lindex.md 0
    // LPUSH mylist "Hello"
    await client.lpush("mylist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lindex.md 0
    // LINDEX mylist 0
    await client.lindex("mylist", 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lindex.md 0
    // LINDEX mylist -1
    await client.lindex("mylist", -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lindex.md 0
    // LINDEX mylist 3
    await client.lindex("mylist", 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/linsert.md 0
    // RPUSH mylist "Hello"
    await client.rpush("mylist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/linsert.md 0
    // RPUSH mylist "World"
    await client.rpush("mylist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/linsert.md 0
    // LINSERT mylist BEFORE "World" "There"
    await client.linsert("mylist", "BEFORE", "World", "There");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/linsert.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/llen.md 0
    // LPUSH mylist "World"
    await client.lpush("mylist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/llen.md 0
    // LPUSH mylist "Hello"
    await client.lpush("mylist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/llen.md 0
    // LLEN mylist
    await client.llen("mylist");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpop.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpop.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpop.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpop.md 0
    // LPOP mylist
    await client.lpop("mylist");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpop.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpush.md 0
    // LPUSH mylist "world"
    await client.lpush("mylist", "world");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpush.md 0
    // LPUSH mylist "hello"
    await client.lpush("mylist", "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpush.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpushx.md 0
    // LPUSH mylist "World"
    await client.lpush("mylist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpushx.md 0
    // LPUSHX mylist "Hello"
    await client.lpushx("mylist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpushx.md 0
    // LPUSHX myotherlist "Hello"
    await client.lpushx("myotherlist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpushx.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lpushx.md 0
    // LRANGE myotherlist 0 -1
    await client.lrange("myotherlist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // LRANGE mylist 0 0
    await client.lrange("mylist", 0, 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // LRANGE mylist -3 2
    await client.lrange("mylist", -3, 2);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // LRANGE mylist -100 100
    await client.lrange("mylist", -100, 100);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrange.md 0
    // LRANGE mylist 5 10
    await client.lrange("mylist", 5, 10);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // RPUSH mylist "hello"
    await client.rpush("mylist", "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // RPUSH mylist "hello"
    await client.rpush("mylist", "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // RPUSH mylist "foo"
    await client.rpush("mylist", "foo");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // RPUSH mylist "hello"
    await client.rpush("mylist", "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // LREM mylist -2 "hello"
    await client.lrem("mylist", -2, "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lrem.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // LSET mylist 0 "four"
    await client.lset("mylist", 0, "four");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // LSET mylist -2 "five"
    await client.lset("mylist", -2, "five");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/lset.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ltrim.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ltrim.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ltrim.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ltrim.md 0
    // LTRIM mylist 1 -1
    await client.ltrim("mylist", 1, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ltrim.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mget.md 0
    // SET key1 "Hello"
    await client.set("key1", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mget.md 0
    // SET key2 "World"
    await client.set("key2", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mget.md 0
    // MGET key1 key2 nonexisting
    await client.mget("key1", "key2", "nonexisting");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mset.md 0
    // MSET key1 "Hello" key2 "World"
    await client.mset(["key1", "Hello"], ["key2", "World"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mset.md 0
    // GET key1
    await client.get("key1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/mset.md 0
    // GET key2
    await client.get("key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/msetnx.md 0
    // MSETNX key1 "Hello" key2 "there"
    await client.msetnx(["key1", "Hello"], ["key2", "there"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/msetnx.md 0
    // MSETNX key2 "new" key3 "world"
    await client.msetnx(["key2", "new"], ["key3", "world"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/msetnx.md 0
    // MGET key1 key2 key3
    await client.mget("key1", "key2", "key3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/persist.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/persist.md 0
    // EXPIRE mykey 10
    await client.expire("mykey", 10);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/persist.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/persist.md 0
    // PERSIST mykey
    await client.persist("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/persist.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpire.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpire.md 0
    // PEXPIRE mykey 1500
    await client.pexpire("mykey", 1500);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpire.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpire.md 0
    // PTTL mykey
    await client.pttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpireat.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpireat.md 0
    // PEXPIREAT mykey 1555555555005
    // Error decoding:
    // decoding PEXPIREAT overload 0 (key,milliseconds-timestamp): { name: 'key', schema: { type: 'string' } },{ name: 'milliseconds-timestamp', schema: {} }
    // mykey successfully decoded as key (string). Decoded value mykey. Tokens remaining [1555555555005], target args remainin count: 1
    // Not smart enough to deal with { name: 'milliseconds-timestamp', schema: {} } yet
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpireat.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pexpireat.md 0
    // PTTL mykey
    await client.pttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfadd.md 0
    // PFADD hll a b c d e f g
    await client.pfadd("hll", "a", "b", "c", "d", "e", "f", "g");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfadd.md 0
    // PFCOUNT hll
    await client.pfcount("hll");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFADD hll foo bar zap
    await client.pfadd("hll", "foo", "bar", "zap");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFADD hll zap zap zap
    await client.pfadd("hll", "zap", "zap", "zap");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFADD hll foo bar
    await client.pfadd("hll", "foo", "bar");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFCOUNT hll
    await client.pfcount("hll");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFADD some-other-hll 1 2 3
    await client.pfadd("some-other-hll", "1", "2", "3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfcount.md 0
    // PFCOUNT hll some-other-hll
    await client.pfcount("hll", "some-other-hll");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfmerge.md 0
    // PFADD hll1 foo bar zap a
    await client.pfadd("hll1", "foo", "bar", "zap", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfmerge.md 0
    // PFADD hll2 a b c foo
    await client.pfadd("hll2", "a", "b", "c", "foo");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfmerge.md 0
    // PFMERGE hll3 hll1 hll2
    await client.pfmerge("hll3", "hll1", "hll2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pfmerge.md 0
    // PFCOUNT hll3
    await client.pfcount("hll3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ping.md 0
    // PING
    await client.ping();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ping.md 0
    // PING "hello world"
    await client.ping("hello world");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/psetex.md 0
    // PSETEX mykey 1000 "Hello"
    await client.psetex("mykey", 1000, "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/psetex.md 0
    // PTTL mykey
    await client.pttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/psetex.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pttl.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pttl.md 0
    // EXPIRE mykey 1
    await client.expire("mykey", 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/pttl.md 0
    // PTTL mykey
    await client.pttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rename.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rename.md 0
    // RENAME mykey myotherkey
    await client.rename("mykey", "myotherkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rename.md 0
    // GET myotherkey
    await client.get("myotherkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/renamenx.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/renamenx.md 0
    // SET myotherkey "World"
    await client.set("myotherkey", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/renamenx.md 0
    // RENAMENX mykey myotherkey
    await client.renamenx("mykey", "myotherkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/renamenx.md 0
    // GET myotherkey
    await client.get("myotherkey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/role.md 0
    // ROLE
    await client.role();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpop.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpop.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpop.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpop.md 0
    // RPOP mylist
    await client.rpop("mylist");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpop.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // RPUSH mylist "one"
    await client.rpush("mylist", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // RPUSH mylist "two"
    await client.rpush("mylist", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // RPUSH mylist "three"
    await client.rpush("mylist", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // RPOPLPUSH mylist myotherlist
    await client.rpoplpush("mylist", "myotherlist");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpoplpush.md 0
    // LRANGE myotherlist 0 -1
    await client.lrange("myotherlist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpush.md 0
    // RPUSH mylist "hello"
    await client.rpush("mylist", "hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpush.md 0
    // RPUSH mylist "world"
    await client.rpush("mylist", "world");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpush.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpushx.md 0
    // RPUSH mylist "Hello"
    await client.rpush("mylist", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpushx.md 0
    // RPUSHX mylist "World"
    await client.rpushx("mylist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpushx.md 0
    // RPUSHX myotherlist "World"
    await client.rpushx("myotherlist", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpushx.md 0
    // LRANGE mylist 0 -1
    await client.lrange("mylist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/rpushx.md 0
    // LRANGE myotherlist 0 -1
    await client.lrange("myotherlist", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sadd.md 0
    // SADD myset "Hello"
    await client.sadd("myset", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sadd.md 0
    // SADD myset "World"
    await client.sadd("myset", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sadd.md 0
    // SADD myset "World"
    await client.sadd("myset", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sadd.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/scard.md 0
    // SADD myset "Hello"
    await client.sadd("myset", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/scard.md 0
    // SADD myset "World"
    await client.sadd("myset", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/scard.md 0
    // SCARD myset
    await client.scard("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiff.md 0
    // SDIFF key1 key2
    await client.sdiff("key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SDIFFSTORE key key1 key2
    await client.sdiffstore("key", "key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sdiffstore.md 0
    // SMEMBERS key
    await client.smembers("key");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/set.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/set.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/set.md 0
    // SET anotherkey "will expire in a minute" EX 60
    await client.set("anotherkey", "will expire in a minute", ["EX", 60]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setbit.md 0
    // SETBIT mykey 7 1
    await client.setbit("mykey", 7, 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setbit.md 0
    // SETBIT mykey 7 0
    await client.setbit("mykey", 7, 0);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setbit.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setex.md 0
    // SETEX mykey 10 "Hello"
    await client.setex("mykey", 10, "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setex.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setex.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setnx.md 0
    // SETNX mykey "Hello"
    await client.setnx("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setnx.md 0
    // SETNX mykey "World"
    await client.setnx("mykey", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setnx.md 0
    // GET mykey
    await client.get("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setrange.md 0
    // SET key1 "Hello World"
    await client.set("key1", "Hello World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setrange.md 0
    // SETRANGE key1 6 "Redis"
    await client.setrange("key1", 6, "Redis");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setrange.md 0
    // GET key1
    await client.get("key1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setrange.md 1
    // SETRANGE key2 6 "Redis"
    await client.setrange("key2", 6, "Redis");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/setrange.md 1
    // GET key2
    await client.get("key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinter.md 0
    // SINTER key1 key2
    await client.sinter("key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SINTERSTORE key key1 key2
    await client.sinterstore("key", "key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sinterstore.md 0
    // SMEMBERS key
    await client.smembers("key");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sismember.md 0
    // SADD myset "one"
    await client.sadd("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sismember.md 0
    // SISMEMBER myset "one"
    await client.sismember("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sismember.md 0
    // SISMEMBER myset "two"
    await client.sismember("myset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smembers.md 0
    // SADD myset "Hello"
    await client.sadd("myset", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smembers.md 0
    // SADD myset "World"
    await client.sadd("myset", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smembers.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SADD myset "one"
    await client.sadd("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SADD myset "two"
    await client.sadd("myset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SADD myotherset "three"
    await client.sadd("myotherset", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SMOVE myset myotherset "two"
    await client.smove("myset", "myotherset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/smove.md 0
    // SMEMBERS myotherset
    await client.smembers("myotherset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SADD myset "one"
    await client.sadd("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SADD myset "two"
    await client.sadd("myset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SADD myset "three"
    await client.sadd("myset", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SPOP myset
    await client.spop("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SADD myset "four"
    await client.sadd("myset", "four");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SADD myset "five"
    await client.sadd("myset", "five");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SPOP myset 3
    await client.spop("myset", 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/spop.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srandmember.md 0
    // SADD myset one two three
    await client.sadd("myset", "one", "two", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srandmember.md 0
    // SRANDMEMBER myset
    await client.srandmember("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srandmember.md 0
    // SRANDMEMBER myset 2
    await client.srandmember("myset", 2);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srandmember.md 0
    // SRANDMEMBER myset -5
    await client.srandmember("myset", -5);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SADD myset "one"
    await client.sadd("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SADD myset "two"
    await client.sadd("myset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SADD myset "three"
    await client.sadd("myset", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SREM myset "one"
    await client.srem("myset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SREM myset "four"
    await client.srem("myset", "four");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/srem.md 0
    // SMEMBERS myset
    await client.smembers("myset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/strlen.md 0
    // SET mykey "Hello world"
    await client.set("mykey", "Hello world");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/strlen.md 0
    // STRLEN mykey
    await client.strlen("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/strlen.md 0
    // STRLEN nonexisting
    await client.strlen("nonexisting");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunion.md 0
    // SUNION key1 key2
    await client.sunion("key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key1 "a"
    await client.sadd("key1", "a");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key1 "b"
    await client.sadd("key1", "b");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key1 "c"
    await client.sadd("key1", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key2 "c"
    await client.sadd("key2", "c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key2 "d"
    await client.sadd("key2", "d");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SADD key2 "e"
    await client.sadd("key2", "e");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SUNIONSTORE key key1 key2
    await client.sunionstore("key", "key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/sunionstore.md 0
    // SMEMBERS key
    await client.smembers("key");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/time.md 0
    // TIME
    await client.time();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/time.md 0
    // TIME
    await client.time();

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/touch.md 0
    // SET key1 "Hello"
    await client.set("key1", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/touch.md 0
    // SET key2 "World"
    await client.set("key2", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/touch.md 0
    // TOUCH key1 key2
    await client.touch("key1", "key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ttl.md 0
    // SET mykey "Hello"
    await client.set("mykey", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ttl.md 0
    // EXPIRE mykey 10
    await client.expire("mykey", 10);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/ttl.md 0
    // TTL mykey
    await client.ttl("mykey");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // SET key1 "value"
    await client.set("key1", "value");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // LPUSH key2 "value"
    await client.lpush("key2", "value");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // SADD key3 "value"
    await client.sadd("key3", "value");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // TYPE key1
    await client.type("key1");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // TYPE key2
    await client.type("key2");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/type.md 0
    // TYPE key3
    await client.type("key3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/unlink.md 0
    // SET key1 "Hello"
    await client.set("key1", "Hello");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/unlink.md 0
    // SET key2 "World"
    await client.set("key2", "World");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/unlink.md 0
    // UNLINK key1 key2 key3
    await client.unlink("key1", "key2", "key3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xack.md 0
    // XACK mystream mygroup 1526569495631-0
    await client.xack("mystream", "mygroup", "1526569495631-0");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xadd.md 0
    // XADD mystream * name Sara surname OConnor
    await client.xadd("mystream", "*", ["name", "Sara"], ["surname", "OConnor"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xadd.md 0
    // XADD mystream * field1 value1 field2 value2 field3 value3
    await client.xadd("mystream", "*", ["field1", "value1"], ["field2", "value2"], ["field3", "value3"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xadd.md 0
    // XLEN mystream
    await client.xlen("mystream");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xadd.md 0
    // XRANGE mystream - +
    await client.xrange("mystream", "-", "+");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xlen.md 0
    // XADD mystream * item 1
    await client.xadd("mystream", "*", ["item", "1"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xlen.md 0
    // XADD mystream * item 2
    await client.xadd("mystream", "*", ["item", "2"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xlen.md 0
    // XADD mystream * item 3
    await client.xadd("mystream", "*", ["item", "3"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xlen.md 0
    // XLEN mystream
    await client.xlen("mystream");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XADD writers * name Virginia surname Woolf
    await client.xadd("writers", "*", ["name", "Virginia"], ["surname", "Woolf"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XADD writers * name Jane surname Austen
    await client.xadd("writers", "*", ["name", "Jane"], ["surname", "Austen"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XADD writers * name Toni surname Morris
    await client.xadd("writers", "*", ["name", "Toni"], ["surname", "Morris"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XADD writers * name Agatha surname Christie
    await client.xadd("writers", "*", ["name", "Agatha"], ["surname", "Christie"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XADD writers * name Ngozi surname Adichie
    await client.xadd("writers", "*", ["name", "Ngozi"], ["surname", "Adichie"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XLEN writers
    await client.xlen("writers");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrange.md 0
    // XRANGE writers - + COUNT 2
    await client.xrange("writers", "-", "+", ["COUNT", 2]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XADD writers * name Virginia surname Woolf
    await client.xadd("writers", "*", ["name", "Virginia"], ["surname", "Woolf"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XADD writers * name Jane surname Austen
    await client.xadd("writers", "*", ["name", "Jane"], ["surname", "Austen"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XADD writers * name Toni surname Morris
    await client.xadd("writers", "*", ["name", "Toni"], ["surname", "Morris"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XADD writers * name Agatha surname Christie
    await client.xadd("writers", "*", ["name", "Agatha"], ["surname", "Christie"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XADD writers * name Ngozi surname Adichie
    await client.xadd("writers", "*", ["name", "Ngozi"], ["surname", "Adichie"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XLEN writers
    await client.xlen("writers");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xrevrange.md 0
    // XREVRANGE writers + - COUNT 1
    await client.xrevrange("writers", "+", "-", ["COUNT", 1]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xtrim.md 0
    // XADD mystream * field1 A field2 B field3 C field4 D
    await client.xadd("mystream", "*", ["field1", "A"], ["field2", "B"], ["field3", "C"], ["field4", "D"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xtrim.md 0
    // XTRIM mystream MAXLEN 2
    await client.xtrim("mystream", "MAXLEN", 2);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/xtrim.md 0
    // XRANGE mystream - +
    await client.xrange("mystream", "-", "+");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zadd.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zadd.md 0
    // ZADD myzset 1 "uno"
    await client.zadd("myzset", [1, "uno"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zadd.md 0
    // ZADD myzset 2 "two" 3 "three"
    await client.zadd("myzset", [2, "two"], [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zadd.md 0
    // ZRANGE myzset 0 -1 WITHSCORES
    await client.zrange("myzset", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcard.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcard.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcard.md 0
    // ZCARD myzset
    await client.zcard("myzset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcount.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcount.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcount.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcount.md 0
    // ZCOUNT myzset -inf +inf
    // Error decoding:
    // decoding ZCOUNT overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 2
    // -inf parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zcount.md 0
    // ZCOUNT myzset (1 3
    // Error decoding:
    // decoding ZCOUNT overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,3], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zincrby.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zincrby.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zincrby.md 0
    // ZINCRBY myzset 2 "one"
    await client.zincrby("myzset", 2, "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zincrby.md 0
    // ZRANGE myzset 0 -1 WITHSCORES
    await client.zrange("myzset", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZADD zset1 1 "one"
    await client.zadd("zset1", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZADD zset1 2 "two"
    await client.zadd("zset1", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZADD zset2 1 "one"
    await client.zadd("zset2", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZADD zset2 2 "two"
    await client.zadd("zset2", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZADD zset2 3 "three"
    await client.zadd("zset2", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZINTERSTORE out 2 zset1 zset2 WEIGHTS 2 3
    await client.zinterstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zinterstore.md 0
    // ZRANGE out 0 -1 WITHSCORES
    await client.zrange("out", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zlexcount.md 0
    // ZADD myzset 0 a 0 b 0 c 0 d 0 e
    await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zlexcount.md 0
    // ZADD myzset 0 f 0 g
    await client.zadd("myzset", [0, "f"], [0, "g"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zlexcount.md 0
    // ZLEXCOUNT myzset - +
    await client.zlexcount("myzset", "-", "+");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zlexcount.md 0
    // ZLEXCOUNT myzset [b [f
    await client.zlexcount("myzset", "[b", "[f");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmax.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmax.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmax.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmax.md 0
    // ZPOPMAX myzset
    await client.zpopmax("myzset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmin.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmin.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmin.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zpopmin.md 0
    // ZPOPMIN myzset
    await client.zpopmin("myzset");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZRANGE myzset 0 -1
    await client.zrange("myzset", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZRANGE myzset 2 3
    await client.zrange("myzset", 2, 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 0
    // ZRANGE myzset -2 -1
    await client.zrange("myzset", -2, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrange.md 1
    // ZRANGE myzset 0 1 WITHSCORES
    await client.zrange("myzset", 0, 1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebylex.md 0
    // ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
    await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebylex.md 0
    // ZRANGEBYLEX myzset - [c
    await client.zrangebylex("myzset", "-", "[c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebylex.md 0
    // ZRANGEBYLEX myzset - (c
    await client.zrangebylex("myzset", "-", "(c");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebylex.md 0
    // ZRANGEBYLEX myzset [aaa (g
    await client.zrangebylex("myzset", "[aaa", "(g");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZRANGEBYSCORE myzset -inf +inf
    // Error decoding:
    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 2
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 3
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 3
    // -inf parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,+inf], target args remainin count: 4
    // -inf parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZRANGEBYSCORE myzset 1 2
    await client.zrangebyscore("myzset", 1, 2);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZRANGEBYSCORE myzset (1 2
    // Error decoding:
    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,2], target args remainin count: 4
    // (1 parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrangebyscore.md 0
    // ZRANGEBYSCORE myzset (1 (2
    // Error decoding:
    // decoding ZRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 1 (key,min,max,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 2 (key,min,max,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZRANGEBYSCORE overload 3 (key,min,max,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(1,(2], target args remainin count: 4
    // (1 parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrank.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrank.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrank.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrank.md 0
    // ZRANK myzset "three"
    await client.zrank("myzset", "three");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrank.md 0
    // ZRANK myzset "four"
    await client.zrank("myzset", "four");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrem.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrem.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrem.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrem.md 0
    // ZREM myzset "two"
    await client.zrem("myzset", "two");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrem.md 0
    // ZRANGE myzset 0 -1 WITHSCORES
    await client.zrange("myzset", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebylex.md 0
    // ZADD myzset 0 aaaa 0 b 0 c 0 d 0 e
    await client.zadd("myzset", [0, "aaaa"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebylex.md 0
    // ZADD myzset 0 foo 0 zap 0 zip 0 ALPHA 0 alpha
    await client.zadd("myzset", [0, "foo"], [0, "zap"], [0, "zip"], [0, "ALPHA"], [0, "alpha"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebylex.md 0
    // ZRANGE myzset 0 -1
    await client.zrange("myzset", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebylex.md 0
    // ZREMRANGEBYLEX myzset [alpha [omega
    await client.zremrangebylex("myzset", "[alpha", "[omega");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebylex.md 0
    // ZRANGE myzset 0 -1
    await client.zrange("myzset", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyrank.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyrank.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyrank.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyrank.md 0
    // ZREMRANGEBYRANK myzset 0 1
    await client.zremrangebyrank("myzset", 0, 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyrank.md 0
    // ZRANGE myzset 0 -1 WITHSCORES
    await client.zrange("myzset", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyscore.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyscore.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyscore.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyscore.md 0
    // ZREMRANGEBYSCORE myzset -inf (2
    // Error decoding:
    // decoding ZREMRANGEBYSCORE overload 0 (key,min,max): { name: 'key', schema: { type: 'string' } },{ name: 'min', schema: { type: 'number' } },{ name: 'max', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [-inf,(2], target args remainin count: 2
    // -inf parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zremrangebyscore.md 0
    // ZRANGE myzset 0 -1 WITHSCORES
    await client.zrange("myzset", 0, -1, "WITHSCORES");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZREVRANGE myzset 0 -1
    await client.zrevrange("myzset", 0, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZREVRANGE myzset 2 3
    await client.zrevrange("myzset", 2, 3);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrange.md 0
    // ZREVRANGE myzset -2 -1
    await client.zrevrange("myzset", -2, -1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebylex.md 0
    // ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
    await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebylex.md 0
    // ZREVRANGEBYLEX myzset [c -
    await client.zrevrangebylex("myzset", "[c", "-");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebylex.md 0
    // ZREVRANGEBYLEX myzset (c -
    await client.zrevrangebylex("myzset", "(c", "-");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebylex.md 0
    // ZREVRANGEBYLEX myzset (g [aaa
    await client.zrevrangebylex("myzset", "(g", "[aaa");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZREVRANGEBYSCORE myzset +inf -inf
    // Error decoding:
    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 2
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 3
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 3
    // +inf parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [+inf,-inf], target args remainin count: 4
    // +inf parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZREVRANGEBYSCORE myzset 2 1
    await client.zrevrangebyscore("myzset", 2, 1);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZREVRANGEBYSCORE myzset 2 (1
    // Error decoding:
    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 2
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 1
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 3
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 3
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 2
    // (1 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [2,(1], target args remainin count: 4
    // 2 successfully decoded as max (string). Decoded value 2. Tokens remaining [(1], target args remainin count: 3
    // (1 parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrangebyscore.md 0
    // ZREVRANGEBYSCORE myzset (2 (1
    // Error decoding:
    // decoding ZREVRANGEBYSCORE overload 0 (key,max,min): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 2
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 1 (key,max,min,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 3
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 2 (key,max,min,withscores): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 3
    // (2 parsed into a bad number NaN
    // ---
    // decoding ZREVRANGEBYSCORE overload 3 (key,max,min,withscores,LIMIT_offset_count): { name: 'key', schema: { type: 'string' } },{ name: 'max', schema: { type: 'number' } },{ name: 'min', schema: { type: 'number' } },{ name: 'withscores', optional: true, schema: { type: 'string', enum: [ 'WITHSCORES' ] } },{ name: 'LIMIT_offset_count', optional: true, schema: { type: 'array', items: [ { type: 'string', const: 'LIMIT' }, { type: 'array', items: [ { title: 'offset', type: 'integer' }, { title: 'count', type: 'integer' } ] } ] }, toString: [Function] }
    // myzset successfully decoded as key (string). Decoded value myzset. Tokens remaining [(2,(1], target args remainin count: 4
    // (2 parsed into a bad number NaN
    // ---

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrank.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrank.md 0
    // ZADD myzset 2 "two"
    await client.zadd("myzset", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrank.md 0
    // ZADD myzset 3 "three"
    await client.zadd("myzset", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrank.md 0
    // ZREVRANK myzset "one"
    await client.zrevrank("myzset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zrevrank.md 0
    // ZREVRANK myzset "four"
    await client.zrevrank("myzset", "four");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zscore.md 0
    // ZADD myzset 1 "one"
    await client.zadd("myzset", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zscore.md 0
    // ZSCORE myzset "one"
    await client.zscore("myzset", "one");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZADD zset1 1 "one"
    await client.zadd("zset1", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZADD zset1 2 "two"
    await client.zadd("zset1", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZADD zset2 1 "one"
    await client.zadd("zset2", [1, "one"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZADD zset2 2 "two"
    await client.zadd("zset2", [2, "two"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZADD zset2 3 "three"
    await client.zadd("zset2", [3, "three"]);

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZUNIONSTORE out 2 zset1 zset2 WEIGHTS 2 3
    await client.zunionstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3");

    // C:/Users/mkale/src/handy-redis/scripts/redis-doc/commands/zunionstore.md 0
    // ZRANGE out 0 -1 WITHSCORES
    await client.zrange("out", 0, -1, "WITHSCORES");
};
