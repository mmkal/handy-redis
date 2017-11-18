import test from "ava";
import { createHandyClient } from "../src";

test("create client", t => {
    t.truthy(createHandyClient());
});

test("keys", async t => {
    const client = createHandyClient();

    await client.set("x:foo", "123");
    await client.set("x:bar", "456");
    await client.set("y:baz", "789");

    const keys = await client.keys("x:*");

    t.deepEqual(keys.sort(), ["x:foo", "x:bar"].sort());
});
