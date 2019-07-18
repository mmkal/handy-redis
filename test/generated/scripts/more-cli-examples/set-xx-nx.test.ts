import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../../src";
import { getOverride } from "../../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/more-cli-examples/set-xx-nx.md example 1", async () => {
    const overrider = getOverride("scripts/more-cli-examples/set-xx-nx.md");
    let snapshot: any;
    const commands = [
        `await client.set("foo", "bar1", "XX")`,
        `await client.set("foo", "bar2", "XX")`,
        `await client.set("bar", "foo1", "NX")`,
        `await client.set("bar", "foo2", "NX")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("foo", "bar1", "XX"));
        output.push(await client.set("foo", "bar2", "XX"));
        output.push(await client.set("bar", "foo1", "NX"));
        output.push(await client.set("bar", "foo2", "NX"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
