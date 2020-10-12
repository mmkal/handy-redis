import { fuzzers } from "./fuzzify";

test("ignoreNumbers", () => {
    expect(fuzzers.ignoreNumbers(123)).toEqual("ignoreNumbers => ???");
    expect(fuzzers.ignoreNumbers("hello 123")).toEqual("ignoreNumbers => hello ???");
    expect(fuzzers.ignoreNumbers("hello goodbye")).toEqual("hello goodbye");
});

test("typeof", () => {
    expect(fuzzers.typeOf("foo")).toEqual("typeOf => string");
});

test("sorted", () => {
    expect(fuzzers.sorted([3, 2, 1])).toEqual("sorted => [ 1, 2, 3 ]");
});

test("firstTwoCharacters", () => {
    expect(fuzzers.firstTwoCharacters("hello")).toEqual("firstTwoCharacters => he***");
});

test("leaves irrelevant input alone", () => {
    expect(fuzzers.ignoreDecimals(["Palermo"])).toEqual(["Palermo"]);
});
