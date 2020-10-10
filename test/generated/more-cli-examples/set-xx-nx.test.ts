import { createHandyClient } from "../../../src";
import { override } from "../../_manual-overrides2";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("scripts/more-cli-examples/set-xx-nx.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    outputs.r0 = await client.set("foo", "bar1", "XX");
    outputs.r1 = await client.set("foo", "bar2", "XX");
    outputs.r2 = await client.set("bar", "foo1", "NX");
    outputs.r3 = await client.set("bar", "foo2", "NX");

    expect(override(outputs, __filename)).toMatchInlineSnapshot(`
        Object {
          "r0": null,
          "r1": null,
          "r2": "OK",
          "r3": null,
        }
    `);
});
