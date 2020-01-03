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

it("scripts/redis-doc/commands/geoencode.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/geoencode.md");
    let snapshot: any;
    const commands = [
        `await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo")`,
        `await client.zscore("Sicily", "Palermo")`,
        "// not implemented by node redis: await client.geoencode(`Couldn't format arguments: Couldn't find command \"geoencode\"`)",
    ];
    const output: any[] = [];
    try {
        output.push(await client.geoadd("Sicily", 13.361389, 38.115556, "Palermo"));
        output.push(await client.zscore("Sicily", "Palermo"));
        output.push("// not implemented by node redis: await client.geoencode(`Couldn't format arguments: Couldn't find command \"geoencode\"`)");
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 121)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
