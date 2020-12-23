import { schema } from "../..";
import { formatOverloads } from "../../generate-client";
import { fixArrayRepliesManually, fixScoreValues } from "../schema";

test("detected generic arrays", () => {
    const warn = jest.spyOn(console, "warn").mockReset();
    process.env.FIND_GENERIC_ARRAYS = "1";

    fixArrayRepliesManually(schema);

    expect(warn.mock.calls.map(([c]) => c).join("\n")).toMatchInlineSnapshot(`
        "COMMAND has a generic array return type
        GEORADIUS has a generic array return type
        HELLO has a generic array return type
        HGETALL has a generic array return type
        PUBSUB has a generic array return type
        ROLE has a generic array return type
        SMISMEMBER has a generic array return type
        ZDIFF has a generic array return type
        ZINTER has a generic array return type
        ZREVRANGEBYSCORE has a generic array return type
        ZUNION has a generic array return type
        XRANGE has a generic array return type
        XREVRANGE has a generic array return type
        XREAD has a generic array return type
        XCLAIM has a generic array return type
        XPENDING has a generic array return type"
    `);
});

test("score value fixing will throw if expected argument isn't found", () => {
    const shouldThrow = () =>
        fixScoreValues({
            ZRANGEBYSCORE: {
                summary: "fake ZRANGEBYSCORE shim with a missing 'min' arg",
                arguments: [{ name: "notmin", schema: { type: "string" } }],
                return: { type: "string" },
                complexity: "Infinite",
                group: "fake",
                since: "never",
            },
        });

    expect(shouldThrow).toThrowErrorMatchingInlineSnapshot(
        `"Expected command ZRANGEBYSCORE to have number argument called min"`
    );
});

test("score value fixing will throw if expected argument has wrong type", () => {
    const shouldThrow = () =>
        fixScoreValues({
            ZRANGEBYSCORE: {
                summary: "fake ZRANGEBYSCORE shim with a changed 'min' arg",
                arguments: [{ name: "min", schema: { type: "string" } }],
                return: { type: "string" },
                complexity: "Infinite",
                group: "fake",
                since: "never",
            },
        });

    expect(shouldThrow).toThrowErrorMatchingInlineSnapshot(
        `"Expected command ZRANGEBYSCORE to have number argument called min"`
    );
});

test("score value fixing will throw if expected command is missing", () => {
    const shouldThrow = () => fixScoreValues({});

    expect(shouldThrow).toThrowErrorMatchingInlineSnapshot(
        `"Expected command ZRANGEBYSCORE to have number argument called min"`
    );
});

test("format overloads refuses to handle more than one subcommand", () => {
    const shouldThrow = () => formatOverloads("FOO BAR BAZ", {} as any);

    expect(shouldThrow).toThrowErrorMatchingInlineSnapshot(
        `"More than one FOO subcommand (BAR,BAZ). This might be fine, just make sure the name is right before disabling this error."`
    );
});
