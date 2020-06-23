import { schema } from ".";
import { writeFile } from "../util";
import { camelCase, snakeCase } from "lodash";
import * as jsonSchema from "json-schema";

const codeArgument = (arg: typeof schema[keyof typeof schema]["arguments"][number]) => {
    let name = snakeCase(arg.name);
    if (name === "arguments") {
        name = "args";
    }
    const type = schemaToType(arg.schema);
    return [name, ": ", type].join("");
};

const schemaToType = (schema: jsonSchema.JSONSchema7): string => {
    const unknownType = "unknown";
    if (!schema) {
        return unknownType;
    }
    if (schema.type === "number" || schema.type === "integer") {
        return "number";
    }
    if (schema.type === "string") {
        return "string";
    }
    if (Array.isArray(schema.enum) && schema.enum.every(e => typeof e === "string")) {
        return schema.enum.map(e => JSON.stringify(e)).join("|");
    }
    if (schema.type === "array") {
        if (Array.isArray(schema.items)) {
            return `[${schema.items.map(schemaToType).join(", ")}]`;
        }
        const itemType = typeof schema.items === "object" ? schemaToType(schema.items) : unknownType;
        return `Array<${itemType}>`;
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

type SchemaDotJson = typeof schema;
type JSONSchemaArgument = SchemaDotJson[keyof SchemaDotJson]["arguments"][number];

export const overloads = (args: JSONSchemaArgument[]): JSONSchemaArgument[][] => {
    if (args.length === 0) {
        // no args, so only one valid way to call this - with an empty args array
        return [[]];
    }
    const [first, ...tail] = args;
    const tailOverloads = overloads(tail);

    const withFirstArg = tailOverloads.map(array => [first, ...array]);
    if (first.optional) {
        return [...withFirstArg, ...tailOverloads];
    }

    return withFirstArg;
};

const properties = Object.entries(schema)
    .flatMap(([command, spec]) => {
        return overloads(spec.arguments).map(args => [command, { ...spec, arguments: args }] as const);
    })
    .map(([command, spec]) => {
        return `
            /**
             * ${spec.summary}
             * - _group_: ${spec.group}
             * - _complexity_: ${spec.complexity}
             * - _since_: ${spec.since}
             */
            ${camelCase(command)}(${spec.arguments.map(codeArgument)}):
                Promise<${schemaToType(spec.return)}>
        `;
    })
    .join("\n");

const src = `export interface Client {
  ${properties}
}`;

writeFile(process.cwd() + "/x.ts", src);
