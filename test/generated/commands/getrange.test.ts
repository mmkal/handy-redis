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

it("scripts/redis-doc/commands/getrange.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getrange.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "This is a string")`,
        `await handy.getrange("mykey", 0, 3)`,
        `await handy.getrange("mykey", -3, -1)`,
        `await handy.getrange("mykey", 0, -1)`,
        `await handy.getrange("mykey", 10, 100)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "This is a string"));
        output.push(await handy.getrange("mykey", 0, 3));
        output.push(await handy.getrange("mykey", -3, -1));
        output.push(await handy.getrange("mykey", 0, -1));
        output.push(await handy.getrange("mykey", 10, 100));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 45)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
