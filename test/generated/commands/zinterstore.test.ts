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

it("scripts/redis-doc/commands/zinterstore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zinterstore.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("zset1", 1, "one")`,
        `await client.zadd("zset1", 2, "two")`,
        `await client.zadd("zset2", 1, "one")`,
        `await client.zadd("zset2", 2, "two")`,
        `await client.zadd("zset2", 3, "three")`,
        `await client.zinterstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3")`,
        `await client.zrange("out", 0, -1, "WITHSCORES")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("zset1", 1, "one"));
        output.push(await client.zadd("zset1", 2, "two"));
        output.push(await client.zadd("zset2", 1, "one"));
        output.push(await client.zadd("zset2", 2, "two"));
        output.push(await client.zadd("zset2", 3, "three"));
        output.push(await client.zinterstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3"));
        output.push(await client.zrange("out", 0, -1, "WITHSCORES"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 74)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
