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

it("scripts/redis-doc/commands/pfadd.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pfadd.md");
    let snapshot: any;
    const commands = [`await client.pfadd("hll", "a", "b", "c", "d", "e", "f", "g")`, `await client.pfcount("hll")`];
    const output: any[] = [];
    try {
        output.push(await client.pfadd("hll", "a", "b", "c", "d", "e", "f", "g"));
        output.push(await client.pfcount("hll"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 61)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
