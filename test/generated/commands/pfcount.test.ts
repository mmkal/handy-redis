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

it("scripts/redis-doc/commands/pfcount.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pfcount.md");
    let snapshot: any;
    const commands = [
        `await handy.pfadd("hll", "foo", "bar", "zap")`,
        `await handy.pfadd("hll", "zap", "zap", "zap")`,
        `await handy.pfadd("hll", "foo", "bar")`,
        `await handy.pfcount("hll")`,
        `await handy.pfadd("some-other-hll", "1", "2", "3")`,
        `await handy.pfcount("hll", "some-other-hll")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.pfadd("hll", "foo", "bar", "zap"));
        output.push(await handy.pfadd("hll", "zap", "zap", "zap"));
        output.push(await handy.pfadd("hll", "foo", "bar"));
        output.push(await handy.pfcount("hll"));
        output.push(await handy.pfadd("some-other-hll", "1", "2", "3"));
        output.push(await handy.pfcount("hll", "some-other-hll"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 51)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
