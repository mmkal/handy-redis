import { quote } from "../json-schema/util";

it("quotes empty string", () => expect(quote("")).toEqual(`""`));

it("quote with double quotes", () => expect(quote(`hello "foo"`)).toEqual(`\`hello "foo"\``));

it("quote with backtick", () => expect(quote("hello `foo`")).toEqual(`"hello \`foo\`"`));

it("quote with backtick and double quotes", () => {
    const original = `hello \`foo\` you are "bar"`;
    expect(quote(original)).toEqual(JSON.stringify(original));
});
