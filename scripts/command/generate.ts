import { Command, BasicCommandInfo, Argument, TypeScriptArg, CommandCollection } from "./types";
import { getOverloads } from "../overloads";
import { readFileSync } from "fs";
import { redisDoc, simplifyName, makeArrayType, getDocs } from "../util";
import * as _ from "lodash";
import { createClient } from "redis";
import { flattenDeep } from "../../src/flatten";
import { warn } from "../log";

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
        default: {
            if (Array.isArray(arg.type)) {
                const types = arg.type.map(t => typeFor({ ...arg, type: t })).join(", ");
                return `[${types}]`;
            }
            const literalValueRegex = /^"\w+"$/;
            if (literalValueRegex.test(arg.type)) {
                return arg.type;
            }
            warn(`Argument ${JSON.stringify(arg)} has unknown type "${arg.type}"`);
            return "any";
        }
    }
};

const buildTypeScriptCommandInfo = (name: string, command: Command): BasicCommandInfo[] => {
    const baseArgs = (command.arguments || []).map((a, index, all) => {
        const nameParts = new Array<string | number>();
        if (a.command) {
            nameParts.push(a.command);
        }
        if (Array.isArray(a.name)) {
            nameParts.push(...a.name);
        } else if (a.name && a.name.toUpperCase() !== a.command) {
            nameParts.push(a.name);
        }
        const argJson = JSON.stringify(a);
        if (all.map(other => JSON.stringify(other)).indexOf(argJson) !== index) {
            nameParts.push(index + 1);
        }
        if (nameParts.length === 0) {
            nameParts.push("arg");
            nameParts.push(index);
        }
        const argName = nameParts
            .map(p => _.camelCase(p.toString()))
            .join("_")
            .replace(/idOr$/, "idOr$");
        return {
            ...a,
            name: argName,
        } as Argument;
    });

    return getOverloads(baseArgs)
        .map(allArgs => {
            const typescriptArgs: TypeScriptArg[] = allArgs.map((argument, index, list) => {
                let tsArgName = argument.name.replace("argument", "arg");
                let tsArgType = typeFor(argument);
                if (argument.multiple) {
                    tsArgName += "s";
                    tsArgType = makeArrayType(tsArgType);
                    if (index === list.length - 1 && allArgs.filter(a => a.multiple).length <= 1) {
                        tsArgName = "..." + tsArgName;
                    }
                }
                return { name: tsArgName, type: tsArgType };
            });

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

const getCommandCollection = () => {
    const commandsJson = readFileSync(`${redisDoc}/commands.json`, "utf8");
    const commandCollection: CommandCollection = JSON.parse(commandsJson);

    // hack: workaround while waiting for https://github.com/antirez/redis-doc/pulls/1231
    const expectedSetArgs =
        '[{"name":"key","type":"key"},{"name":"value","type":"string"},{"name":"expiration","type":"enum","enum":["EX seconds","PX milliseconds"],"optional":true},{"name":"condition","type":"enum","enum":["NX","XX"],"optional":true}]';
    if (JSON.stringify(commandCollection.SET.arguments) !== expectedSetArgs) {
        throw Error(
            [
                "unexpected arguments value for command SET",
                "hack working around the issue mentioned in https://github.com/antirez/redis-doc/pulls/1231 might not be needed anymore",
                "expected: " + expectedSetArgs,
                "actual:   " + JSON.stringify(commandCollection.SET.arguments),
            ].join("\n")
        );
    }
    commandCollection.SET.arguments = [
        { name: "key", type: "key" },
        { name: "value", type: "string" },
        { command: "EX", name: "seconds", type: "integer", optional: true },
        { command: "PX", name: "milliseconds", type: "integer", optional: true },
        { name: "condition", type: "enum", enum: ["NX", "XX"], optional: true },
    ];
    return commandCollection;
};

export const getBasicCommands = _.once(() => {
    const referenceClient: { [methodName: string]: any } = createClient();
    const commandCollection = getCommandCollection();

    const basicCommands = _.flatten(
        Object.keys(commandCollection).map(name => {
            const methodName = simplifyName(name);
            if (typeof referenceClient[methodName] !== "function") {
                warn(`node_redis doesn't support command "${name}"`);
                return [];
            }
            const command = commandCollection[name];

            return buildTypeScriptCommandInfo(methodName, command);
        })
    );

    const commandCommandIndex = basicCommands.findIndex(c => c.name === "command");
    const existingCommandCommand = basicCommands[commandCommandIndex];
    const commandCommand: BasicCommandInfo = {
        args: [{ name: "...args", type: "any[]" }],
        docs: existingCommandCommand.docs,
        name: existingCommandCommand.name,
        original: existingCommandCommand.original,
    };
    basicCommands.splice(commandCommandIndex, 0, commandCommand);

    return basicCommands;
});
