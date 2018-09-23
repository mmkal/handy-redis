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

it("scripts/redis-doc/commands/zunionstore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zunionstore.md");
    let snapshot: any;
    const commands = [
        `await handy.zadd("zset1", [1, "one"])`,
        `await handy.zadd("zset1", [2, "two"])`,
        `await handy.zadd("zset2", [1, "one"])`,
        `await handy.zadd("zset2", [2, "two"])`,
        `await handy.zadd("zset2", [3, "three"])`,
        `await handy.zunionstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3")`,
        `await handy.zrange("out", 0, -1, "WITHSCORES")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.zadd("zset1", [1, "one"]));
        output.push(await handy.zadd("zset1", [2, "two"]));
        output.push(await handy.zadd("zset2", [1, "one"]));
        output.push(await handy.zadd("zset2", [2, "two"]));
        output.push(await handy.zadd("zset2", [3, "three"]));
        output.push(await handy.zunionstore("out", 2, "zset1", "zset2", "WEIGHTS", "2", "3"));
        output.push(await handy.zrange("out", 0, -1, "WITHSCORES"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 73)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
