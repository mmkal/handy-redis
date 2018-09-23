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

it("scripts/redis-doc/commands/smembers.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/smembers.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "Hello")`,
        `await handy.sadd("myset", "World")`,
        `await handy.smembers("myset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "Hello"));
        output.push(await handy.sadd("myset", "World"));
        output.push(await handy.smembers("myset"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
