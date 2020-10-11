import { fuzzers } from "./fuzzify";

test("isFinite", () => {
    expect(fuzzers.isFinite(123)).toEqual("isFinite => true");
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
    expect(fuzzers.ignoreDecimals("Palermo")).toEqual("Palermo");
});
