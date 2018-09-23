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

it("scripts/redis-doc/commands/spop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/spop.md");
    let snapshot: any;
    const commands = [
        `await handy.sadd("myset", "one")`,
        `await handy.sadd("myset", "two")`,
        `await handy.sadd("myset", "three")`,
        `await handy.spop("myset")`,
        `await handy.smembers("myset")`,
        `await handy.sadd("myset", "four")`,
        `await handy.sadd("myset", "five")`,
        `await handy.spop("myset", 3)`,
        `await handy.smembers("myset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.sadd("myset", "one"));
        output.push(await handy.sadd("myset", "two"));
        output.push(await handy.sadd("myset", "three"));
        output.push(await handy.spop("myset"));
        output.push(await handy.smembers("myset"));
        output.push(await handy.sadd("myset", "four"));
        output.push(await handy.sadd("myset", "five"));
        output.push(await handy.spop("myset", 3));
        output.push(await handy.smembers("myset"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
