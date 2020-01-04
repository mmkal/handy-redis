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

it("scripts/redis-doc/commands/msetnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/msetnx.md");
    let snapshot: any;
    const commands = [
        `await client.msetnx(["key1", "Hello"], ["key2", "there"])`,
        `await client.msetnx(["key2", "new"], ["key3", "world"])`,
        `await client.mget("key1", "key2", "key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.msetnx(["key1", "Hello"], ["key2", "there"]));
        output.push(await client.msetnx(["key2", "new"], ["key3", "world"]));
        output.push(await client.mget("key1", "key2", "key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 58)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
