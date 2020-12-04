export interface TypeScriptArg {
    /**
     * e.g. `key` or `...keys` or `key?`
     */
    name: string;
    /**
     * e.g. `string` or `string[]` or `[number, number, string]` or `Array<string | number>`
     */
    type: string;
}

export interface BasicCommandInfo {
    original: Command;
    docs: string;
    name: string;
    args: TypeScriptArg[];
}

export interface FullCommandInfo extends BasicCommandInfo {
    sampleReturnValues: any[];
    returnType: string;
}

export interface Command {
    summary: string;
    complexity: string;
    arguments?: Argument[];
    since: string;
    group:
        | "string"
        | "connection"
        | "server"
        | "list"
        | "cluster"
        | "generic"
        | "transaction"
        | "scripting"
        | "geo"
        | "hash"
        | "hyperloglog"
        | "pubsub"
        | "set"
        | "sorted_set";
}

export type ArgumentType = "string" | "key" | "enum" | "pattern" | "integer" | "double" | "posix time" | "block";

export interface Argument {
    name: string;
    type: ArgumentType | ArgumentType[];
    command?: string;
    enum?: string[];
    optional?: boolean;
    multiple?: boolean;
    variadic?: boolean;
    block?: Array<Argument>
}

export interface CommandCollection {
    [name: string]: Command;
}
