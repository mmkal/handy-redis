import { createNodeRedisClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createNodeRedisClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/client-info.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `CLIENT INFO`:

    // CLIENT not found
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
