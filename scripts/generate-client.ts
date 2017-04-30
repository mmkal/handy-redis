import { exec } from "shelljs";
import { writeFileSync, readFileSync } from "fs";
import * as ifetch from "isomorphic-fetch";
import { EOL } from "os";
import { stringify as yamlify } from "yamljs";
import { createClient } from "redis";

const run = async (task: () => Promise<any>) => {
    try {
        await task();
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

const typeFor = (arg: Argument) => {
    switch (arg.type) {
        case "key":
        case "pattern":
        case "string":
        case "type":
            return "string";
        case "double":
        case "integer":
        case "posix time":
            return "number";
        case "enum":
            return arg.enum!.map(v => JSON.stringify(v)).join(" | ");
        default:
        {
            if (Array.isArray(arg.type)) {
                const types = arg.type.map(t => typeFor({ ...arg, type: t })).join(", ");
                return `[${types}]`;
            }
            console.warn(`Argument ${JSON.stringify(arg)} has unknown type "${arg.type}"`);
            return "any";
        }
    }
};

const makeArrayType = (type: string) =>
    type.match(/\W/) ? `Array<${type}>` : `${type}[]`;

run(() => {
    const referenceClient = createClient();
    const redisDoc = `scripts/redis-doc`;
    const commandsJson = readFileSync(`${redisDoc}/commands.json`, "utf8");
    const commandCollection: CommandCollection = JSON.parse(commandsJson);
    const methods = Object.keys(commandCollection).map(name => {
        const methodName = name.toLowerCase().replace(/(?:^([0-9])|[^a-zA-Z0-9_$])/g, "_$1");
        if (typeof referenceClient[methodName] !== "function") {
            console.warn(`node_redis doesn't support command "${name}"`);
            return ``;
        }
        const command = commandCollection[name];
        const allArgs = (command.arguments || []).map((a, index, all) => {
            const nameParts = new Array<string | number>();
            if (a.name) {
                nameParts.push(a.name);
            }
            if (a.command) {
                nameParts.unshift(a.command);
            }
            const argJson = JSON.stringify(a);
            if (all.map(other => JSON.stringify(other)).indexOf(argJson) !== index) {
                nameParts.push(index + 1);
            }
            if (nameParts.length === 0) {
                nameParts.push("arg");
                nameParts.push(index);
            }
            const argName = nameParts.join("_").replace(/\W/g, "_");
            return <Argument> {
                ...a,
                name: `${argName}${a.optional ? "?" : ""}`,
            };
        });

        const numMultiples = allArgs.filter(a => a.multiple).length;
        let firstMultipleIndex = allArgs.findIndex(a => !!a.multiple);
        if (firstMultipleIndex === -1) {
            firstMultipleIndex = allArgs.length;
        }
        if (firstMultipleIndex >= 0 && firstMultipleIndex !== allArgs.length - numMultiples) {
            console.error(`"multiple" argument appears before the end of argument list:${EOL}${yamlify(allArgs)}.`);
            return ``;
        }

        const typescriptArgs = allArgs
            .slice(0, firstMultipleIndex)
            .map(a => ({ name: a.name, type: typeFor(a) }))
            ;

        if (numMultiples === 1) {
            const lastArg = allArgs[allArgs.length - 1];
            const argName = lastArg.name.replace("argument", "arg");
            typescriptArgs.push({
                name: `...${argName}s`,
                type: makeArrayType(typeFor(lastArg)),
            });
        } else if (numMultiples > 1) {
            const multipleArgs = allArgs.slice(firstMultipleIndex);
            const tupleName = numMultiples === 2 ? "pair" : "tuple";
            const grouping = multipleArgs.map(a => a.name).concat([tupleName]).join("_");
            const groupingsTypes = multipleArgs.map(typeFor).join(", ");
            typescriptArgs.push({
                name: `...${grouping}s`,
                type: makeArrayType(`[${groupingsTypes}]`),
            });
        }
        const argList = typescriptArgs
            .map(a => `${a.name}: ${a.type}`)
            .join(", ")
            .replace(/\?s/g, "s"); // fix things like `arg?s: string[]`

        const docs = yamlify(command)
            .trim()
            .replace(/\r?\n/g, `${EOL}     *${EOL}     * `); // docs render better when they're double-spaced
        return [
            `/**`,
            ` * ${docs}`,
            ` */`,
            `${methodName} (${argList}) {`,
            `    return new Promise((resolve, reject) => {`,
            `       (this.redis as any).${methodName.toLowerCase()}.apply([...arguments, (err, data) => err ? reject(err) : resolve(data)]);`,
            `   });`,
            `}`,
        ].map(line => `    ${line}`).join(EOL);
    });

    const tsClass = [
        `import { RedisClient } from "redis";`,
        `export class HandyRedis {`,
        `    constructor(public redis: RedisClient) {}`,
        ...methods.filter(x => x),
        `}`,
        ``,
    ].join(EOL);

    writeFileSync(`src/generated.ts`, tsClass);

    return Promise.resolve();
});

interface Command {
    summary: string;
    complexity: string;
    arguments?: Argument[];
    since: string;
    group: "string"
        | "connection"
        | "server"
        | "list"
        | "cluster"
        | "generic"
        | "transaction"
        | "scripting"
        | "geo"
        | "hash"
        | "hyperloglog"
        | "pubsub"
        | "set"
        | "sorted_set"
        ;
}

type ArgumentType = "string" | "key" | "enum" | "pattern" | "integer" | "double" | "posix time";

interface Argument {
    name: string;
    type: ArgumentType | ArgumentType[];
    command?: string;
    enum?: string[];
    optional?: boolean;
    multiple?: boolean;
    variadic?: boolean;
}

interface CommandCollection {
    [name: string]: Command;
}
