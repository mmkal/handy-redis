import { stringify as yamlify } from "yamljs";
import { Command, BasicCommandInfo, Argument, TypeScriptArg, CommandCollection } from "./types";
import { getOverloads } from "../overloads";
import { EOL } from "os";
import { readFileSync } from "fs";
import { redisDoc, simplifyName, makeArrayType, getDocs } from "../util";
import * as _ from "lodash";
import { createClient } from "redis";
import { flattenDeep } from "../../src/flatten";

const warn = (...args: any[]) => {
    // console.warn.apply(null, args);
};
const error: typeof console.error = (...args: any[]) => {
    // console.error.apply(null, args);
};

const typeFor = (arg: Argument): string => {
    if (arg.command) {
        return typeFor({ ...arg, type: flattenDeep([`"${arg.command}"`, arg.type]), command: undefined });
    }
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
                const literalValueRegex = /^"\w+"$/;
                if (literalValueRegex.test(arg.type)) {
                    return arg.type;
                }
                console.warn(`Argument ${JSON.stringify(arg)} has unknown type "${arg.type}"`);
                return "any";
            }
    }
};

const buildTypeScriptCommandInfo = (name: string, command: Command): BasicCommandInfo[] => {
    const baseArgs = (command.arguments || []).map((a, index, all) => {
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
        return {
            ...a,
            name: argName,
        } as Argument;
    });

    return getOverloads(baseArgs).map(allArgs => {
        const numMultiples = allArgs.filter(a => a.multiple).length;
        let firstMultipleIndex = allArgs.findIndex(a => !!a.multiple);
        if (firstMultipleIndex === -1) {
            firstMultipleIndex = allArgs.length;
        }
        if (firstMultipleIndex >= 0 && firstMultipleIndex !== allArgs.length - numMultiples) {
            error(`"multiple" argument appears before the end of argument list:${EOL}${yamlify(allArgs)}.`);
            return null;
        }

        const typescriptArgs: TypeScriptArg[] = allArgs
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

        const docs = getDocs(command);

        const args = typescriptArgs.map(a => ({
            ...a,
            name: a.name.replace(/\?s/g, "s"), // fix things like `arg?s: string[]`
        }));

        return {
            original: command,
            name,
            docs,
            args,
        };
    })
    .filter(x => x)
    .map(x => x!);
};

export const getBasicCommands = _.once(() => {
    const referenceClient: { [methodName: string]: any } = createClient();
    const commandsJson = readFileSync(`${redisDoc}/commands.json`, "utf8");
    const commandCollection: CommandCollection = JSON.parse(commandsJson);

    const basicCommands = _.flatten(Object.keys(commandCollection).map(name => {
        const methodName = simplifyName(name);
        if (typeof referenceClient[methodName] !== "function") {
            warn(`node_redis doesn't support command "${name}"`);
            return [];
        }
        const command = commandCollection[name];

        return buildTypeScriptCommandInfo(methodName, command);
    }));

    const commandCommandIndex = basicCommands.findIndex(c => c.name === "command");
    const existingCommandCommand = basicCommands[commandCommandIndex];
    const commandCommand: BasicCommandInfo = {
        args: [{ name: "...args", type: "any[]"  }],
        docs: existingCommandCommand.docs,
        name: existingCommandCommand.name,
        original: existingCommandCommand.original,
    };
    basicCommands.splice(commandCommandIndex, 0, commandCommand);

    return basicCommands;
});
