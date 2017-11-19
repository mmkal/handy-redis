import { test } from "ava";
import { quote } from "../util";

test("quote empty string", t => t.is(quote(""), `""`));

test("quote with double quotes", t => t.is(quote(`hello "foo"`), `\`hello "foo"\``));

test("quote with backtick", t => t.is(quote("hello `foo`"), `"hello \`foo\`"`));

test("quote with backtick and double quotes", t => {
    t.is(quote(`hello \`foo\` you are "bar"`), "`hello \`foo\` you are \"bar\"`");
});
