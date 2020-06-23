import { writeFile } from "../util";
import * as cmnds from "../redis-doc/commands.json";
import * as path from "path";
import * as jsonSchema from "json-schema";
import * as commandTypes from "../command/types";

const argToSchema = (arg: commandTypes.Argument): jsonSchema.JSONSchema7 => {
    if (arg.multiple || arg.variadic) {
        return {
            type: "array",
            items: argToSchema({ ...arg, multiple: false, variadic: false }),
        };
    }
    if (arg.command) {
        const { command, ...rest } = arg;
        return {
            type: "array",
            items: [
                {
                    type: "string",
                    const: command,
                },
                argToSchema(rest),
            ],
        };
    }
    const stringTypes = new Set(["key", "string", "pattern", "type"]);
    if (typeof arg.type === "string" && stringTypes.has(arg.type)) {
        return {
            type: "string",
        };
    }
    if (arg.type === "integer") {
        return {
            type: "integer",
        };
    }
    if (arg.type === "double") {
        return {
            type: "number",
        };
    }
    if (arg.type === "enum") {
        return {
            type: "string",
            enum: arg.enum,
        };
    }
    if (typeof arg.command === "string") {
        if (arg.multiple) {
            throw Error(`don't know how to handle this`);
        }
        const types = Array.isArray(arg.type) ? arg.type : [arg.type];
        const names = Array.isArray(arg.name) ? arg.name : [arg.name];
        return {
            type: "array",
            items: [
                { type: "string", enum: [arg.command] },
                ...types.map((type, i) => ({
                    title: names[i],
                    ...argToSchema({ type, name: names[i] }),
                })),
            ],
        };
    }
    if (Array.isArray(arg.type)) {
        return {
            type: "array",
            items: arg.type.map((type, i) => ({
                title: arg.name[i],
                ...argToSchema({ type, name: arg.name[i] }),
            })),
        };
    }
    return {};
};

const argToReturn = (command: string): jsonSchema.JSONSchema7 => {
    const docFile = path.join(__dirname, `../redis-doc/commands/${command.toLowerCase()}.md`);
    const fs = require("fs");
    if (!fs.existsSync(docFile)) {
        return {};
    }
    const doc = fs.readFileSync(docFile).toString();
    if (!doc.includes("@return")) {
        return {};
    }
    const returnDoc = doc.split("@return")[1].split("@example")[0];
    const mapping: Record<string, jsonSchema.JSONSchema7TypeName> = {
        "@integer-reply": "integer",
        "@simple-string-reply: `OK`": `string`,
        "@string-reply": "string",
        "@bulk-string-reply: `nil`": "null",
        "@bulk-string-reply": "string",
        "@simple-string-reply": "string",
        "@array-reply": "array",
        "@nil-reply": "null",
        "@null-reply": "null",
        NULL: "null",
        "`nil`": "null",
    };
    /** @type {import('json-schema').JSONSchema7TypeName[]} */
    const typeMatches = Object.keys(mapping).reduce(
        (obj, key) => ({
            returnDoc: obj.returnDoc.split(key).join(""),
            matches: obj.returnDoc.includes(key) ? obj.matches.concat([mapping[key]]) : obj.matches,
        }),
        { returnDoc, matches: [] as jsonSchema.JSONSchema7TypeName[] }
    ).matches;
    if (typeMatches.length === 0) {
        return {};
    }
    if (typeMatches.length === 1) {
        return { type: typeMatches[0] };
    }
    return {
        anyOf: typeMatches.map(type => ({ type })),
    };
};

const jsonSchemaCommand = (command: commandTypes.Command, key: string) => ({
    ...command,
    arguments: (command?.arguments || []).map(arg => ({
        name: [arg.command, ...(Array.isArray(arg.name) ? arg.name : [arg.name])]
            .filter((val, i, arr) => val && val !== arr[i - 1])
            .join("_"),
        optional: arg.optional,
        schema: argToSchema(arg),
    })),
    return: argToReturn(key),
});
export type JsonSchemaCommand = ReturnType<typeof jsonSchemaCommand>;

const main = () => {
    const jsonified = Object.keys(cmnds).reduce(
        (dict, key: keyof typeof cmnds) =>
            (() => {
                const command: commandTypes.Command = cmnds[key] as commandTypes.Command;
                return {
                    ...dict,
                    [key]: jsonSchemaCommand(command, key),
                };
            })(),
        {}
    );

    writeFile(path.join(__dirname, "schema.json"), JSON.stringify(jsonified, null, 2));
};

if (require.main === module) {
    main();
}
