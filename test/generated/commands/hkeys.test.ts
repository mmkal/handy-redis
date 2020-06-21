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

it("scripts/redis-doc/commands/hkeys.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hkeys.md");
    let snapshot: any;
    const commands = [
        `await client.hset("myhash", ["field1", "Hello"])`,
        `await client.hset("myhash", ["field2", "World"])`,
        `await client.hkeys("myhash")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.hset("myhash", ["field1", "Hello"]));
        output.push(await client.hset("myhash", ["field2", "World"]));
        output.push(await client.hkeys("myhash"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 49)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
