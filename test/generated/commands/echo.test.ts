import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/echo.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.echo("Hello World!");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "Hello World!",
        }
    `);
});
