import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/keys.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.mset(["firstname", "Jack"], ["lastname", "Stuntman"], ["age", "35"]);
    outputs.r1 = await client.keys("*name*");
    outputs.r2 = await client.keys("a??");
    outputs.r3 = await client.keys("*");

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": "OK",
          "r1": "sortArrays => [ 'firstname', 'lastname' ]",
          "r2": "sortArrays => [ 'age' ]",
          "r3": "sortArrays => [ 'age', 'firstname', 'lastname' ]",
        }
    `);
});
