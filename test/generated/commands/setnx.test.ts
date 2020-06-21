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

it("scripts/redis-doc/commands/setnx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setnx.md");
    let snapshot: any;
    const commands = [
        `await client.setnx("mykey", "Hello")`,
        `await client.setnx("mykey", "World")`,
        `await client.get("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.setnx("mykey", "Hello"));
        output.push(await client.setnx("mykey", "World"));
        output.push(await client.get("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 37)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => (q === `'` ? `"` : `'`)));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
