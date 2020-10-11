export type JsonSchemaCommand = {
    summary: string;
    complexity: string;
    since: string;
    group: string;
    arguments: Array<{
        name: string;
        optional?: boolean;
        schema: import("json-schema").JSONSchema7;
    }>;
    return: import("json-schema").JSONSchema7;
};

export type JsonSchemaCommandArgument = JsonSchemaCommand["arguments"][number];

export declare const schema: Record<string, JsonSchemaCommand>;
