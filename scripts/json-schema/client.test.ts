import { overloads } from "./client";

test("overloads", () => {
    expect(
        overloads([
            { name: "optionalA", optional: true, schema: {} },
            { name: "requiredB", optional: false, schema: {} },
            { name: "requiredC", optional: false, schema: {} },
            { name: "optionalD", optional: true, schema: {} },
            { name: "requiredE", optional: false, schema: {} },
        ]).map(args => args.map(a => a.name).join(","))
    ).toMatchInlineSnapshot(`
        Array [
          "optionalA,requiredB,requiredC,optionalD,requiredE",
          "optionalA,requiredB,requiredC,requiredE",
          "requiredB,requiredC,optionalD,requiredE",
          "requiredB,requiredC,requiredE",
        ]
    `);
});
