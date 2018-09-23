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

it("scripts/redis-doc/commands/zrevrangebylex.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/zrevrangebylex.md");
    let snapshot: any;
    const commands = [
        `await handy.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"])`,
        `await handy.zrevrangebylex("myzset", "[c", "-")`,
        `await handy.zrevrangebylex("myzset", "(c", "-")`,
        `await handy.zrevrangebylex("myzset", "(g", "[aaa")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.zadd("myzset", [0, "a"], [0, "b"], [0, "c"], [0, "d"], [0, "e"], [0, "f"], [0, "g"]));
        output.push(await handy.zrevrangebylex("myzset", "[c", "-"));
        output.push(await handy.zrevrangebylex("myzset", "(c", "-"));
        output.push(await handy.zrevrangebylex("myzset", "(g", "[aaa"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 97)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
