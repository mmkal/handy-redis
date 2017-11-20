import { test } from "ava";
import { _isFinite, _typeOf, _sorted, _firstTwoCharacters } from "./_manual-overrides";

test("isFinite", t => t.is(_isFinite(123), "isFinite => true"));
test("typeof", t => t.is(_typeOf("foo"), "typeOf => string"));
test("sorted", t => t.is(_sorted([3, 2, 1]), "sorted => [1, 2, 3]"));
test("firstTwoCharacters", t => t.is(_firstTwoCharacters("hello"), "he***"));
