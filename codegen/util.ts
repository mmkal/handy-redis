/* istanbul ignore file */
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as prettier from "prettier";

export const writeFile = (filepath: string, contents: string) => {
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    contents = contents.replace(/\r?\n/g, os.EOL);
    try {
        contents = prettier.format(contents, {
            ...require("../.prettierrc"),
            filepath,
        });
    } catch (e) {
        console.warn(`prettier failed for ${filepath}: ${e}`.slice(0, 200));
    }
    fs.writeFileSync(filepath, contents, "utf8");
};

/** dumb util that checks a conidition before running, to avoid needing to istanbul ignore `require.main === module` checks */
export const maybeDo = async <T>(shouldDo: boolean, doIt: () => T | Promise<T>): Promise<T | null> => {
    if (shouldDo) {
        return doIt()
    }
    return null
}