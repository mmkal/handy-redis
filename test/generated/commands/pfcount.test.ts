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

it("scripts/redis-doc/commands/pfcount.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pfcount.md");
    let snapshot: any;
    const commands = [
        `await client.pfadd("hll", "foo", "bar", "zap")`,
        `await client.pfadd("hll", "zap", "zap", "zap")`,
        `await client.pfadd("hll", "foo", "bar")`,
        `await client.pfcount("hll")`,
        `await client.pfadd("some-other-hll", "1", "2", "3")`,
        `await client.pfcount("hll", "some-other-hll")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.pfadd("hll", "foo", "bar", "zap"));
        output.push(await client.pfadd("hll", "zap", "zap", "zap"));
        output.push(await client.pfadd("hll", "foo", "bar"));
        output.push(await client.pfcount("hll"));
        output.push(await client.pfadd("some-other-hll", "1", "2", "3"));
        output.push(await client.pfcount("hll", "some-other-hll"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 52)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
