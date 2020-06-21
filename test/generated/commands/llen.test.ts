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

it("scripts/redis-doc/commands/llen.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/llen.md");
    let snapshot: any;
    const commands = [
        `await client.lpush("mylist", "World")`,
        `await client.lpush("mylist", "Hello")`,
        `await client.llen("mylist")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.lpush("mylist", "World"));
        output.push(await client.lpush("mylist", "Hello"));
        output.push(await client.llen("mylist"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
