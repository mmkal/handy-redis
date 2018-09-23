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

it("scripts/redis-doc/commands/lpushx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lpushx.md");
    let snapshot: any;
    const commands = [
        `await handy.lpush("mylist", "World")`,
        `await handy.lpushx("mylist", "Hello")`,
        `await handy.lpushx("myotherlist", "Hello")`,
        `await handy.lrange("mylist", 0, -1)`,
        `await handy.lrange("myotherlist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.lpush("mylist", "World"));
        output.push(await handy.lpushx("mylist", "Hello"));
        output.push(await handy.lpushx("myotherlist", "Hello"));
        output.push(await handy.lrange("mylist", 0, -1));
        output.push(await handy.lrange("myotherlist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 43)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
