import { schema as actualSchema, JsonSchemaCommandArgument, JsonSchemaCommand } from ".";
import { maybeDo, writeFile } from "./util";
import * as lo from "lodash";
import * as jsonSchema from "json-schema";
import { fixupClientTypescript } from "./patches/client";

/** occasionally redis-doc includes non-word characters in arg names. Special-case some of them, snakeCase will just throw out the rest */
const santiseArgName = (name: string) =>
    lo.snakeCase(name.replace("$", "dollar").replace("*", "asterisk").replace("=", "equals").replace("~", "tilde"));

const codeArgument = (arg: JsonSchemaCommandArgument, i: number, arr: typeof arg[]) => {
    let name = santiseArgName(arg.name);
    if (name === "arguments") {
        name = "args";
    }
    const type = schemaToTypeScript(arg.schema);
    const isVarArg = type.startsWith("Array<") && i === arr.length - 1;
    if (isVarArg) {
        name = "..." + name;
    }
    const optionalMarker = !isVarArg && arr.slice(i).every(a => a.optional) ? "?" : "";
    return [name || santiseArgName(type), optionalMarker, ": ", type].join("");
};

const formatCodeArguments = (list: JsonSchemaCommandArgument[]) => list.map(codeArgument).join(", ");

const schemaToTypeScript = (schema: jsonSchema.JSONSchema7): string => {
    const unknownType = "unknown";
    if (!schema) {
        return unknownType;
    }
    if (schema.type === "number" || schema.type === "integer") {
        return "number";
    }
    if (Array.isArray(schema.enum) && schema.enum.every(e => typeof e === "string")) {
        return schema.enum.map(e => JSON.stringify(e)).join("|");
    }
    if (schema.const) {
        return JSON.stringify(schema.const);
    }
    if (schema.type === "string") {
        return "string";
    }
    if (schema.type === "array") {
        if (Array.isArray(schema.items)) {
            const labeled = schema.items.map(item => {
                const itemSchema = item as jsonSchema.JSONSchema7;
                const ts = schemaToTypeScript(itemSchema);
                return `${santiseArgName(itemSchema.title || ts)}: (${ts})`;
            });
            return `[${labeled.join(", ")}]`;
        }
        const itemType = typeof schema.items === "object" ? schemaToTypeScript(schema.items) : unknownType;
        return `Array<${itemType}>`;
    }
    if (Array.isArray(schema.anyOf)) {
        return schema.anyOf
            .map(schemaToTypeScript)
            .map(type => `(${type})`)
            .join(" | ");
    }
    if (typeof schema.const === "string") {
        return JSON.stringify(schema.const);
    }
    if (schema.type === "boolean") {
        return "boolean";
    }
    if (schema.type === "null") {
        return "null";
    }
    return unknownType;
};

export const overloads = (args: JsonSchemaCommandArgument[]): JsonSchemaCommandArgument[][] => {
    if (args.length === 0) {
        // no args, so only one valid way to call this - with an empty args array
        return [[]];
    }
    const [first, ...tail] = args;
    const tailOverloads = overloads(tail);

    const withFirstArg = tailOverloads.map(array => [first, ...array]);
    if (first.optional) {
        return [...tailOverloads, ...withFirstArg];
    }

    return withFirstArg;
};

export const formatOverloads = (fullCommand: string, { arguments: originalArgs, ...spec }: JsonSchemaCommand) => {
    const [command, ...subCommands] = fullCommand.split(" ");

    const withSubcommands = [
        ...subCommands.map<typeof originalArgs[0]>((sub, i) => ({
            name: santiseArgName(`${command}_subcommand${i > 0 ? i + 1 : ""}`),
            schema: { type: "string", enum: [sub] },
        })),
        ...originalArgs,
    ];

    return lo
        .chain(overloads(withSubcommands))
        .map(args => args)
        .map(args => {
            return {
                covers: args
                    .map((_, i, arr) => {
                        const after = arr.slice(i);
                        if (after.every(a => a.optional)) {
                            return formatCodeArguments(arr.slice(0, i));
                        }
                        return undefined;
                    })
                    .filter(val => typeof val !== "undefined"),
                formatted: formatCodeArguments(args),
            };
        })
        .filter(({ formatted }, _, arr) => {
            const betterAlternativeExists = lo.some(arr, other => {
                const isCoveredByOther = other.covers.includes(formatted);
                const isShorterThanOther = formatted.length < other.formatted.length;
                return isCoveredByOther && isShorterThanOther;
            });
            return !betterAlternativeExists;
        })
        .map(val => {
            return `
                /**
                 * ${spec.summary}
                 * - _group_: ${spec.group}
                 * - _complexity_: ${spec.complexity}
                 * - _since_: ${spec.since}
                 * 
                 * [Full docs](https://redis.io/commands/${lo.kebabCase(fullCommand)})
                 */
                ${lo.camelCase(command)}(${val.formatted}):
                    Promise<${schemaToTypeScript(spec.return)}>
            `;
        })
        .map(fixupClientTypescript(command))
        .value();
};

export const getTypeScriptInterface = (schema: typeof actualSchema) => {
    const properties = Object.entries(schema)
        .flatMap(([command, spec]) => formatOverloads(command, spec))
        .join("\n");

    return `export interface Commands {
        ${properties}
    }`;
};

export const main = () => {
    writeFile(process.cwd() + "/src/generated/interface.ts", getTypeScriptInterface(actualSchema));
};

maybeDo(require.main === module, main)
