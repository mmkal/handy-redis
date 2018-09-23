import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let handy: IHandyRedis;
beforeAll(async () => {
    handy = createHandyClient();
    await handy.ping("ping");
});
beforeEach(async () => {
    await handy.flushall();
});

it.skip("scripts/redis-doc/commands/unlink.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/unlink.md");
    let snapshot: any;
    const commands = [
        `await handy.set("key1", "Hello")`,
        `await handy.set("key2", "World")`,
        `await handy.unlink("key1", "key2", "key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("key1", "Hello"));
        output.push(await handy.set("key2", "World"));
        output.push(await handy.unlink("key1", "key2", "key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 43)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
