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

it("scripts/redis-doc/commands/msetnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/msetnx.md");
    let snapshot: any;
    const commands = [
        `await handy.msetnx(["key1", "Hello"], ["key2", "there"])`,
        `await handy.msetnx(["key2", "there"], ["key3", "world"])`,
        `await handy.mget("key1", "key2", "key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.msetnx(["key1", "Hello"], ["key2", "there"]));
        output.push(await handy.msetnx(["key2", "there"], ["key3", "world"]));
        output.push(await handy.mget("key1", "key2", "key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 57)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
