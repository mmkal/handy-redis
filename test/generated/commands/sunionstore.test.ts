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

it("scripts/redis-doc/commands/sunionstore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/sunionstore.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("key1", "a")`,
        `await handy.sadd("key1", "b")`,
        `await handy.sadd("key1", "c")`,
        `await handy.sadd("key2", "c")`,
        `await handy.sadd("key2", "d")`,
        `await handy.sadd("key2", "e")`,
        `await handy.sunionstore("key", "key1", "key2")`,
        `await handy.smembers("key")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("key1", "a"));
        output.push(await handy.sadd("key1", "b"));
        output.push(await handy.sadd("key1", "c"));
        output.push(await handy.sadd("key2", "c"));
        output.push(await handy.sadd("key2", "d"));
        output.push(await handy.sadd("key2", "e"));
        output.push(await handy.sunionstore("key", "key1", "key2"));
        output.push(await handy.smembers("key"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 47)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
