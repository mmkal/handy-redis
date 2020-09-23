import { toArgs as toArgs_ } from "../generate-usages";

const toArgs = (cmd: string, { debug = false } = {}) => {
    const r = toArgs_(cmd.split(" "));
    return "decoded" in r && !debug ? r.decoded : { command: r.command, context: r.contexts[0] };
};

describe("toArgs", () => {
    let i = 0;

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
                "decoding set overload 0 (key,value): { name: 'key', schema: { type: 'string' } },{ name: 'value', schema: { type: 'string' } }",
                "foo successfully decoded as key (string). Tokens remaining [bar,WRONG,123], target args remaining count: 1",
                "bar successfully decoded as value (string). Tokens remaining [WRONG,123], target args remaining count: 0",
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
                "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { type: 'string' } },{ name: 'offset', schema: { type: 'integer' } },{ name: 'value', schema: { type: 'integer' } }",
                "foo successfully decoded as key (string). Tokens remaining [1.2,34], target args remaining count: 2",
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
                "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { type: 'string' } },{ name: 'offset', schema: { type: 'integer' } },{ name: 'value', schema: { type: 'integer' } }",
                "foo successfully decoded as key (string). Tokens remaining [not_an_integer,34], target args remaining count: 2",
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
