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

it("scripts/redis-doc/commands/zremrangebylex.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zremrangebylex.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("myzset", [0, "aaaa"], [0, "b"], [0, "c"], [0, "d"], [0, "e"])`,
        `await client.zadd("myzset", [0, "foo"], [0, "zap"], [0, "zip"], [0, "ALPHA"], [0, "alpha"])`,
        `await client.zrange("myzset", 0, -1)`,
        `await client.zremrangebylex("myzset", "[alpha", "[omega")`,
        `await client.zrange("myzset", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("myzset", [0, "aaaa"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]));
        output.push(await client.zadd("myzset", [0, "foo"], [0, "zap"], [0, "zip"], [0, "ALPHA"], [0, "alpha"]));
        output.push(await client.zrange("myzset", 0, -1));
        output.push(await client.zremrangebylex("myzset", "[alpha", "[omega"));
        output.push(await client.zrange("myzset", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 92)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
