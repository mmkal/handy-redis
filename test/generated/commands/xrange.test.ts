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

it("scripts/redis-doc/commands/xrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xrange.md");
    let snapshot: any;
    const commands = [
        `await client.xadd("writers", "*", "name", "Virginia")`,
        `await client.xadd("writers", "*", "name", "Jane")`,
        `await client.xadd("writers", "*", "name", "Toni")`,
        `await client.xadd("writers", "*", "name", "Agatha")`,
        `await client.xadd("writers", "*", "name", "Ngozi")`,
        `await client.xlen("writers")`,
        `await client.xrange("writers", "-", "+", ["COUNT", 2])`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.xadd("writers", "*", "name", "Virginia"));
        output.push(await client.xadd("writers", "*", "name", "Jane"));
        output.push(await client.xadd("writers", "*", "name", "Toni"));
        output.push(await client.xadd("writers", "*", "name", "Agatha"));
        output.push(await client.xadd("writers", "*", "name", "Ngozi"));
        output.push(await client.xlen("writers"));
        output.push(await client.xrange("writers", "-", "+", ["COUNT", 2]));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 55)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
