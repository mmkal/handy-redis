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

it("scripts/redis-doc/commands/lpop.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lpop.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "one")`,
        `await handy.rpush("mylist", "two")`,
        `await handy.rpush("mylist", "three")`,
        `await handy.lpop("mylist")`,
        `await handy.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "one"));
        output.push(await handy.rpush("mylist", "two"));
        output.push(await handy.rpush("mylist", "three"));
        output.push(await handy.lpop("mylist"));
        output.push(await handy.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 37)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
