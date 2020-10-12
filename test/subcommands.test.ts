import { createHandyClient, addNodeRedisCommand } from "../src";

addNodeRedisCommand("acl");

const client = createHandyClient();

test("subcommands", async () => {
    expect(await client.command("COUNT")).toBeGreaterThan(1);

    expect(await client.script("EXISTS", "abc", "def")).toEqual([0, 0]);

    expect(await client.acl("LIST")).toEqual([expect.stringMatching(/user .*/)]);
});
