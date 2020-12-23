import { toArgs as toArgs_, stringifyWithVarArgs, decodeTokens, getExistingSnapshots } from "../generate-tests";
import * as fsSyncer from "fs-syncer";
import * as path from "path";

const toArgs = (cmd: string, { debug = false } = {}) => {
    const r = toArgs_(cmd.split(" "));
    return r.decoded && !debug ? r.decoded : { command: r.command, context: r.contexts[0] };
};

describe("toArgs", () => {
    let i = 0;

    test("varargs at the end of argument lists are flattened by stringifyWithVarArgs", () => {
        const result = toArgs_("BITOP AND dest key1 key2".split(" "));
        expect(JSON.stringify(result.decoded!)).toEqual(JSON.stringify(["AND", "dest", ["key1", "key2"]]));
        expect(stringifyWithVarArgs(result.decoded!)).toEqual(JSON.stringify(["AND", "dest", "key1", "key2"]));
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar")).toMatchInlineSnapshot(`
            Array [
              "foo",
              "bar",
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar EX 123")).toMatchInlineSnapshot(`
            Array [
              "foo",
              "bar",
              Array [
                "EX",
                123,
              ],
            ]
        `);
    });
    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar WRONG 123")).toMatchInlineSnapshot(`
            Object {
              "command": "set",
              "context": Array [
                "decoding set overload 0 (key,value): { name: 'key', schema: { title: 'key', type: 'string' } },{ name: 'value', schema: { title: 'value', type: 'string' } }",
                "foo successfully decoded as key (string). Decoded value foo. Tokens remaining [bar,WRONG,123], target args remainin count: 1",
                "bar successfully decoded as value (string). Decoded value bar. Tokens remaining [WRONG,123], target args remainin count: 0",
                "Tokens remain but no target args left! Tokens: WRONG,123",
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo 12 34")).toMatchInlineSnapshot(`
            Array [
              "foo",
              12,
              34,
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("bitcount mykey 0 0")).toMatchInlineSnapshot(`
            Array [
              "mykey",
              Array [
                0,
                0,
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo 1.2 34")).toMatchInlineSnapshot(`
            Object {
              "command": "setbit",
              "context": Array [
                "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { title: 'key', type: 'string' } },{ name: 'offset', schema: { title: 'offset', type: 'integer' } },{ name: 'value', schema: { title: 'value', type: 'integer' } }",
                "foo successfully decoded as key (string). Decoded value foo. Tokens remaining [1.2,34], target args remainin count: 2",
                "1.2 isn't an integer. Decoded as something different: 1",
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo not_an_integer 34")).toMatchInlineSnapshot(`
            Object {
              "command": "setbit",
              "context": Array [
                "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { title: 'key', type: 'string' } },{ name: 'offset', schema: { title: 'offset', type: 'integer' } },{ name: 'value', schema: { title: 'value', type: 'integer' } }",
                "foo successfully decoded as key (string). Decoded value foo. Tokens remaining [not_an_integer,34], target args remainin count: 2",
                "not_an_integer isn't an integer. Decoded as something different: NaN",
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("sinterstore dest key1 key2")).toMatchInlineSnapshot(`
            Array [
              "dest",
              Array [
                "key1",
                "key2",
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("sinterstore dest key1 key2 key3 key4")).toMatchInlineSnapshot(`
            Array [
              "dest",
              Array [
                "key1",
                "key2",
                "key3",
                "key4",
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("exists mykey")).toMatchInlineSnapshot(`
            Array [
              Array [
                "mykey",
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("zadd myzset 1 one")).toMatchInlineSnapshot(`
            Array [
              "myzset",
              Array [
                Array [
                  1,
                  "one",
                ],
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("zadd myzset 1 one 2 two")).toMatchInlineSnapshot(`
            Array [
              "myzset",
              Array [
                Array [
                  1,
                  "one",
                ],
                Array [
                  2,
                  "two",
                ],
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("SORT mylist BY weight_* GET object_*")).toMatchInlineSnapshot(`
            Array [
              "mylist",
              Array [
                "BY",
                "weight_*",
              ],
              Array [
                Array [
                  "GET",
                  "object_*",
                ],
              ],
            ]
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("HINCRBYFLOAT mykey field 0.1")).toMatchInlineSnapshot(`
            Array [
              "mykey",
              "field",
              0.1,
            ]
        `);
    });
});

describe("potential future edge cases", () => {
    test("unexpected types aren't handled", () => {
        const decoded = decodeTokens(
            ["test"],
            [{ name: "testarg", schema: { type: "thistypedoesnotreallyexist" as never } }],
            []
        );

        expect(decoded).toMatchInlineSnapshot(`
            Object {
              "context": Array [
                "Not smart enough to deal with { name: 'testarg', schema: { type: 'thistypedoesnotreallyexist' } } yet",
              ],
              "error": true,
              "tokens": Array [
                "test",
              ],
            }
        `);
    });

    test("object args aren't handled", () => {
        const decoded = decodeTokens(["test"], [{ name: "testarg", schema: { type: "object" } }], []);

        expect(decoded).toMatchInlineSnapshot(`
            Object {
              "context": Array [
                "Not smart enough to deal with { name: 'testarg', schema: { type: 'object' } } yet",
              ],
              "error": true,
              "tokens": Array [
                "test",
              ],
            }
        `);
    });

    test("array errors are propagated", () => {
        const decoded = decodeTokens(
            ["test"],
            [
                {
                    name: "testarg",
                    schema: {
                        type: "array",
                        items: {
                            type: "thistypedoesnotreallyexist" as never,
                        },
                    },
                },
            ],
            []
        );

        expect(decoded).toMatchInlineSnapshot(`
            Object {
              "context": Array [
                "Decoding array item",
                "Not smart enough to deal with { name: 'testarg', schema: { type: 'thistypedoesnotreallyexist' } } yet",
              ],
              "error": true,
              "tokens": Array [
                "test",
              ],
            }
        `);
    });

    test("array bails early when no tokens to consume", () => {
        const decoded = decodeTokens(
            [],
            [
                {
                    name: "testarg",
                    schema: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },
                },
            ],
            []
        );

        expect(decoded).toMatchInlineSnapshot(`
            Object {
              "context": Array [
                "Target args remain but no tokens left! Target args [ { name: 'testarg', schema: { type: 'array', items: { type: 'string' } } } ]",
              ],
              "error": true,
            }
        `);
    });
});

describe("inline snapshot parsing", () => {
    test("get existing snapshots returns empty array when file doesn't exist", () => {
        expect(getExistingSnapshots(["this/path/does/not/exist.test.ts"])).toEqual([]);
    });

    test("empty snapshots", () => {
        const syncer = fsSyncer.jest.jestFixture({
            "test.ts.txt": `
              test("no snapshot, () => {
                expect("no snapshot).toMatchInlineSnapshot();
              });

              test("empty string snapshot", () => {
                expect("empty snapshot").toMatchInlineSnapshot(\`\`);
              });
            `,
        });

        syncer.sync();

        expect(getExistingSnapshots([path.join(syncer.baseDir, "test.ts.txt")])).toEqual(["", "``"]);
    });
});
