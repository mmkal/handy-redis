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

it("scripts/redis-doc/commands/zrangebyscore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zrangebyscore.md");
    let snapshot: any;
    const commands = [
        `await handy.zadd("myzset", [1, "one"])`,
        `await handy.zadd("myzset", [2, "two"])`,
        `await handy.zadd("myzset", [3, "three"])`,
        `await handy.zrangebyscore("myzset", -Infinity, Infinity)`,
        `await handy.zrangebyscore("myzset", 1, 2)`,
        `await handy.zrangebyscore("myzset", "(1" as any, 2)`,
        `await handy.zrangebyscore("myzset", "(1" as any, "(2" as any)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.zadd("myzset", [1, "one"]));
        output.push(await handy.zadd("myzset", [2, "two"]));
        output.push(await handy.zadd("myzset", [3, "three"]));
        output.push(await handy.zrangebyscore("myzset", -Infinity, Infinity));
        output.push(await handy.zrangebyscore("myzset", 1, 2));
        output.push(await handy.zrangebyscore("myzset", "(1" as any, 2));
        output.push(await handy.zrangebyscore("myzset", "(1" as any, "(2" as any));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 62)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
