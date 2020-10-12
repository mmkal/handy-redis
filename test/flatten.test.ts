import { flattenDeep } from "../src/flatten";
import { range, isEqual } from "lodash";

it("is already flat", () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
});

it("flattens shallowly", () => {
    expect(flattenDeep([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
});

it("flattens deeply", () => {
    expect(flattenDeep([1, 2, [3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5]);
});

// note: don't try to use `expect(...).toEqual(...)` with arrays as big as the following
// if the test fails, the output will destroy your terminal
it("flattens huge arrays", () => {
    const huge = range(0, 500000);
    expect(isEqual(flattenDeep(huge), huge)).toBe(true);
});

it("flattens huge nested arrays", () => {
    const huge = range(0, 500000);
    const nested = [[[[[huge]]]]];
    expect(isEqual(flattenDeep(nested), huge)).toBe(true);
});
