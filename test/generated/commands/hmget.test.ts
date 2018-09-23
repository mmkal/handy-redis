import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let handy: IHandyRedis;
beforeAll(async () => {
    handy = createHandyClient();
    await handy.ping("ping");
});
beforeEach(async () => {
    await handy.flushall();
});

it("scripts/redis-doc/commands/hmget.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hmget.md");
    let snapshot: any;
    const commands = [
        `await handy.hset("myhash", "field1", "Hello")`,
        `await handy.hset("myhash", "field2", "World")`,
        `await handy.hmget("myhash", "field1", "field2", "nofield")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.hset("myhash", "field1", "Hello"));
        output.push(await handy.hset("myhash", "field2", "World"));
        output.push(await handy.hmget("myhash", "field1", "field2", "nofield"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 59)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
