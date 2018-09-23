import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/redis-doc/commands/decr.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/decr.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "10")`,
        `await client.decr("mykey")`,
        `await client.set("mykey", "234293482390480948029348230948")`,
        `await client.decr("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "10"));
        output.push(await client.decr("mykey"));
        output.push(await client.set("mykey", "234293482390480948029348230948"));
        output.push(await client.decr("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 60)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
