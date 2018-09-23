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

it("scripts/redis-doc/commands/pexpire.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/pexpire.md");
    let snapshot: any;
    const commands = [
        `await handy.set("mykey", "Hello")`,
        `await handy.pexpire("mykey", 1500)`,
        `await handy.ttl("mykey")`,
        `await handy.pttl("mykey")`,
    ];
    const output: any[] = [];
    try {
        output.push(await handy.set("mykey", "Hello"));
        output.push(await handy.pexpire("mykey", 1500));
        output.push(await handy.ttl("mykey"));
        output.push(await handy.pttl("mykey"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput).map(pair => `${padEnd(pair[0], 35)} => ${JSON.stringify(pair[1])}`);
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
