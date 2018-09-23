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

it("scripts/redis-doc/commands/hkeys.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hkeys.md");
    let snapshot: any;
    const commands = [
        `await handy.hset("myhash", "field1", "Hello")`,
        `await handy.hset("myhash", "field2", "World")`,
        `await handy.hkeys("myhash")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hset("myhash", "field1", "Hello"));
        output.push(await handy.hset("myhash", "field2", "World"));
        output.push(await handy.hkeys("myhash"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 46)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
