import { createHandyClient } from "../src";

const client = createHandyClient();

test("subcommands", async () => {
    expect(await client.command("COUNT")).toBeGreaterThan(1);

    expect(await client.script("EXISTS", "abc", "def")).toEqual([0, 0]);
});
