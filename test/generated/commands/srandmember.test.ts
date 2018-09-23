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

it("scripts/redis-doc/commands/srandmember.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/srandmember.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "one", "two", "three")`,
        `await handy.srandmember("myset")`,
        `await handy.srandmember("myset", 2)`,
        `await handy.srandmember("myset", -5)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "one", "two", "three"));
        output.push(await handy.srandmember("myset"));
        output.push(await handy.srandmember("myset", 2));
        output.push(await handy.srandmember("myset", -5));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
