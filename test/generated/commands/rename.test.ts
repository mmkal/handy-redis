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

it("scripts/redis-doc/commands/rename.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/rename.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "Hello")`,
        `await handy.rename("mykey", "myotherkey")`,
        `await handy.get("myotherkey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "Hello"));
        output.push(await handy.rename("mykey", "myotherkey"));
        output.push(await handy.get("myotherkey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 42)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
