import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/client-id.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `CLIENT ID`:

    // CLIENT not found
    // ---

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
