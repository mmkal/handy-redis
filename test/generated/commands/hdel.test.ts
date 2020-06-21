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

it("scripts/redis-doc/commands/hdel.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hdel.md");
    let snapshot: any;
    const commands = [
        `await client.hset("myhash", ["field1", "foo"])`,
        `await client.hdel("myhash", "field1")`,
        `await client.hdel("myhash", "field2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.hset("myhash", ["field1", "foo"]));
        output.push(await client.hdel("myhash", "field1"));
        output.push(await client.hdel("myhash", "field2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 47)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
