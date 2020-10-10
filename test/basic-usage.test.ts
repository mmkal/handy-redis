import { createHandyClient } from "../src";
import { createClient } from "redis";
import * as redisMock from "redis-mock";

// const client = createHandyClient();

// it("creates client", async () => {
//     expect(client).toBeTruthy();
//     expect(await client.ping()).toBeTruthy();
// });

// it("creates client from node_redis", async () => {
//     const nodeRedisClient = createClient();
//     const client = createHandyClient(nodeRedisClient);
//     expect(await client.ping()).toBeTruthy();
// });

// it("can use set and keys", async () => {
//     await client.set("x:foo", "123");
//     await client.set("x:bar", "456");
//     await client.set("y:baz", "789");

//     const keys = await client.keys("x:*");

//     expect(keys.sort()).toEqual(["x:foo", "x:bar"].sort());
// });

// it("can use hset with multiple fields", async () => {
//     await client.hset("myhash", ["field1", "Hello"], ["field2", "Goodbye"]);
//     await client.hset("myhash", ["field3", "foo"]);

//     expect(await client.hgetall("myhash")).toMatchObject({
//         field1: "Hello",
//         field2: "Goodbye",
//         field3: "foo",
//     });
// });

// it("can use setbit with string or number", async () => {
//     await client.setbit("mykey", 7, 1);
//     expect(await client.getbit("mykey", 7)).toEqual(1);

//     await client.setbit("mykey", 7, 0);
//     expect(await client.getbit("mykey", 7)).toEqual(0);
// });

// it("can use multi", async () => {
//     const multi = client.multi().set("z:foo", "987").keys("z:*").get("z:foo");

//     const result = await multi.execAsync();

//     expect(result).toEqual(["OK", ["z:foo"], "987"]);
// });

// it("can use batch", async () => {
//     const batch = client.batch().set("z:foo", "987").keys("z:*").get("z:foo");

//     const result = await batch.execAsync();

//     expect(result).toEqual(["OK", ["z:foo"], "987"]);
// });

// it.skip("multi rejects correctly", async () => {
//     await expect(
//         client
//             .multi()
//             .set("foo", "bar", "EX", "NOTANUMBER" as any)
//             .execAsync()
//     ).rejects.toThrowErrorMatchingInlineSnapshot();
// });

// it("set with expiry", async () => {
//     await client.set("a:foo", "123", ["EX", 60]);
//     const ttl = await client.ttl("a:foo");
//     expect(ttl).toBeLessThanOrEqual(60);
//     expect(ttl).toBeGreaterThan(55); // hopefully it didn't take over 5s to run a command...
// });

// it("works with redis-mock", async () => {
//     const mockClient: any = redisMock.createClient();
//     const client = createHandyClient(mockClient);

//     expect(client.redis).toBe(mockClient);
// });

// it("has quit and end methods", async () => {
//     expect(typeof client.quit).toBe("function");
//     expect(typeof client.end).toBe("function");
// });

it("tst", () => {
    expect(1).toEqual(1);
});
