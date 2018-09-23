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

it("scripts/redis-doc/commands/psetex.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/psetex.md");
    let snapshot: any;
    const commands = [
        `await client.psetex("mykey", 1000, "Hello")`,
        `await client.pttl("mykey")`,
        `await client.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.psetex("mykey", 1000, "Hello"));
        output.push(await client.pttl("mykey"));
        output.push(await client.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 44)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
