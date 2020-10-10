import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/decr.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("mykey", "10");
    outputs.r1 = await client.decr("mykey");
    outputs.r2 = await client.set("mykey", "234293482390480948029348230948");
    // outputs.r3 = await client.decr("mykey");

    expect(override(outputs, __filename)).toMatchInlineSnapshot();
});
