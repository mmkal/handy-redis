import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as prettier from "prettier";
import * as lodash from "lodash";

// polyfill .flat() and .flatMap(); they're used in tests
Object.assign(Array.prototype, {
    flat: function () {
        return lodash.flatMap(this, item => item);
    },
    flatMap: function (fn: any) {
        return lodash.flatMap(this, fn);
    },
});

export const format = ({ filepath = __filename, content }: { filepath?: string; content: string }) =>
    prettier.format(content, {
        ...require("../.prettierrc"),
        filepath,
    });

export const writeFile = (filepath: string, content: string) => {
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    content = content.replace(/\r?\n/g, os.EOL);
    try {
        content = format({ filepath, content });
    } catch (e) {
        console.warn(`prettier failed for ${filepath}: ${e}`.slice(0, 200));
    }
    fs.writeFileSync(filepath, content, "utf8");
};

/** dumb util that checks a conidition before running, to avoid needing to istanbul ignore `require.main === module` checks */
export const maybeDo = async <T>(shouldDo: boolean, doIt: () => T | Promise<T>): Promise<void> => {
    if (shouldDo) {
        try {
            await doIt();
            process.exit(0);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
};
