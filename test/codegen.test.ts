import { main as generateSchema } from "../codegen/generate-schema";
import { main as generateClient } from "../codegen/generate-client";
import { main as generateTests } from "../codegen/generate-tests";

import * as path from "path";
import * as fs from "fs";
import * as childProcess from "child_process";

// these tests just make sure the codegen has run and is up to date, rather than validating the actual output
// which is more easily done just by code reviewing git diffs, since the generated code is checked in.
// running this way allows coverage tools to run on codegen so unnecessary parts can be removed etc.

const getChanges = (filepath: string) => {
    expect(fs.existsSync(filepath)).toBe(true);
    return childProcess
        .execSync(`git status --porcelain ${filepath}`, { cwd: path.join(__dirname, "..") })
        .toString()
        .trim();
};

test("generate schema", () => {
    generateSchema();

    expect(getChanges("codegen/schema.json")).toEqual("");
});

test("generate client", () => {
    generateClient();

    expect(getChanges("src/generated/interface.ts")).toEqual("");
});

test("generate tests", () => {
    generateTests();

    expect(getChanges("test/generated")).toEqual("");
});
