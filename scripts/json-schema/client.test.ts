import { overloads } from "./client";

test("overloads", () => {
    expect(
        overloads([
            { name: "optionalA", optional: true, schema: {} },
            { name: "requiredB", optional: false, schema: {} },
            { name: "requiredC", optional: false, schema: {} },
            { name: "optionalD", optional: true, schema: {} },
        ]).map(args => args.map(a => a.name).join(","))
    ).toMatchInlineSnapshot(`
        Array [
          "optionalA,requiredB,requiredC,optionalD",
          "optionalA,requiredB,requiredC",
          "requiredB,requiredC,optionalD",
          "requiredB,requiredC",
        ]
    `);
});
