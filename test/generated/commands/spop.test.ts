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

it("scripts/redis-doc/commands/spop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/spop.md");
    let snapshot: any;
    const commands = [
        `await client.sadd("myset", "one")`,
        `await client.sadd("myset", "two")`,
        `await client.sadd("myset", "three")`,
        `await client.spop("myset")`,
        `await client.smembers("myset")`,
        `await client.sadd("myset", "four")`,
        `await client.sadd("myset", "five")`,
        `await client.spop("myset", 3)`,
        `await client.smembers("myset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.sadd("myset", "one"));
        output.push(await client.sadd("myset", "two"));
        output.push(await client.sadd("myset", "three"));
        output.push(await client.spop("myset"));
        output.push(await client.smembers("myset"));
        output.push(await client.sadd("myset", "four"));
        output.push(await client.sadd("myset", "five"));
        output.push(await client.spop("myset", 3));
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
