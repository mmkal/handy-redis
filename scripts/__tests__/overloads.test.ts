import test from "ava";
import { Argument } from "../command";
import { getOverloads } from "../overloads";

test("get overloads", () => {
    const args: Argument[] = [
        { name: "a", type: "string" },
        { name: "b", type: "string", optional: true },
        { name: "c", type: "string", optional: true },
    ];
    const overloads = getOverloads(args);
    const expected: typeof overloads = [
        args,
        args.filter(a => a.name !== "c"),
        args.filter(a => a.name !== "b"),
        args.filter(a => a.name === "a")
    ];

    expect(overloads).toEqual(expected);
});
