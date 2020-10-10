import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/command.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.command();

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "typeOf => array",
        }
    `);
});
