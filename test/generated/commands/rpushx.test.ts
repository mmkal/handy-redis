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

it("scripts/redis-doc/commands/rpushx.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/rpushx.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "Hello")`,
        `await handy.rpushx("mylist", "World")`,
        `await handy.rpushx("myotherlist", "World")`,
        `await handy.lrange("mylist", 0, -1)`,
        `await handy.lrange("myotherlist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "Hello"));
        output.push(await handy.rpushx("mylist", "World"));
        output.push(await handy.rpushx("myotherlist", "World"));
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
