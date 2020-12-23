import { writeFile, maybeDo } from "../util";
import * as fs from "fs";
import * as path from "path";

jest.mock("fs");
const mockWarn = jest.spyOn(console, "warn").mockReset();

beforeEach(() => {
    jest.resetAllMocks();
});

test("writeFile makes directory first", () => {
    writeFile(__filename, ``);

    expect(fs.mkdirSync).toHaveBeenCalledWith(path.dirname(__filename), { recursive: true });
});

test("writeFile runs prettier on content", () => {
    writeFile(__filename, `console.log('a')`);

    expect(fs.writeFileSync).toHaveBeenCalledWith(__filename, `console.log("a");\n`, "utf8");
});

test("writeFile still writes when prettier failes", () => {
    writeFile(__filename, `this is a syntax error!`);

    expect(fs.writeFileSync).toHaveBeenCalledWith(__filename, `this is a syntax error!`, "utf8");
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockWarn.mock.calls).toEqual([[expect.stringMatching(/prettier failed for .*.ts: SyntaxError/)]]);
    expect(mockWarn.mock.calls).toEqual([[expect.stringMatching(/.*this.*is a syntax error/)]]);
});

test("maybe do", () => {
    const mock = jest.fn();

    maybeDo(false, mock);
    expect(mock).toHaveBeenCalledTimes(0);

    maybeDo(true, mock);
    expect(mock).toHaveBeenCalledTimes(1);
});
