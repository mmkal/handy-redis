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

it("scripts/redis-doc/commands/mset.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/mset.md");
    let snapshot: any;
    const commands = [
        `await client.mset(["key1", "Hello"], ["key2", "World"])`,
        `await client.get("key1")`,
        `await client.get("key2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.mset(["key1", "Hello"], ["key2", "World"]));
        output.push(await client.get("key1"));
        output.push(await client.get("key2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 56)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
