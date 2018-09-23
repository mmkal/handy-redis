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

it("scripts/redis-doc/commands/command-info.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/command-info.md");
    let snapshot: any;
    const commands = [
        `await client.command("INFO", "get", "set", "eval")`,
        `await client.command("INFO", "foo", "evalsha", "config", "bar")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.command("INFO", "get", "set", "eval"));
        output.push(await client.command("INFO", "foo", "evalsha", "config", "bar"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 64)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
