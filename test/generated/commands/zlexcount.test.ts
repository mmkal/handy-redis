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

it("scripts/redis-doc/commands/zlexcount.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zlexcount.md");
    let snapshot: any;
    const commands = [
        `await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"])`,
        `await client.zadd("myzset", [0, "f"], [0, "g"])`,
        `await client.zlexcount("myzset", "-", "+")`,
        `await client.zlexcount("myzset", "[b", "[f")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"]));
        output.push(await client.zadd("myzset", [0, "f"], [0, "g"]));
        output.push(await client.zlexcount("myzset", "-", "+"));
        output.push(await client.zlexcount("myzset", "[b", "[f"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 78)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
