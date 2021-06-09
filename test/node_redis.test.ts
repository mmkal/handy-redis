import { createHandyClient, createNodeRedisClient } from "../src";
import { createClient } from "redis";
import * as redisMock from "redis-mock";

const client = createNodeRedisClient();

it("creates client", async () => {
    expect(client).toBeTruthy();
    expect(await client.ping()).toBeTruthy();
});

it("creates client from node_redis", async () => {
    const nodeRedisClient = createClient();
    const hrClient = createNodeRedisClient(nodeRedisClient);
    expect(await hrClient.ping()).toBeTruthy();
    hrClient.end(true);
});

test("v1.x backwards-compatibility", () => {
    expect(createHandyClient).toBe(createNodeRedisClient);
});

it("can use set and keys", async () => {
    await client.set("x:foo", "123");
    await client.set("x:bar", "456");
    await client.set("y:baz", "789");

    const keys = await client.keys("x:*");

    expect(keys.sort()).toEqual(["x:foo", "x:bar"].sort());
});

it("can use hset with multiple fields", async () => {
    await client.hset("myhash", ["field1", "Hello"], ["field2", "Goodbye"]);
    await client.hset("myhash", ["field3", "foo"]);

    expect(await client.hgetall("myhash")).toMatchObject({
        field1: "Hello",
        field2: "Goodbye",
        field3: "foo",
    });
});

it("can use setbit with string or number", async () => {
    await client.setbit("mykey", 7, 1);
    expect(await client.getbit("mykey", 7)).toEqual(1);

    await client.setbit("mykey", 7, 0);
    expect(await client.getbit("mykey", 7)).toEqual(0);
});

it("set with expiry", async () => {
    await client.set("a:foo", "123", ["EX", 60]);
    const ttl = await client.ttl("a:foo");
    expect(ttl).toBeLessThanOrEqual(60);
    expect(ttl).toBeGreaterThan(55); // hopefully it didn't take over 5s to run a command...
});

test("scan", async () => {
    await client.set("scantest:foo1", "f1");
    await client.set("scantest:foo2", "f2");
    await client.set("scantest:foo3", "f3");
    await client.set("scantest:bar1", "b1");
    const [cursor, keys] = await client.scan(0, ["MATCH", "scantest:foo*"]);
    expect(cursor).toMatch(/^\d+$/);
    expect(keys.sort()).toEqual(["scantest:foo1", "scantest:foo2", "scantest:foo3"]);
});

it("works with redis-mock", async () => {
    const mockClient: any = redisMock.createClient();
    const client = createNodeRedisClient(mockClient);

    expect(client.redis).toBe(mockClient);
    expect(client.nodeRedis).toBe(mockClient);
});

it("has quit and end methods", async () => {
    expect(typeof client.quit).toBe("function");
    expect(typeof client.end).toBe("function");
});
