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

it("scripts/redis-doc/commands/type.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/type.md");
    let snapshot: any;
    const commands = [
        `await handy.set("key1", "value")`,
        `await handy.lpush("key2", "value")`,
        `await handy.sadd("key3", "value")`,
        `await handy.type("key1")`,
        `await handy.type("key2")`,
        `await handy.type("key3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("key1", "value"));
        output.push(await handy.lpush("key2", "value"));
        output.push(await handy.sadd("key3", "value"));
        output.push(await handy.type("key1"));
        output.push(await handy.type("key2"));
        output.push(await handy.type("key3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
