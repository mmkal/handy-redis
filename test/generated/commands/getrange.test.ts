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

it("scripts/redis-doc/commands/getrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getrange.md");
    let snapshot: any;
    const commands = [
        `await client.set("mykey", "This is a string")`,
        `await client.getrange("mykey", 0, 3)`,
        `await client.getrange("mykey", -3, -1)`,
        `await client.getrange("mykey", 0, -1)`,
        `await client.getrange("mykey", 10, 100)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.set("mykey", "This is a string"));
        output.push(await client.getrange("mykey", 0, 3));
        output.push(await client.getrange("mykey", -3, -1));
        output.push(await client.getrange("mykey", 0, -1));
        output.push(await client.getrange("mykey", 10, 100));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 46)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
