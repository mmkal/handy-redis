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

it("scripts/redis-doc/commands/xlen.md example 1", async () => {
    const overrider = getOverride("scripts/redis-doc/commands/xlen.md");
    let snapshot: any;
    const commands = [
        "// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)",
        "// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)",
        "// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)",
        "// not implemented by node redis: await client.xlen(`Couldn't format arguments: Couldn't find command \"xlen\"`)",
    ];
    const output: any[] = [];
    try {
        output.push("// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)");
        output.push("// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)");
        output.push("// not implemented by node redis: await client.xadd(`Couldn't format arguments: Couldn't find command \"xadd\"`)");
        output.push("// not implemented by node redis: await client.xlen(`Couldn't format arguments: Couldn't find command \"xlen\"`)");
        const overridenOutput = overrider(output);
        snapshot = zip(commands, overridenOutput)
            .map(pair => `${padEnd(pair[0], 111)} => ${JSON.stringify(pair[1])}`)
            .map(expression => expression.replace(/['"]/g, q => q === `'` ? `"` : `'`));
    } catch (err) {
        snapshot = { _commands: commands, _output: output, err };
    }
    expect(snapshot).toMatchSnapshot();
});
