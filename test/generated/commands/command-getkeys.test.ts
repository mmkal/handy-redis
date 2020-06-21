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

it("scripts/redis-doc/commands/command-getkeys.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/command-getkeys.md");
    let snapshot: any;
    const commands = [
        `await client.command("GETKEYS", "MSET", "a", "b", "c", "d", "e", "f")`,
        `await client.command("GETKEYS", "EVAL", "not consulted", "3", "key1", "key2", "key3", "arg1", "arg2", "arg3", "argN")`,
        `await client.command("GETKEYS", "SORT", "mylist", "ALPHA", "STORE", "outlist")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.command("GETKEYS", "MSET", "a", "b", "c", "d", "e", "f"));
        output.push(
            await client.command(
                "GETKEYS",
                "EVAL",
                "not consulted",
                "3",
                "key1",
                "key2",
                "key3",
                "arg1",
                "arg2",
                "arg3",
                "argN"
            )
        );
        output.push(await client.command("GETKEYS", "SORT", "mylist", "ALPHA", "STORE", "outlist"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 118)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
