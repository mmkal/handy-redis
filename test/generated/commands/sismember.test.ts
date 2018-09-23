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

it("scripts/redis-doc/commands/sismember.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/sismember.md");
    let snapshot: any;
    const commands = [
        `await client.sadd("myset", "one")`,
        `await client.sismember("myset", "one")`,
        `await client.sismember("myset", "two")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.sadd("myset", "one"));
        output.push(await client.sismember("myset", "one"));
        output.push(await client.sismember("myset", "two"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 39)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
