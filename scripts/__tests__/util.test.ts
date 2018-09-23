import { test } from "ava";
import { quote } from "../util";

it("quotes empty string", () => expect(quote("")).toEqual(`""`));

test("quote with double quotes", () => expect(quote(`hello "foo"`)).toEqual(`\`hello "foo"\``));

test("quote with backtick", () => expect(quote("hello `foo`")).toEqual(`"hello \`foo\`"`));

test("quote with backtick and double quotes", () => {
    const original = `hello \`foo\` you are "bar"`;
    expect(quote(original)).toEqual(JSON.stringify(original));
});
