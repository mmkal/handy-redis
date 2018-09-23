import it from "ava";
import { createHandyClient } from "../src";
import { createClient, Multi } from "redis";

it("create client", t => {
    expect(createHandyClient()).toBeTruthy();
});

it("create client from node_redis", async t => {
    const nodeRedisClient = createClient();
    const client = createHandyClient(nodeRedisClient);
    expect(await client.ping()).toBeTruthy();
});

it("keys", async t => {
    const client = createHandyClient();

    await client.set("x:foo", "123");
    await client.set("x:bar", "456");
    await client.set("y:baz", "789");

    const keys = await client.keys("x:*");

    expect(keys.sort()).toEqual(["x:foo", "x:bar"].sort());
});

it("multi", async t => {
    const client = createHandyClient();

    const multi = client.multi().set("z:foo", "987").keys("z:*").get("z:foo");

    const result = await client.execMulti(multi);

    expect(result).toEqual(["OK", ["z:foo"], "987"]);
});

it("multi rejects correctly", async t => {
    const client = createHandyClient();

    const fakeMulti: Multi = {
        exec: (callback: Function) => callback(new Error("foo")),
    } as any;

    await expect(client.execMulti(fakeMulti)).rejects.toEqual("foo");
});

it("set with expiry", async t => {
    const client = createHandyClient();
    await client.set("a:foo", "123", ["EX", 60]);
    const ttl = await client.ttl("a:foo");
    expect(ttl).toBeLessThanOrEqual(60);
    expect(ttl).toBeGreaterThan(55); // hopefully it didn't take over 5s to run a command...
});
