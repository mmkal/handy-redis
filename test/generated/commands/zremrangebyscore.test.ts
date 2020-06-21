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

it("scripts/redis-doc/commands/zremrangebyscore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zremrangebyscore.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("myzset", [1, "one"])`,
        `await client.zadd("myzset", [2, "two"])`,
        `await client.zadd("myzset", [3, "three"])`,
        `await client.zremrangebyscore("myzset", -Infinity, "(2" as any)`,
        `await client.zrange("myzset", 0, -1, "WITHSCORES")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("myzset", [1, "one"]));
        output.push(await client.zadd("myzset", [2, "two"]));
        output.push(await client.zadd("myzset", [3, "three"]));
        output.push(await client.zremrangebyscore("myzset", -Infinity, "(2" as any));
        output.push(await client.zrange("myzset", 0, -1, "WITHSCORES"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 64)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
