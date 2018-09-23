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

it("scripts/redis-doc/commands/llen.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/llen.md");
    let snapshot: any;
    const commands = [
        `await handy.lpush("mylist", "World")`,
        `await handy.lpush("mylist", "Hello")`,
        `await handy.llen("mylist")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.lpush("mylist", "World"));
        output.push(await handy.lpush("mylist", "Hello"));
        output.push(await handy.llen("mylist"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 37)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
