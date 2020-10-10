import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/redis-doc/commands/command-info.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `COMMAND INFO get set eval`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,get,set,eval
    // ---
    // Error decoding command `COMMAND INFO foo evalsha config bar`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,foo,evalsha,config,bar
    // ---

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
