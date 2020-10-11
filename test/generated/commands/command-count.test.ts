import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/command-count.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `COMMAND COUNT`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: COUNT
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
