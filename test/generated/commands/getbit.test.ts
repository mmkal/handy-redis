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

it("scripts/redis-doc/commands/getbit.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/getbit.md");
    let snapshot: any;
    const commands = [
        `await handy.setbit("mykey", 7, "1")`,
        `await handy.getbit("mykey", 0)`,
        `await handy.getbit("mykey", 7)`,
        `await handy.getbit("mykey", 100)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.setbit("mykey", 7, "1"));
        output.push(await handy.getbit("mykey", 0));
        output.push(await handy.getbit("mykey", 7));
        output.push(await handy.getbit("mykey", 100));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 36)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
