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

it("scripts/redis-doc/commands/rpop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/rpop.md");
    let snapshot: any;
    const commands = [
        `await client.rpush("mylist", "one")`,
        `await client.rpush("mylist", "two")`,
        `await client.rpush("mylist", "three")`,
        `await client.rpop("mylist")`,
        `await client.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.rpush("mylist", "one"));
        output.push(await client.rpush("mylist", "two"));
        output.push(await client.rpush("mylist", "three"));
        output.push(await client.rpop("mylist"));
        output.push(await client.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 38)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
