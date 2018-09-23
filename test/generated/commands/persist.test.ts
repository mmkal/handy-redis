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

it("scripts/redis-doc/commands/persist.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/persist.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "Hello")`,
        `await handy.expire("mykey", 10)`,
        `await handy.ttl("mykey")`,
        `await handy.persist("mykey")`,
        `await handy.ttl("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "Hello"));
        output.push(await handy.expire("mykey", 10));
        output.push(await handy.ttl("mykey"));
        output.push(await handy.persist("mykey"));
        output.push(await handy.ttl("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 34)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
