import { writeFile } from "./util";
import * as cmnds from "../redis-doc/commands.json";
import * as path from "path";
import * as jsonSchema from "json-schema";
import * as commandTypes from "./command";
import { fixupSchema } from "./fixup";
import { JsonSchemaCommand } from ".";

const argToSchema = (arg: commandTypes.Argument): jsonSchema.JSONSchema7 => {
    if (arg.variadic && arg.command) {
        return {
            type: "array",
            items: [
                { type: "string", enum: [arg.command] },
                { type: "array", items: argToSchema({ ...arg, multiple: false, variadic: false, command: undefined }) },
            ],
        };
    }
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
            throw Error(`don't know how to handle multi-commands`);
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
    type TypeNameOrType = jsonSchema.JSONSchema7TypeName | jsonSchema.JSONSchema7;
    const mapping: Record<string, TypeNameOrType> = {
        "@string-reply": "string",
        "@integer-reply": "integer",

        "@simple-string-reply: type of": {
            type: "string",
            enum: [`none`, `string`, `list`, `set`, `zset`, `hash`, `stream`],
        },
        "@simple-string-reply: A simple string reply indicating that the rewriting started": "string",
        "@simple-string-reply": { type: "string", const: "OK" },

        "@bulk-string-reply: `nil`": "null",
        "@bulk-string-reply": "string",
        "@array-reply": "array",
        "@nil-reply": "null",
        "@null-reply": "null",
        "NULL": "null",
        "`nil`": "null",
    };
    const typeMatches = Object.keys(mapping)
        .reduce(
            (obj, key) => {
                return {
                    returnDoc: obj.returnDoc.split(key).join(""),
                    matches: obj.returnDoc.includes(key) ? obj.matches.concat([mapping[key]]) : obj.matches,
                };
            },
            { returnDoc, matches: [] as TypeNameOrType[] }
        )
        .matches.map<jsonSchema.JSONSchema7>(t => (typeof t === "string" ? { type: t } : t));

    if (typeMatches.length <= 1) {
        return typeMatches[0] || {};
    }
    return {
        anyOf: typeMatches,
    };
};

const jsonSchemaCommand = (command: commandTypes.Command, key: string): JsonSchemaCommand => ({
    ...command,
    arguments: (command?.arguments || []).map(arg => ({
        name: [arg.command, arg.name]
            .flat()
            .filter(
                (val, i, arr) =>
                    val &&
                    val !== arr[i - 1] &&
                    val.toUpperCase() !== arr[i - 1] &&
                    val.toUpperCase() + "S" !== arr[i - 1]
            )
            .join("_"),
        optional: arg.optional,
        schema: argToSchema(arg),
    })),
    return: argToReturn(key),
});

const main = () => {
    const jsonified = Object.keys(cmnds).reduce(
        (dict, key: keyof typeof cmnds) => ({
            ...dict,
            [key]: jsonSchemaCommand(cmnds[key] as commandTypes.Command, key),
        }),
        {}
    );

    const fixed = fixupSchema(jsonified);

    writeFile(path.join(__dirname, "schema.json"), JSON.stringify(fixed, null, 2));
};

if (require.main === module) {
    main();
}
