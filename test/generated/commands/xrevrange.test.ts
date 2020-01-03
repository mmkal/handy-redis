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

it("scripts/redis-doc/commands/xrevrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xrevrange.md");
    let snapshot: any;
    const commands = [
        `await client.xadd("writers", "*", ["name", "Virginia"], ["surname", "Woolf"])`,
        `await client.xadd("writers", "*", ["name", "Jane"], ["surname", "Austen"])`,
        `await client.xadd("writers", "*", ["name", "Toni"], ["surname", "Morris"])`,
        `await client.xadd("writers", "*", ["name", "Agatha"], ["surname", "Christie"])`,
        `await client.xadd("writers", "*", ["name", "Ngozi"], ["surname", "Adichie"])`,
        `await client.xlen("writers")`,
        `await client.xrevrange("writers", "+", "-", ["COUNT", 1])`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.xadd("writers", "*", ["name", "Virginia"], ["surname", "Woolf"]));
        output.push(await client.xadd("writers", "*", ["name", "Jane"], ["surname", "Austen"]));
        output.push(await client.xadd("writers", "*", ["name", "Toni"], ["surname", "Morris"]));
        output.push(await client.xadd("writers", "*", ["name", "Agatha"], ["surname", "Christie"]));
        output.push(await client.xadd("writers", "*", ["name", "Ngozi"], ["surname", "Adichie"]));
        output.push(await client.xlen("writers"));
        output.push(await client.xrevrange("writers", "+", "-", ["COUNT", 1]));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 79)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
