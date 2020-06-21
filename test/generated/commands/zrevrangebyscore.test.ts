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

it("scripts/redis-doc/commands/zrevrangebyscore.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zrevrangebyscore.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("myzset", [1, "one"])`,
        `await client.zadd("myzset", [2, "two"])`,
        `await client.zadd("myzset", [3, "three"])`,
        `await client.zrevrangebyscore("myzset", Infinity, -Infinity)`,
        `await client.zrevrangebyscore("myzset", 2, 1)`,
        `await client.zrevrangebyscore("myzset", 2, "(1" as any)`,
        `await client.zrevrangebyscore("myzset", "(2" as any, "(1" as any)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("myzset", [1, "one"]));
        output.push(await client.zadd("myzset", [2, "two"]));
        output.push(await client.zadd("myzset", [3, "three"]));
        output.push(await client.zrevrangebyscore("myzset", Infinity, -Infinity));
        output.push(await client.zrevrangebyscore("myzset", 2, 1));
        output.push(await client.zrevrangebyscore("myzset", 2, "(1" as any));
        output.push(await client.zrevrangebyscore("myzset", "(2" as any, "(1" as any));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 66)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
