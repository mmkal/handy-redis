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

it("scripts/redis-doc/commands/expireat.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/expireat.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "Hello")`,
        `await client.exists("mykey")`,
        `await client.expireat("mykey", 1293840000)`,
        `await client.exists("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "Hello"));
        output.push(await client.exists("mykey"));
        output.push(await client.expireat("mykey", 1293840000));
        output.push(await client.exists("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 43)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
