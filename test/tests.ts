import test from "ava";
import { createHandyClient } from "../src";
import { createClient } from "redis";

test("create client", t => {
    t.truthy(createHandyClient());
});

test("create client from node_redis", async t => {
    const nodeRedisClient = createClient();
    const client = createHandyClient(nodeRedisClient);
    t.truthy(await client.ping());
});

test("keys", async t => {
    const client = createHandyClient();

    await client.set("x:foo", "123");
    await client.set("x:bar", "456");
    await client.set("y:baz", "789");

    const keys = await client.keys("x:*");

    t.deepEqual(keys.sort(), ["x:foo", "x:bar"].sort());
});
