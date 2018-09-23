import { flattenDeep } from "../src/flatten";

it("is already flat", t => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
});

it("flattens shallowly", t => {
    expect(flattenDeep([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
});

it("flattens deeply", t => {
    expect(flattenDeep([1, 2, [3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5]);
});
