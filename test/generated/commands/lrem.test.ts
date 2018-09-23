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

it("scripts/redis-doc/commands/lrem.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/lrem.md");
    let snapshot: any;
    const commands = [
        `await handy.rpush("mylist", "hello")`,
        `await handy.rpush("mylist", "hello")`,
        `await handy.rpush("mylist", "foo")`,
        `await handy.rpush("mylist", "hello")`,
        `await handy.lrem("mylist", -2, "hello")`,
        `await handy.lrange("mylist", 0, -1)`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.rpush("mylist", "foo"));
        output.push(await handy.rpush("mylist", "hello"));
        output.push(await handy.lrem("mylist", -2, "hello"));
        output.push(await handy.lrange("mylist", 0, -1));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 40)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchInlineSnapshot();
});
