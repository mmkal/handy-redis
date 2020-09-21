import { overloads, formatOverloads } from "./client";
import { schema } from ".";

test("overloads", () => {
    expect(
        overloads([
            { name: "optionalA", optional: true, schema: {} },
            { name: "requiredB", optional: false, schema: {} },
            { name: "requiredC", optional: false, schema: {} },
            { name: "optionalD", optional: true, schema: {} },
            { name: "requiredE", optional: false, schema: {} },
        ]).map((args) => args.map((a) => a.name).join(","))
    ).toMatchInlineSnapshot(`
        Array [
          "requiredB,requiredC,requiredE",
          "requiredB,requiredC,optionalD,requiredE",
          "optionalA,requiredB,requiredC,requiredE",
          "optionalA,requiredB,requiredC,optionalD,requiredE",
        ]
    `);
});

test("formatOverloads", () => {
    expect(formatOverloads("SET", schema.SET)).toMatchInlineSnapshot(`
        Array [
          "
                    /**
                     * Set the string value of a key
                     * - _group_: string
                     * - _complexity_: O(1)
                     * - _since_: 1.0.0
                     */
                    set(key: string,value: string):
                        Promise<(string) | (null)>
                ",
          "
                    /**
                     * Set the string value of a key
                     * - _group_: string
                     * - _complexity_: O(1)
                     * - _since_: 1.0.0
                     */
                    set(key: string,value: string,condition: \\"NX\\"|\\"XX\\"):
                        Promise<(string) | (null)>
                ",
          "
                    /**
                     * Set the string value of a key
                     * - _group_: string
                     * - _complexity_: O(1)
                     * - _since_: 1.0.0
                     */
                    set(key: string,value: string,expiration: \\"EX seconds\\"|\\"PX milliseconds\\"):
                        Promise<(string) | (null)>
                ",
          "
                    /**
                     * Set the string value of a key
                     * - _group_: string
                     * - _complexity_: O(1)
                     * - _since_: 1.0.0
                     */
                    set(key: string,value: string,expiration: \\"EX seconds\\"|\\"PX milliseconds\\",condition: \\"NX\\"|\\"XX\\"):
                        Promise<(string) | (null)>
                ",
        ]
    `);
});
