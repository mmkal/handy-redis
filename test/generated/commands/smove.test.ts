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

it("scripts/redis-doc/commands/smove.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/smove.md");
    let snapshot: any;
    const commands = [
        `await client.sadd("myset", "one")`,
        `await client.sadd("myset", "two")`,
        `await client.sadd("myotherset", "three")`,
        `await client.smove("myset", "myotherset", "two")`,
        `await client.smembers("myset")`,
        `await client.smembers("myotherset")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.sadd("myset", "one"));
        output.push(await client.sadd("myset", "two"));
        output.push(await client.sadd("myotherset", "three"));
        output.push(await client.smove("myset", "myotherset", "two"));
        output.push(await client.smembers("myset"));
        output.push(await client.smembers("myotherset"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
