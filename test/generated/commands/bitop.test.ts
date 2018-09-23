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

it("scripts/redis-doc/commands/bitop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/bitop.md");
    let snapshot: any;
    const commands = [
        `await handy.set("key1", "foobar")`,
        `await handy.set("key2", "abcdef")`,
        `await handy.bitop("AND", "dest", "key1", "key2")`,
        `await handy.get("dest")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("key1", "foobar"));
        output.push(await handy.set("key2", "abcdef"));
        output.push(await handy.bitop("AND", "dest", "key1", "key2"));
        output.push(await handy.get("dest"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
