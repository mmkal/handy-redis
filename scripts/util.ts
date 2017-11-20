import { stringify as yamlify } from "yamljs";
import { Command } from "./command";
import { EOL } from "os";
import { writeFileSync, existsSync, readdirSync } from "fs";
import { dirname } from "path";
import * as shelljs from "shelljs";

export const tab = `    `;
export const twotabs = `${tab}${tab}`;

export const redisDoc = `scripts/redis-doc`;
export const commandDoc = `${redisDoc}/commands`;

export const indent = (input: string) => input
    .split(/\r?\n/)
    .join(EOL)
    .split(EOL)
    .map(line => `${tab}${line}`)
    .join(EOL);

export const quote = (input: string) => {
    if (!input) {
        return `""`;
    }
    if (input.indexOf(`"`) === -1) {
        return `"${input}"`;
    }
    if (input.indexOf("`") === -1) {
        return `\`${input}\``;
    }
    return JSON.stringify(input);
};

export const makeArrayType = (type: string) =>
    type.match(/\W/) ? `Array<${type}>` : `${type}[]`;

export const simplifyName = (name: string) => name
    .toLowerCase()
    .replace(/(?:^([0-9])|[^a-zA-Z0-9_$])/g, "_$1");

export const getDocs = (command: Command) => yamlify(command)
    .trim()
    .replace(/\r?\n/g, `${EOL}     *${EOL}     * `); // docs render better when they're double-spaced

export const run = async (task: () => void | Promise<any>) => {
    try {
        await task();
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

export const buildScript = async (module: NodeModule, task: () => void | Promise<any>) => {
    if (require.main === module) {
        await run(task);
    }
};

export const writeFile = (filename: string, contents: string) => {
    const filedir = dirname(filename);
    if (!existsSync(filedir)) {
        shelljs.mkdir("-p", filedir);
    }
    if (!contents.endsWith("\n")) {
        contents += EOL;
    }
    writeFileSync(filename, contents, "utf8");
};

export const readdirWithPaths = (dir: string) => {
    if (!existsSync(dir)) {
        return [];
    }
    return readdirSync(dir).map(f => `${dir}/${f}`);
};
