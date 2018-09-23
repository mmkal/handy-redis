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

it("scripts/redis-doc/commands/hsetnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hsetnx.md");
    let snapshot: any;
    const commands = [
        `await handy.hsetnx("myhash", "field", "Hello")`,
        `await handy.hsetnx("myhash", "field", "World")`,
        `await handy.hget("myhash", "field")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hsetnx("myhash", "field", "Hello"));
        output.push(await handy.hsetnx("myhash", "field", "World"));
        output.push(await handy.hget("myhash", "field"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 47)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
