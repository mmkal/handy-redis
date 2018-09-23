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

it("scripts/redis-doc/commands/smove.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/smove.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "one")`,
        `await handy.sadd("myset", "two")`,
        `await handy.sadd("myotherset", "three")`,
        `await handy.smove("myset", "myotherset", "two")`,
        `await handy.smembers("myset")`,
        `await handy.smembers("myotherset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "one"));
        output.push(await handy.sadd("myset", "two"));
        output.push(await handy.sadd("myotherset", "three"));
        output.push(await handy.smove("myset", "myotherset", "two"));
        output.push(await handy.smembers("myset"));
        output.push(await handy.smembers("myotherset"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 48)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
