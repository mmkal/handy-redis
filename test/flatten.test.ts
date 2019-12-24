import { flattenDeep } from "../src/flatten";
import {range} from "lodash";

it("is already flat", () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
});

it("flattens shallowly", () => {
    expect(flattenDeep([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
});

it("flattens deeply", () => {
    expect(flattenDeep([1, 2, [3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5]);
});

it("flattens huge arrays", () => {
    const huge = range(0, 500000);
    expect(flattenDeep(huge)).toEqual(huge);
});
