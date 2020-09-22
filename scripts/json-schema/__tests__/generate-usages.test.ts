import { toArgs } from "../generate-usages";

describe("toArgs", () => {
    let i = 0;

    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "bar",
              ],
              "s": Array [
                "foo",
                "bar",
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar EX 123".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "bar",
                "EX",
                "123",
              ],
              "s": Array [
                "foo",
                "bar",
                Array [
                  "EX",
                  "123",
                ],
              ],
            }
        `);
    });
    test(`snapshot${++i}`, () => {
        expect(toArgs("set foo bar WRONG 123".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "bar",
                "WRONG",
                "123",
              ],
              "s": Array [
                Object {
                  "context": Array [
                    "decoding set overload 0 (key,value): { name: 'key', schema: { type: 'string' } },{ name: 'value', schema: { type: 'string' } }",
                    "foo successfully decoded as key. Tokens remaining [bar,WRONG,123], target args remaining count: 1",
                    "bar successfully decoded as value. Tokens remaining [WRONG,123], target args remaining count: 0",
                    "Tokens remain but no target args left! Tokens: WRONG,123",
                  ],
                  "error": true,
                },
                Object {
                  "context": Array [
                    "decoding set overload 1 (key,value,condition): { name: 'key', schema: { type: 'string' } },{ name: 'value', schema: { type: 'string' } },{ name: 'condition', optional: true, schema: { type: 'string', enum: [ 'NX', 'XX' ] } }",
                    "foo successfully decoded as key. Tokens remaining [bar,WRONG,123], target args remaining count: 2",
                    "bar successfully decoded as value. Tokens remaining [WRONG,123], target args remaining count: 1",
                    "Expected one of NX,XX, got WRONG",
                  ],
                  "error": true,
                  "tokens": Array [
                    "WRONG",
                    "123",
                  ],
                },
                Object {
                  "context": Array [
                    "decoding set overload 2 (key,value,expiration): { name: 'key', schema: { type: 'string' } },{ name: 'value', schema: { type: 'string' } },{ name: 'expiration', optional: true, schema: { type: 'array', items: [ { type: 'string', enum: [ 'EX', 'PX' ] }, { type: 'number' } ] }, toString: [Function] }",
                    "foo successfully decoded as key. Tokens remaining [bar,WRONG,123], target args remaining count: 2",
                    "bar successfully decoded as value. Tokens remaining [WRONG,123], target args remaining count: 1",
                    "Decoding tuple items",
                    "Expected one of EX,PX, got WRONG",
                  ],
                  "error": true,
                  "tokens": Array [
                    "WRONG",
                    "123",
                  ],
                },
                Object {
                  "context": Array [
                    "decoding set overload 3 (key,value,expiration,condition): { name: 'key', schema: { type: 'string' } },{ name: 'value', schema: { type: 'string' } },{ name: 'expiration', optional: true, schema: { type: 'array', items: [ { type: 'string', enum: [ 'EX', 'PX' ] }, { type: 'number' } ] }, toString: [Function] },{ name: 'condition', optional: true, schema: { type: 'string', enum: [ 'NX', 'XX' ] } }",
                    "foo successfully decoded as key. Tokens remaining [bar,WRONG,123], target args remaining count: 3",
                    "bar successfully decoded as value. Tokens remaining [WRONG,123], target args remaining count: 2",
                    "Decoding tuple items",
                    "Expected one of EX,PX, got WRONG",
                  ],
                  "error": true,
                  "tokens": Array [
                    "WRONG",
                    "123",
                  ],
                },
              ],
            }
        `);
    });
    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo 12 34".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "12",
                "34",
              ],
              "s": Array [
                "foo",
                "12",
                "34",
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo 1.2 34".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "1.2",
                "34",
              ],
              "s": Array [
                Object {
                  "context": Array [
                    "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { type: 'string' } },{ name: 'offset', schema: { type: 'integer' } },{ name: 'value', schema: { type: 'integer' } }",
                    "foo successfully decoded as key. Tokens remaining [1.2,34], target args remaining count: 2",
                    "1.2 isn't an integer. Decoded as something different: 1",
                  ],
                  "error": true,
                },
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("setbit foo not_an_integer 34".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "foo",
                "not_an_integer",
                "34",
              ],
              "s": Array [
                Object {
                  "context": Array [
                    "decoding setbit overload 0 (key,offset,value): { name: 'key', schema: { type: 'string' } },{ name: 'offset', schema: { type: 'integer' } },{ name: 'value', schema: { type: 'integer' } }",
                    "foo successfully decoded as key. Tokens remaining [not_an_integer,34], target args remaining count: 2",
                    "not_an_integer isn't an integer. Decoded as something different: NaN",
                  ],
                  "error": true,
                },
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("sinterstore dest key1 key2".split(" "))).toMatchInlineSnapshot(`
                      Object {
                        "args": Array [
                          "dest",
                          "key1",
                          "key2",
                        ],
                        "s": Array [
                          "dest",
                          Array [
                            "key1",
                            "key2",
                          ],
                        ],
                      }
              `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("sinterstore dest key1 key2 key3 key4".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "dest",
                "key1",
                "key2",
                "key3",
                "key4",
              ],
              "s": Array [
                "dest",
                Array [
                  "key1",
                  "key2",
                  "key3",
                  "key4",
                ],
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("zadd myzset 1 one".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "myzset",
                "1",
                "one",
              ],
              "s": Array [
                "myzset",
                Array [
                  Array [
                    "1",
                    "one",
                  ],
                ],
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("zadd myzset 1 one 2 two".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "myzset",
                "1",
                "one",
                "2",
                "two",
              ],
              "s": Array [
                "myzset",
                Array [
                  Array [
                    "1",
                    "one",
                  ],
                  Array [
                    "2",
                    "two",
                  ],
                ],
              ],
            }
        `);
    });

    test(`snapshot${++i}`, () => {
        expect(toArgs("SORT mylist BY weight_* GET object_*".split(" "))).toMatchInlineSnapshot(`
            Object {
              "args": Array [
                "mylist",
                "BY",
                "weight_*",
                "GET",
                "object_*",
              ],
              "s": Array [
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
              ],
            }
        `);
    });
});
