import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/command-info.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `COMMAND INFO get set eval`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,get,set,eval
    // ---
    // Error decoding command `COMMAND INFO foo evalsha config bar`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: INFO,foo,evalsha,config,bar
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
