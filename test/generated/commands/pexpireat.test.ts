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

it("scripts/redis-doc/commands/pexpireat.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pexpireat.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "Hello")`,
        `await client.pexpireat("mykey", 1555555555005)`,
        `await client.ttl("mykey")`,
        `await client.pttl("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "Hello"));
        output.push(await client.pexpireat("mykey", 1555555555005));
        output.push(await client.ttl("mykey"));
        output.push(await client.pttl("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 47)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
