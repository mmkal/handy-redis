import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/redis-doc/commands/srandmember.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/srandmember.md");
    let snapshot: any;
    const commands = [
        `await client.sadd("myset", "one", "two", "three")`,
        `await client.srandmember("myset")`,
        `await client.srandmember("myset", 2)`,
        `await client.srandmember("myset", -5)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.sadd("myset", "one", "two", "three"));
        output.push(await client.srandmember("myset"));
        output.push(await client.srandmember("myset", 2));
        output.push(await client.srandmember("myset", -5));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 50)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
