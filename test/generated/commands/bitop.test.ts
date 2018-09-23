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

it("scripts/redis-doc/commands/bitop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/bitop.md");
    let snapshot: any;
    const commands = [
        `await client.set("key1", "foobar")`,
        `await client.set("key2", "abcdef")`,
        `await client.bitop("AND", "dest", "key1", "key2")`,
        `await client.get("dest")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("key1", "foobar"));
        output.push(await client.set("key2", "abcdef"));
        output.push(await client.bitop("AND", "dest", "key1", "key2"));
        output.push(await client.get("dest"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 50)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
