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

it("scripts/redis-doc/commands/zrevrangebyscore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zrevrangebyscore.md");
    let snapshot: any;
    const commands = [
        `await handy.zadd("myzset", [1, "one"])`,
        `await handy.zadd("myzset", [2, "two"])`,
        `await handy.zadd("myzset", [3, "three"])`,
        `await handy.zrevrangebyscore("myzset", Infinity, -Infinity)`,
        `await handy.zrevrangebyscore("myzset", 2, 1)`,
        `await handy.zrevrangebyscore("myzset", 2, "(1" as any)`,
        `await handy.zrevrangebyscore("myzset", "(2" as any, "(1" as any)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.zadd("myzset", [1, "one"]));
        output.push(await handy.zadd("myzset", [2, "two"]));
        output.push(await handy.zadd("myzset", [3, "three"]));
        output.push(await handy.zrevrangebyscore("myzset", Infinity, -Infinity));
        output.push(await handy.zrevrangebyscore("myzset", 2, 1));
        output.push(await handy.zrevrangebyscore("myzset", 2, "(1" as any));
        output.push(await handy.zrevrangebyscore("myzset", "(2" as any, "(1" as any));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 65)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
