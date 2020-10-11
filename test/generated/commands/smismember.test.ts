import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/smismember.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.sadd("myset", "one");
    outputs.r1 = await client.sadd("myset", "one");
    outputs.r2 = await client.smismember("myset", "one", "notamember");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot();
});
