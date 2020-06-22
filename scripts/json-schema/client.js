const { schema } = require(".");
const { writeFile } = require("../util");
const { camelCase } = require("lodash");

/** @param arg {typeof import('.').schema[string]['arguments'][number]} */
const codeArgument = arg => {
    let name = camelCase(arg.name);
    if (name === "arguments") {
        name = "args";
    }
    const optionalMarker = arg.optional ? "?" : "";
    const type = schemaToType(arg.schema);
    return [name, optionalMarker, ": ", type].join("");
};

/** @type {(schema: import('json-schema').JSONSchema7) => string} */
const schemaToType = schema => {
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

const properties = Object.entries(schema)
    .map(([command, spec]) => {
        return `${camelCase(command)}(${spec.arguments.map(codeArgument)}): Promise<${schemaToType(spec.return)}>`;
    })
    .join("\n");

const src = `export interface Client {
  ${properties}
}`;

writeFile(process.cwd() + "/x.ts", src);
