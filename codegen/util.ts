/* istanbul ignore file */
import * as fs from "fs";
import * as path from "path";
import * as prettier from "prettier";

export const writeFile = (filepath: string, contents: string) => {
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
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
