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

it("scripts/redis-doc/commands/zadd.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zadd.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("myzset", 1, "one")`,
        `await client.zadd("myzset", 1, "uno")`,
        `await client.zadd("myzset", 2, "two")`,
        `await client.zrange("myzset", 0, -1, "WITHSCORES")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("myzset", 1, "one"));
        output.push(await client.zadd("myzset", 1, "uno"));
        output.push(await client.zadd("myzset", 2, "two"));
        output.push(await client.zrange("myzset", 0, -1, "WITHSCORES"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 51)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
