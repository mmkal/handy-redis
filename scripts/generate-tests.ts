import { BasicCommandInfo } from "./command";
import { EOL } from "os";
import { quote, simplifyName, tab, indent, buildScript, writeFile } from "./util";
import * as _ from "lodash";
import { getExampleRuns } from "./cli-examples";
import { getBasicCommands } from "./command";
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
    if (/^[\[\(]\d+$/.test(token)) {
        return `${quote(token)} as any` as any;
    }
    const num = Number(token);
    if (isNaN(num)) {
        throw new TypeCheckError();
    }
    return num;
};

// todo: consolidate with generate-usages
const checkType = (formattedArgs: string[], overloadInfo: BasicCommandInfo) => {
    const overloadArgs = [...overloadInfo.args];
    while (formattedArgs.length > overloadArgs.length && overloadArgs[overloadArgs.length - 1].name.startsWith("...")) {
        overloadArgs.push(overloadArgs[overloadArgs.length - 1]);
    }
    if (formattedArgs.length !== overloadArgs.length) {
        return false;
    }
    for (let i = 0; i < formattedArgs.length; i++) {
        const formatted = formattedArgs[i];
        const targetArg = overloadArgs[i];

        if (!checkFormattedArgType(formatted, targetArg.type)) {
            return false;
        }
    }
    return true;
};

const arrayRegex = /^Array<(.+)>|(.+)\[\]$/;
const tupleRegex = /^\[.+]$/;

const checkFormattedArgType = (formatted: string, targetType: string): boolean => {
    if (targetType === "any" || formatted.endsWith(" as any")) {
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

// todo: dedupe with generate-usages
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
    // todo ensure all literalTokesns have been used up
    return formattedArgs;
};

class TypeCheckError extends Error {
}

export const generateTests = async () => {
    const typescriptCommands = getBasicCommands();
    const formatLiteralArguments = (commandName: string, literalTokens: string[]) => {
        const matchingCommands = typescriptCommands.filter(c => c.name === commandName);
        if (matchingCommands.length === 0) {
            return [quote(`Couldn't format arguments: Couldn't find command "${commandName}"`)];
        }
        const candidates = matchingCommands.map(overload => {
            try {
                const formattedArgs = formatLiteralArgumentFromOverload(overload, literalTokens);
                return checkType(formattedArgs, overload) ? formattedArgs : null;
            } catch (err) {
                if (err instanceof TypeCheckError) {
                    return null;
                }
                throw err;
            }
        });
        const match = _.maxBy(candidates.filter(Boolean), c => c!.length);
        if (!match) {
            return [quote(`Couldn't format arguments: No overload for "${commandName}" matches args ${literalTokens}`)];
        }
        return match;
    };

    const examples = await getExampleRuns();

    const tests = examples.map(ex => {
        const commandSrcs = ex.example.lines.map(line => {
            const tokens = tokenizeCommand(line);
            const command = simplifyName(tokens[0]);
            const argTokens = tokens.slice(1);

            const args = formatLiteralArguments(command, argTokens).join(", ");

            const prefix = args.includes("Couldn't format arguments: ")
                ? "// not implemented by node redis: "
                : "";

            return `${prefix}await handy.${command}(${args})`;
        });

        const longestCommand = _.maxBy(commandSrcs, src => src.length);
        const maxLength = longestCommand ? longestCommand.length : 0;

        const testName = `${ex.example.file} example ${ex.example.index + 1}`;

        const body = [
            `const overrider = getOverride(${quote(ex.example.file)});`,
            `let snapshot: any;`,
            `const commands = [`,
            ...commandSrcs.map(quote).map(indent).map(line => line + ","),
            `];`,
            `const output: any[] = [];`,
            `try {`,
            ...commandSrcs.map(cmd => cmd.startsWith("//") ? `output.push(${quote(cmd)});` : `output.push(${cmd});`).map(indent),
            `    const overridenOutput = overrider(output);`,
            `    snapshot = zip(commands, overridenOutput)`,
            `        .map(pair => ` + "`${padEnd(pair[0], " + (maxLength + 1) + ")} => ${JSON.stringify(pair[1])}`" + `)`,
            `        .map(expression => expression.replace(/['"]/g, q => q === \`'\` ? \`"\` : \`'\`));`,
            `} catch (err) {`,
            `    snapshot = { _commands: commands, _output: output, err };`,
            `}`,
            `expect(snapshot).toMatchSnapshot();`,
        ]
        .map(line => `${tab}${line}`);

        const isSkipped = [
            "scripts/redis-doc/commands/swapdb.md",
            "scripts/redis-doc/commands/unlink.md",
        ].indexOf(ex.example.file) > -1;
        const runTest = isSkipped ? "it.skip" : "it";

        const testSrc = [
            `${runTest}(${quote(testName)}, async () => {`,
            ...body,
            `});`,
        ]
        .join(EOL);

        return { testSrc, exampleFile: ex.example.file };
    });

    const grouped = _.groupBy(tests, t => t.exampleFile.replace("scripts/redis-doc/", "").replace(".md", ""));

    return _.mapValues(grouped, (testGroup, file) => {
        // determine how many "../"s will be needed to get to src folder based on example file path
        const dots = file.split("/").map(() => "..").join("/");
        return [
            `import { zip, padEnd } from "lodash";`,
            `import { IHandyRedis, createHandyClient } from "../${dots}/src";`,
            `import { getOverride } from "${dots}/_manual-overrides";`,
            `let handy: IHandyRedis;`,
            `beforeAll(async () => {`,
            `    handy = createHandyClient();`,
            `    await handy.ping("ping");`,
            `});`,
            `beforeEach(async () => {`,
            `    await handy.flushall();`,
            `});`,
            ``,
            ...testGroup.map(t => t.testSrc),
            ``,
        ].join(EOL);
    });

};

buildScript(module, async () => {
    const tests = await generateTests();
    _.forIn(tests, (src, file) => {
        const generated = `test/generated/${file}.test.ts`;
        // const manual = `test/manual/${file}-tests.ts`;
        // if (!existsSync(manual)) {
        writeFile(generated, src);
        // }
    });
});
