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

it("scripts/redis-doc/commands/pfmerge.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pfmerge.md");
    let snapshot: any;
    const commands = [
        `await client.pfadd("hll1", "foo", "bar", "zap", "a")`,
        `await client.pfadd("hll2", "a", "b", "c", "foo")`,
        `await client.pfmerge("hll3", "hll1", "hll2")`,
        `await client.pfcount("hll3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.pfadd("hll1", "foo", "bar", "zap", "a"));
        output.push(await client.pfadd("hll2", "a", "b", "c", "foo"));
        output.push(await client.pfmerge("hll3", "hll1", "hll2"));
        output.push(await client.pfcount("hll3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 53)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
