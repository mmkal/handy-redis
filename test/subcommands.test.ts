import { createNodeRedisClient, addNodeRedisCommand } from "../src";

addNodeRedisCommand("acl");

const client = createNodeRedisClient();

test("subcommands", async () => {
    expect(await client.command("COUNT")).toBeGreaterThan(1);

    expect(await client.script("EXISTS", "abc", "def")).toEqual([0, 0]);

    expect(await client.acl("LIST")).toEqual([expect.stringMatching(/user .*/)]);
});
