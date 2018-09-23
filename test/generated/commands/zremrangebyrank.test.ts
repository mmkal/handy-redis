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

it("scripts/redis-doc/commands/zremrangebyrank.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zremrangebyrank.md");
    let snapshot: any;
    const commands = [
        `await handy.zadd("myzset", [1, "one"])`,
        `await handy.zadd("myzset", [2, "two"])`,
        `await handy.zadd("myzset", [3, "three"])`,
        `await handy.zremrangebyrank("myzset", 0, 1)`,
        `await handy.zrange("myzset", 0, -1, "WITHSCORES")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.zadd("myzset", [1, "one"]));
        output.push(await handy.zadd("myzset", [2, "two"]));
        output.push(await handy.zadd("myzset", [3, "three"]));
        output.push(await handy.zremrangebyrank("myzset", 0, 1));
        output.push(await handy.zrange("myzset", 0, -1, "WITHSCORES"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 50)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
