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

it("scripts/redis-doc/commands/setnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setnx.md");
    let snapshot: any;
    const commands = [
        `await handy.setnx("mykey", "Hello")`,
        `await handy.setnx("mykey", "World")`,
        `await handy.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.setnx("mykey", "Hello"));
        output.push(await handy.setnx("mykey", "World"));
        output.push(await handy.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 36)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
