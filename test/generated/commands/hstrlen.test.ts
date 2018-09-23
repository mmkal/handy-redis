import { zip, padEnd } from "lodash";
import { IHandyRedis, createHandyClient } from "../../../src";
import { getOverride } from "../../_manual-overrides";
let client: IHandyRedis;
beforeAll(async () => {
    client = createHandyClient();
    await client.ping("ping");
});
beforeEach(async () => {
    await client.flushall();
});

it("scripts/redis-doc/commands/hstrlen.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/hstrlen.md");
    let snapshot: any;
    const commands = [
        `await client.hmset("myhash", ["f1", "HelloWorld"], ["f2", "99"], ["f3", "-256"])`,
        `await client.hstrlen("myhash", "f1")`,
        `await client.hstrlen("myhash", "f2")`,
        `await client.hstrlen("myhash", "f3")`,
    ];
    const output: any[] = [];
    try {
        output.push(await client.hmset("myhash", ["f1", "HelloWorld"], ["f2", "99"], ["f3", "-256"]));
        output.push(await client.hstrlen("myhash", "f1"));
        output.push(await client.hstrlen("myhash", "f2"));
        output.push(await client.hstrlen("myhash", "f3"));
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 81)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
