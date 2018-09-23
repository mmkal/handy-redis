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

it("scripts/redis-doc/commands/pfmerge.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pfmerge.md");
    let snapshot: any;
    const commands = [
        `await handy.pfadd("hll1", "foo", "bar", "zap", "a")`,
        `await handy.pfadd("hll2", "a", "b", "c", "foo")`,
        `await handy.pfmerge("hll3", "hll1", "hll2")`,
        `await handy.pfcount("hll3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.pfadd("hll1", "foo", "bar", "zap", "a"));
        output.push(await handy.pfadd("hll2", "a", "b", "c", "foo"));
        output.push(await handy.pfmerge("hll3", "hll1", "hll2"));
        output.push(await handy.pfcount("hll3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 52)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
