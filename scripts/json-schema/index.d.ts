export declare const schema: Record<
    string,
    {
        summary: string;
        complexity: string;
        since: string;
        group: string;
        arguments: Array<{
            name: string;
            optional: boolean;
            schema: import("json-schema").JSONSchema7;
        }>;
        return: {};
    }
>;
