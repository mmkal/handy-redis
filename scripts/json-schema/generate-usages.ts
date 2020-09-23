import { schema, JsonSchemaCommandArgument } from ".";
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs";
import { overloads as getOverloads } from "./client";
import { inspect } from "util";
import { writeFile } from "../util";

const extractCliExamples = (markdown: string) => {
    const eolMarker = " END_OF_LINE_MARKER ";
    const singleLine = markdown.replace(/\r?\n/g, eolMarker);

    const tripleBacktick = "```";
    const cliBlock = (body: string) => `${tripleBacktick}cli${eolMarker}${body}${tripleBacktick}`;
    const cliRegex = new RegExp(cliBlock(".+?"), "g");
    const matches = singleLine.match(cliRegex) || [];

    return matches.map((m, index) => {
        const lines = m
            .replace(/```(cli)?/g, "")
            .split(eolMarker)
            .map(line => line.trim())
            .filter(Boolean);

        return { index, lines };
    });
};

const findMarkdownFiles = () => glob.sync("**/*.md", { absolute: true, cwd: path.join(__dirname, "..") });

const extractAllCliExamples = () => {
    const markdownFiles = findMarkdownFiles();
    return markdownFiles.flatMap(file => {
        const content = fs.readFileSync(file).toString();
        const examples = extractCliExamples(content);
        return examples.map(ex => ({ file, ...ex }));
    });
};

type ExtractedCliExample = ReturnType<typeof extractAllCliExamples>[number];

const tokenizeCliExample = (ex: ExtractedCliExample) => {
    return {
        ...ex,
        commands: ex.lines.map(x => {
            // if (x.includes('"'))
            //     throw Error(`CLI example tokenizer is too stupid to deal with quotes/escapes. Line ${x}`);
            return { original: x, argv: x.split(" ") };
        }),
    };
};

type TokenizedCliExample = ReturnType<typeof tokenizeCliExample>;

const print = (val: unknown) =>
    inspect(val, { breakLength: 1000, depth: 1000 })
        .replace(/, toString: \[Function\]/g, "")
        .replace(/\r?\n[ \t]*/g, " ");

export const toArgs = (tokens: string[]) => {
    const [command, ...args] = tokens;
    const jsonSchema = schema[command.toUpperCase()];
    if (!jsonSchema) {
        return { command, contexts: [`${command} not found`] };
        // throw Error(`${command} not found`);
    }
    const overloads = getOverloads(jsonSchema.arguments);
    const results = overloads
        .map(ov => {
            ov.forEach(a => {
                a.toString = () => print(a);
            });
            return ov;
        })
        .map((o, i) => decodeTokensMain(args, o, [`decoding ${command} overload ${i} (${o.map(a => a.name)}): ${o}`]));
    const success = results.find(r => r.decoded);
    return { command, ...success, contexts: results.map(r => r.context) };
};

export const decodeTokensMain = (
    tokens: string[],
    targetArgs: Pick<JsonSchemaCommandArgument, "schema" | "name">[],
    context: string[]
) => {
    const core = decodeTokensCore(tokens, targetArgs, context);
    if (core.error === undefined && core.leftovers.length > 0) {
        return { error: true as true, context: core.context };
    }
    return core;
};

const decodeTokensCore = (
    tokens: string[],
    targetArgs: Pick<JsonSchemaCommandArgument, "schema" | "name">[],
    context: string[]
):
    | { context: string[]; error?: undefined; decoded: any[]; leftovers: string[] }
    | { context: string[]; error: true; decoded?: undefined } => {
    if (tokens.length === 0 && targetArgs.length === 0) {
        return { context, decoded: [], leftovers: [] };
    }
    if (tokens.length === 0) {
        return {
            error: true,
            context: [...context, `Target args remain but no tokens left! Target args ${print(targetArgs)}`],
        };
    }
    if (targetArgs.length === 0) {
        return {
            decoded: [],
            leftovers: tokens,
            context: [...context, `Tokens remain but no target args left! Tokens: ${tokens}`],
        };
    }
    const [headToken, ...tailTokens] = tokens;
    const [headArg, ...tailArgs] = targetArgs;

    const fail = (msg: string) => ({
        error: true as true,
        tokens,
        context: [...context, msg],
    });

    if (headArg.schema.type === "string" && headArg.schema.const) {
        if (headToken !== headArg.schema.const) {
            return fail(`Expected ${headArg.schema.const}, got ${headToken}`);
        }
    }

    if (headArg.schema.type === "string" && headArg.schema.enum) {
        if (!headArg.schema.enum.includes(headToken)) {
            return fail(`Expected one of ${headArg.schema.enum}, got ${headToken}`);
        }
    }

    if (headArg.schema.type === "string") {
        const remainder = decodeTokensCore(tailTokens, tailArgs, [
            ...context,
            `${headToken} successfully decoded as ${headArg.name} (string). Tokens remaining [${tailTokens}], target args remaining count: ${tailArgs.length}`,
        ]);
        return remainder.decoded ? { ...remainder, decoded: [headToken, ...remainder.decoded] } : remainder;
    }

    if (headArg.schema.type === "integer") {
        const headDecoded = parseInt(headToken, 10);
        if (headDecoded.toString() !== headToken) {
            return {
                error: true,
                context: [...context, `${headToken} isn't an integer. Decoded as something different: ${headDecoded}`],
            };
        }
        const remainder = decodeTokensCore(tailTokens, tailArgs, [
            ...context,
            `${headToken} successfully decoded as ${headArg.name} (integer). Tokens remaining [${tailTokens}], target args remaining count: ${tailArgs.length}`,
        ]);
        return remainder.decoded ? { ...remainder, decoded: [headDecoded, ...remainder.decoded] } : remainder;
    }

    if (headArg.schema.type === "number") {
        const headDecoded = parseFloat(headToken);
        if (headDecoded.toString() !== headToken) {
            return fail(`${headToken} parsed into a bad number ${headDecoded}`);
        }
        const remainder = decodeTokensCore(tailTokens, tailArgs, [
            ...context,
            `${headToken} successfully decoded as ${headArg.name} (number). Tokens remaining [${tailTokens}], target args remaining count: ${tailArgs.length}`,
        ]);
        return remainder.decoded ? { ...remainder, decoded: [headDecoded, ...remainder.decoded] } : remainder;
    }

    const asSchema = (def: typeof headArg.schema.items) =>
        Array.isArray(def) || typeof def === "undefined" || typeof def === "boolean" ? {} : def;

    if (headArg.schema.type === "array" && Array.isArray(headArg.schema.items)) {
        // it's a tuple
        const nextN = tokens.slice(0, headArg.schema.items.length);
        const decodedTuple = decodeTokensCore(
            nextN,
            headArg.schema.items.map((item, i) => ({
                name: headArg.name + "_" + i,
                schema: item as Exclude<typeof item, boolean>,
            })),
            [...context, `Decoding tuple items`]
        );
        if (decodedTuple.error) {
            return decodedTuple;
        }
        const remainder = decodeTokensCore(tokens.slice(headArg.schema.items.length), tailArgs, [
            ...context,
            `Successfully decoded ${print(decodedTuple.decoded)} as ${print(headArg)}!`,
        ]);
        return remainder.decoded ? { ...remainder, decoded: [decodedTuple.decoded, ...remainder.decoded] } : remainder;
    }

    if (headArg.schema.type === "array") {
        if (tailArgs.length > 0) {
            return fail(`Not smart enough to deal with arrays in the beginning or middle of arg lists`);
        }
        let acc: ReturnType<typeof decodeTokensCore> = {
            leftovers: tokens,
            context,
            decoded: [[]],
        };
        do {
            if (acc.error) {
                return acc;
            }
            if (acc.leftovers.length === 0) {
                return acc;
            }
            const next = decodeTokensCore(
                acc.leftovers,
                [{ name: headArg.name, schema: asSchema(headArg.schema.items) }],
                [...context, `Decoding array item`]
            );
            acc = next.error ? next : { ...next, decoded: [acc.decoded[0].concat(next.decoded)] };
        } while (!acc.error && acc.leftovers.length > 0);

        return acc;
    }

    return fail(`Not smart enought to deal with ${print(headArg)} yet`);
};

const eall = () => {
    const all = extractAllCliExamples();
    const mapped = all
        .map(a => tokenizeCliExample(a))
        .flatMap(a =>
            a.commands.map(c => {
                const jsonArgs = toArgs(c.argv);
                return { file: a.file, index: a.index, line: c.original, ...jsonArgs };
            })
        );

    const ts = [
        `import {Client} from './x'`,
        `export const f = async (client: Client) => {`, //
        ...mapped.map(m =>
            [
                `// ${m.file} ${m.index}`,
                `// ${m.line}`,
                "decoded" in m
                    ? `await client.${m.command.toLowerCase()}(${JSON.stringify(m.decoded).slice(1, -1)})`
                    : `// ${m.errors}`,
            ]
                .filter(Boolean)
                .join("\n")
        ),
        `}`,
    ].join("\n\n");

    writeFile("y.ts", ts);
};

if (require.main === module) {
    eall();
}

// const usages = Object.keys(schema).map(command => {});
