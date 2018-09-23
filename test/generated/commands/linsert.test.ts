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

it("scripts/redis-doc/commands/linsert.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/linsert.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "Hello")`,
        `await handy.rpush("mylist", "World")`,
        `await handy.linsert("mylist", "BEFORE", "World", "There")`,
        `await handy.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "Hello"));
        output.push(await handy.rpush("mylist", "World"));
        output.push(await handy.linsert("mylist", "BEFORE", "World", "There"));
        output.push(await handy.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 58)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
