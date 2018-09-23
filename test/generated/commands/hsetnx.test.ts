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

it("scripts/redis-doc/commands/hsetnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hsetnx.md");
    let snapshot: any;
    const commands = [
        `await client.hsetnx("myhash", "field", "Hello")`,
        `await client.hsetnx("myhash", "field", "World")`,
        `await client.hget("myhash", "field")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.hsetnx("myhash", "field", "Hello"));
        output.push(await client.hsetnx("myhash", "field", "World"));
        output.push(await client.hget("myhash", "field"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 48)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
