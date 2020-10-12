import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/echo.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.echo("Hello World!");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "Hello World!",
        }
    `);
});
