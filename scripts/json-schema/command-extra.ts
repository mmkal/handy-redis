import { JsonSchemaCommand } from "./generate";

export const extras: Record<string, Partial<JsonSchemaCommand>> = {
    GET: {
        return: {
            type: "string",
        },
    },
};
