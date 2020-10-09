import { schema, JsonSchemaCommandArgument } from ".";
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs";
import { overloads as getOverloads } from "./generate-client";
import { inspect } from "util";
import { writeFile } from "./util";
import { parseArgsStringToArgv } from "string-argv";
import { fixupExample, fixupGeneratedCode } from "./fixup";
import * as lo from "lodash";

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

const tokenizeCliExample = (ex: ExtractedCliExample) => ({
    ...ex,
    commands: ex.lines.map(fixupExample).map(original => ({ original, argv: parseArgsStringToArgv(original) })),
});

const print = (val: unknown) =>
    inspect(val, { breakLength: 1000, depth: 1000 })
        .replace(/, toString: \[Function\]/g, "")
        .replace(/\r?\n[ \t]*/g, " ");

export const toArgs = (tokens: string[]) => {
    const [command, ...args] = tokens;
    const jsonSchema = schema[command.toUpperCase()];
    if (!jsonSchema) {
        return { command, decoded: undefined, contexts: [[`${command} not found`]] };
    }
    const overloads = getOverloads(jsonSchema.arguments);
    const results = overloads
        .map(ov => {
            ov.forEach(a => {
                a.toString = () => print(a);
            });
            return ov;
        })
        .map((o, i) => decodeTokens(args, o, [`decoding ${command} overload ${i} (${o.map(a => a.name)}): ${o}`]));
    const success = results.find(r => r.decoded);
    return { command, decoded: success?.decoded, contexts: results.map(r => r.context) };
};

export const decodeTokens = (
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

/** For formatting js argument lists, we need to know the difference between tuples and varargs, since they look the same in json. These markers keep track */
const ArrayMarkers = {
    type: Symbol("ArrayType"),
    varargs: Symbol("ArrayType:list"),
    tuple: Symbol("ArrayType:tuple"),
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
        // we successfully decoded all the tokens. There are are target args remaining. Depending on context this may or may not be
        // a failure. Return the leftovers so the caller can decide whether to fail or try to use up leftovers (say, for varargs).
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

    const next = (decodedValue: unknown, message = `Decoded value ${decodedValue}.`) => {
        const remainder = decodeTokensCore(tailTokens, tailArgs, [
            ...context,
            `${headToken} successfully decoded as ${headArg.name} (string). ${message} Tokens remaining [${tailTokens}], target args remainin count: ${tailArgs.length}`,
        ]);
        return remainder.decoded ? { ...remainder, decoded: [decodedValue, ...remainder.decoded] } : remainder;
    };

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
        return next(headToken);
    }

    if (headArg.schema.type === "integer") {
        const headDecoded = parseInt(headToken, 10);
        if (headDecoded.toString() !== headToken) {
            return {
                error: true,
                context: [...context, `${headToken} isn't an integer. Decoded as something different: ${headDecoded}`],
            };
        }
        return next(headDecoded);
    }

    if (headArg.schema.type === "number") {
        const headDecoded = parseFloat(headToken);
        if (headDecoded.toString() !== headToken) {
            return fail(`${headToken} parsed into a bad number ${headDecoded}`);
        }
        return next(headDecoded);
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
        return remainder.decoded
            ? {
                  ...remainder,
                  decoded: [
                      Object.assign(decodedTuple.decoded, { [ArrayMarkers.type]: ArrayMarkers.tuple }),
                      ...remainder.decoded,
                  ],
              }
            : remainder;
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
            acc = next.error
                ? next
                : {
                      ...next,
                      decoded: [
                          Object.assign(acc.decoded[0].concat(next.decoded), {
                              [ArrayMarkers.type]: ArrayMarkers.varargs,
                          }),
                      ],
                  };
        } while (!acc.error && acc.leftovers.length > 0);

        return acc;
    }

    if (typeof headArg.schema.type === "undefined") {
        return next(headToken, `Decoded value ${headToken} as-is. No json-schema type detected - anything goes!!`);
    }

    return fail(`Not smart enough to deal with ${print(headArg)} yet`);
};

const unixify = (p: string) => p.replace(/\\/g, "/");

const writeTests = () => {
    lo.chain(extractAllCliExamples())
        .map(tokenizeCliExample)
        .flatMap(a =>
            a.commands.map(c => {
                const jsonArgs = toArgs(c.argv);
                return {
                    file: a.file,
                    relativeFile: unixify(a.file).replace(unixify(process.cwd()) + "/", ""),
                    index: a.index,
                    line: c.original,
                    ...jsonArgs,
                };
            })
        )
        .groupBy(m => m.relativeFile)
        .forIn((examples, name) => {
            const blocks = Object.entries(lo.groupBy(examples, m => m.index + 1));
            const testFns = blocks.map(([blockNumber, block]) => {
                const setup = `const outputs: Record<string, unknown> = {}`;
                const test = block
                    .flatMap((m, i) => {
                        const argList = m.decoded && stringifyWithVarArgs(m.decoded).slice(1, -1);
                        const usageOrFailureComments = m.decoded
                            ? [`outputs.r${i} = await client.${m.command.toLowerCase()}(${argList})`]
                            : [
                                  `// Error decoding command \`${m.line}\`:\n`,
                                  ...m.contexts.flatMap(context => context.concat(["---"]).map(line => `// ${line}`)),
                              ];
                        return usageOrFailureComments;
                    })
                    .map(fixupGeneratedCode);
                const assertion = `expect(override(outputs, __filename)).toMatchInlineSnapshot()`;
                return [
                    `test(${JSON.stringify(`${name} example ${blockNumber}`)}, async () => {`,
                    setup,
                    ``,
                    ...test,
                    ``,
                    assertion,
                    `})`,
                ].join("\n");
            });
            const destPath = path.join(
                process.cwd(),
                `test/generated/${name
                    .replace("redis-doc/", "")
                    .replace(/^scripts\//, "")
                    .replace(/\.md$/, "")}.test.ts`
            );
            const clientPath = path.join(process.cwd(), "src");
            const overridesPath = path.join(process.cwd(), "test/_manual-overrides2");
            const relativePath = (to: string) =>
                unixify(path.relative(path.dirname(destPath), to)).replace(/\.ts$/, "");
            const header = [
                `import {createHandyClient} from '${relativePath(clientPath)}'`,
                `import {override} from '${relativePath(overridesPath)}'`,
                "",
                `const client = createHandyClient()`,
                "",
                `beforeAll(async () => {
                    await client.ping()
                })`,
                "",
                `beforeEach(async () => {
                    await client.flushall()
                })`,
            ].join("\n");

            const ts = [header, ...testFns].join("\n\n");

            writeFile(destPath, ts);
        })
        .value();
};

/**
 * custom json stringifier that flattens out arrays "at the end" of arrays.
 * Relies on some assumptions true to this library:
 * - array parameters at the end of argument lists are converted to js rest args (e.g. `...args: Foobar[]`)
 * - the usage-generator marks args with ArrayMarkers.type = ArrayMarkers.varargs | ArrayMarkers.tuple
 */
export const stringifyWithVarArgs = (input: unknown) =>
    JSON.stringify(input, (key, val) => {
        const maybeLast = Array.isArray(val) ? val[val.length - 1] : undefined;
        if (Array.isArray(maybeLast) && (maybeLast as any)[ArrayMarkers.type] === ArrayMarkers.varargs) {
            return val.slice(0, -1).concat(val[val.length - 1]);
        }
        return val;
    });

if (require.main === module) {
    writeTests();
}
