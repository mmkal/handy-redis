import test from "ava";
import { flattenDeep } from "../flatten";

test("already flat", t => {
    t.deepEqual(flattenDeep([1, 2, 3]), [1, 2, 3]);
});

test("flatten shallow", t => {
    t.deepEqual(flattenDeep([1, 2, [3, 4]]), [1, 2, 3, 4]);
});

test("flatten deep", t => {
    t.deepEqual(flattenDeep([1, 2, [3, [4, [5]]]]), [1, 2, 3, 4, 5]);
});
