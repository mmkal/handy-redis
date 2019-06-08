import { getOverloads } from "../scripts/overloads";

test("overloads for empty arguments", () => {
    expect(getOverloads([])).toMatchInlineSnapshot(`
        Array [
          Array [],
        ]
    `);
});

test("overloads for non-empty arguments", () => {
    expect(getOverloads([{ name: "foo", type: "string" }]))
        .toMatchInlineSnapshot(`
        Array [
          Array [
            Object {
              "name": "foo",
              "type": "string",
            },
          ],
        ]
    `);
});
