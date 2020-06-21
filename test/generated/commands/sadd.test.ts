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

it("scripts/redis-doc/commands/sadd.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/sadd.md");
    let snapshot: any;
    const commands = [
        `await client.sadd("myset", "Hello")`,
        `await client.sadd("myset", "World")`,
        `await client.sadd("myset", "World")`,
        `await client.smembers("myset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.sadd("myset", "Hello"));
        output.push(await client.sadd("myset", "World"));
        output.push(await client.sadd("myset", "World"));
        output.push(await client.smembers("myset"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 36)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
