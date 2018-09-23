import { _isFinite, _typeOf, _sorted, _firstTwoCharacters } from "./_manual-overrides";

it("isFinite", () => expect(_isFinite(123)).toEqual("isFinite => true"));
it("typeof", () => expect(_typeOf("foo")).toEqual("typeOf => string"));
it("sorted", () => expect(_sorted([3, 2, 1])).toEqual("sorted => [ 1, 2, 3 ]"));
it("firstTwoCharacters", () => expect(_firstTwoCharacters("hello")).toEqual("firstTwoCharacters => he***"));
