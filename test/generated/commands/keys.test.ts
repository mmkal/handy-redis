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

it("scripts/redis-doc/commands/keys.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/keys.md");
    let snapshot: any;
    const commands = [
        `await client.mset(["firstname", "Jack"], ["lastname", "Stuntman"], ["age", "35"])`,
        `await client.keys("*name*")`,
        `await client.keys("a??")`,
        `await client.keys("*")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.mset(["firstname", "Jack"], ["lastname", "Stuntman"], ["age", "35"]));
        output.push(await client.keys("*name*"));
        output.push(await client.keys("a??"));
        output.push(await client.keys("*"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 82)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
