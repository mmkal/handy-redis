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

it("scripts/redis-doc/commands/setrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setrange.md");
    let snapshot: any;
    const commands = [
        `await handy.set("key1", "Hello World")`,
        `await handy.setrange("key1", 6, "Redis")`,
        `await handy.get("key1")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("key1", "Hello World"));
        output.push(await handy.setrange("key1", 6, "Redis"));
        output.push(await handy.get("key1"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 41)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
it("scripts/redis-doc/commands/setrange.md example 2", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/setrange.md");
    let snapshot: any;
    const commands = [
        `await handy.setrange("key2", 6, "Redis")`,
        `await handy.get("key2")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.setrange("key2", 6, "Redis"));
        output.push(await handy.get("key2"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 41)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
