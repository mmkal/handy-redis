import { schema as actualSchema, JsonSchemaCommandArgument, JsonSchemaCommand } from ".";
import { writeFile } from "./util";
import { camelCase, snakeCase } from "lodash";
import * as lo from "lodash";
import * as jsonSchema from "json-schema";

const codeArgument = (arg: JsonSchemaCommandArgument, i: number, arr: typeof arg[]) => {
    let name = snakeCase(arg.name);
    if (name === "arguments") {
        name = "args";
    }
    const type = schemaToTypeScript(arg.schema);
    if (type.startsWith("Array<") && i === arr.length - 1) {
        name = "..." + name;
    }
    const optionalMarker = arr.slice(i).every(a => a.optional) ? "?" : "";
    return [name, optionalMarker, ": ", type].join("");
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
    if (schema.type === "string") {
        return "string";
    }
    if (schema.type === "array") {
        if (Array.isArray(schema.items)) {
            return `[${schema.items
                .map(schemaToTypeScript)
                .map(t => `(${t})`)
                .join(", ")}]`;
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
            name: snakeCase(`${command}_subcommand${i > 0 ? i + 1 : ""}`),
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
                 */
                ${camelCase(command)}(${val.formatted}):
                    Promise<${schemaToTypeScript(spec.return)}>
            `;
        })
        .value();
};

export const getTypeScriptInterface = (schema: typeof actualSchema) => {
    const properties = Object.entries(schema)
        .flatMap(([command, spec]) => formatOverloads(command, spec))
        .join("\n");

    return `export interface Client {
        ${properties}
    }`;
};

export const main = () => {
    writeFile(process.cwd() + "/src/generated/interface.ts", getTypeScriptInterface(actualSchema));
};

if (require.main === module) {
    main();
}
