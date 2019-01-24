import { BasicCommandInfo } from "./command";
import { EOL } from "os";
import { quote, simplifyName, indent, buildScript } from "./util";
import * as _ from "lodash";
import { getCliExamples } from "./cli-examples";
import { getBasicCommands, FullCommandInfo } from "./command";
import * as tsc from "typescript";
import { readFileSync } from "fs";
import { warn } from "./log";

const tokenizeCommand = (command: string) => {
    return (command
        .match(/("(?:[^"\\]|\\.)*")|([^ ]+)/g) || []) // magic regex that "preserves \"escaped\" strings"
        .map(token => {
            if (token.startsWith(`"`) && token.endsWith(`"`)) {
                return token.slice(1, -1).replace(/\\(.)/g, "$1");
            } else {
                return token;
            }
        });
};

const parseNumber = (token: string): number => {
    if (token === "+inf") {
        return Infinity;
    }
    if (token === "-inf") {
        return -Infinity;
    }
    // todo: explain the next line??
    if (/^[\[\(]\d+$/.test(token)) {
        return `${quote(token)} as any` as any;
    }
    const num = Number(token);
    if (isNaN(num)) {
        throw new TypeCheckError();
    }
    return num;
};

const checkType = (formattedArgs: string[], overloadInfo: BasicCommandInfo) => {
    const overloadArgs = [...overloadInfo.args];
    while (formattedArgs.length > overloadArgs.length && overloadArgs[overloadArgs.length - 1].name.startsWith("...")) {
        overloadArgs.push(overloadArgs[overloadArgs.length - 1]);
    }
    if (formattedArgs.length !== overloadArgs.length) {
        return false;
    }
    return formattedArgs.every((formatted, i) => checkFormattedArgType(formatted, overloadArgs[i].type));
};

const arrayRegex = /^Array<(.+)>|(.+)\[\]$/;
const tupleRegex = /^\[.+]$/;

const checkFormattedArgType = (formatted: string, targetType: string): boolean => {
    if (formatted.endsWith(" as any")) {
        return true;
    }
    if (targetType === "string") {
        return /^[`"].*[`"]/.test(formatted);
    }
    if (targetType === "number") {
        try {
            parseNumber(formatted);
            return true;
        } catch (e) {
            if (e instanceof TypeCheckError) {
                return false;
            }
            throw e;
        }
    }
    const isEnum = /^".+"( | ".+")*$/.test(targetType);
    if (isEnum) {
        return targetType.split(" | ").indexOf(formatted) > -1;
    }
    if (tupleRegex.test(targetType)) {
        if (!tupleRegex.test(formatted)) {
            return false;
        }
        const members = formatted.slice(1, -1).split(", ");
        const targetMemberTypes = targetType.slice(1, -1).split(", ");
        if (members.length !== targetMemberTypes.length) {
            return false;
        }
        const pairs = members.map((m, i) => [m, targetMemberTypes[i]]);
        return _.every(pairs, p => checkFormattedArgType(p[0], p[1]));
    }
    const arrayMatch = targetType.match(arrayRegex);
    if (!arrayMatch) {
        return false;
    }
    return checkFormattedArgType(formatted, arrayMatch[1] || arrayMatch[2]);
};

const formatLiteralArgumentFromOverload = (overloadInfo: BasicCommandInfo, literalTokens: string[]) => {
    const formattedArgs = new Array<string>();
    let nextLiteralIndex = 0;
    for (const arg of overloadInfo.args) {
        if (nextLiteralIndex >= literalTokens.length) {
            break;
        }
        const { type } = arg;
        const arrayMatch = type.match(arrayRegex);
        const isTuple = tupleRegex.test(type);

        /** Formats the next literal token into the target list, coercing it into the target type first */
        const nextFormattedToken = (targetType = type) => {
            const literal = literalTokens[nextLiteralIndex++];
            if (typeof literal === "undefined") {
                warn(`Ran out of literal tokens. command ${overloadInfo.name}, tokens: ${literalTokens.join(" ")}`);
            }
            return targetType === "number" ? parseNumber(literal).toString() : quote(literal);
        };

        const nextFormattedTuple = (tupleType: string) => {
            const typeParts = tupleType
                .slice(1, -1) // get rid of `[` and `]`
                .split(", ")
                .map(p => p.trim());
            // todo map
            const formattedTupleParts = new Array<string>();
            for (const targetType of typeParts) {
                const nextFormatted = nextFormattedToken(targetType);
                formattedTupleParts.push(nextFormatted);
            }
            return `[${formattedTupleParts.join(", ")}]`;
        };

        if (isTuple) { // todo use ternary like above
            const nextArg = nextFormattedTuple(type);
            formattedArgs.push(nextArg);
        } else if (arrayMatch) {
            const itemType = arrayMatch[1] || arrayMatch[2];
            const getNext = tupleRegex.test(itemType)
                ? nextFormattedTuple
                : nextFormattedToken;
            while (nextLiteralIndex < literalTokens.length) {
                formattedArgs.push(getNext(itemType));
            }
        } else {
            // regular arg
            const nextArg = nextFormattedToken();
            formattedArgs.push(nextArg);
        }
    }
    // todo ensure all literalTokens have been used up
    return formattedArgs;
};

class TypeCheckError extends Error {
}

interface Usage {
    code: string[];
    overload?: BasicCommandInfo;
}

export const getReturnValuesFuncSrc = async () => {
    const typescriptCommands = getBasicCommands();
    const formatLiteralArguments = (commandName: string, literalTokens: string[]): Usage => {
        const matchingCommands = typescriptCommands.filter(c => c.name === commandName);
        const noMatch = (problem: string) => ({ code: [quote(problem)] });
        if (matchingCommands.length === 0) {
            return noMatch(`Couldn't format arguments: Couldn't find command "${commandName}"`);
        }
        const candidates: Array<Usage | null> = matchingCommands.map(overload => {
            try {
                const formattedArgs = formatLiteralArgumentFromOverload(overload, literalTokens);
                return checkType(formattedArgs, overload)
                    ? { code: formattedArgs, overload }
                    : null;
            } catch (err) {
                if (err instanceof TypeCheckError) {
                    return null;
                }
                throw err;
            }
        });
        const match = candidates.find(c => !!c);
        if (!match) {
            return noMatch(`Couldn't format arguments: No overload for "${commandName}" matches args ${literalTokens}`);
        }
        return match;
    };
    const examples = getCliExamples();

    const usages = examples.map(ex => ex.lines
        .map(line => {
            const tokens = tokenizeCommand(line);
            const command = simplifyName(tokens[0]);
            const argTokens = tokens.slice(1);

            const formatted = formatLiteralArguments(command, argTokens);
            if (!formatted.overload) {
                return `// ${formatted.code}`;
            }
            const args = formatted.code.join(", ");

            return [
                `try {`,
                `    logger.log("running", "${command}", ${args});`,
                `    const value = await client.${command}(${args});`,
                `    getOrCreate(${quote(formatted.overload.name)}).push(value);`,
                `    logger.log("ran", "${command}", ${args});`,
                `} catch (e) {`,
                `    logger.error(e);`,
                `}`,
            ].join(EOL);
        }));

    const getReturnValuesTs = [
        `async (client) => {`,
        `    await client.ping();`,
        `    const logger = require("${__dirname.replace(/\\/g, "/")}/log")`,
        `    const returnValues = new Map<string, any[]>();`,
        `    const getOrCreate = (commandName: string) => {`,
        `        if (!returnValues.has(commandName)) {`,
        `            returnValues.set(commandName, []);`,
        `        }`,
        `        return returnValues.get(commandName)!;`,
        `    };`,
        ..._.flatten(usages).map(indent),
        `    return returnValues;`,
        `};`,
    ].join(EOL);

    return tsc.transpile(getReturnValuesTs, JSON.parse(readFileSync("tsconfig.json", "utf8")).compilerOptions);
};

type ReturnValuesMap = Map<string, any[]>;

const getReturnType = (sampleValues: any[] | undefined): string => {
    if (!sampleValues || sampleValues.length === 0) {
        return "any";
    }
    const withoutNulls = sampleValues.filter(v => v !== null);
    if (withoutNulls.length < sampleValues.length) {
        return `${getReturnType(withoutNulls)} | null`;
    }

    const types = sampleValues.map(x => typeof x);
    for (const type of ["number", "string", "boolean"]) {
        if (types.every(t => t === type)) {
            return type;
        }
    }
    if (sampleValues.every(v => Array.isArray(v))) {
        const itemReturnTypes = new Set(sampleValues.map(getReturnType));
        if (itemReturnTypes.size === 1) {
            const first = itemReturnTypes.values().next().value;
            return `(${first})[]`;
        }
        return "any[]";
    }
    return "any";
};

const getFullCommandsInfo = (returnValues: ReturnValuesMap) => {
    const basicCommandsInfo = getBasicCommands();
    return basicCommandsInfo.map(basicInfo => <FullCommandInfo> {
        ...basicInfo,
        returnType: getReturnType(returnValues.get(basicInfo.name)),
        sampleReturnValues: returnValues.get(basicInfo.name) || [],
    });
};

export const getFullCommands = _.once(async () => {
    const returnValuesFuncSrc = await getReturnValuesFuncSrc();
    // tslint:disable-next-line:no-eval
    const getReturnValues = eval(returnValuesFuncSrc);
    const client = require("../src/").createHandyClient();
    const returnValues: ReturnValuesMap = await getReturnValues(client);
    const fullCommandsInfo = getFullCommandsInfo(returnValues);
    return fullCommandsInfo;
});

buildScript(module, getFullCommands);
