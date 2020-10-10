import { JsonSchemaCommand } from ".";

/** Collection of fixes for the json schema dictionary generated by parsing redis-doc's command.json */
export const fixupSchema = (schema: Record<string, JsonSchemaCommand>) => {
    const clone: typeof schema = JSON.parse(JSON.stringify(schema));

    fixSetEnum(clone);

    return clone;
};

export const fixupExample = (example: string) => {
    const array = [example] // use array as a stupid monad-like data structure
        .map(fixGeoradiusExample)
        .map(s => s);

    return array[0];
};

export const fixupGeneratedCode = (filename: string) => (code: string) => {
    const array = [code] // use array as a stupid monad-like data structure
        .map(fixKeyWeightsOverlyComplexParsingIssue)
        .map(catchDecrOutOfRange(filename))
        .map(s => s);

    return array[0];
};

/** https://github.com/redis/redis-doc/pull/1232 */
function fixSetEnum(schema: Record<string, JsonSchemaCommand>) {
    const badSetArg = schema.SET.arguments.find(
        a => a.name === "expiration" && a.schema.enum?.join(",") === "EX seconds,PX milliseconds"
    )!;
    badSetArg.schema = {
        type: "array",
        items: [{ type: "string", enum: ["EX", "PX"] }, { type: "number" }],
    };
}

function fixGeoradiusExample(example: string) {
    const withArgsFlipped = "GEORADIUS Sicily 15 37 200 km WITHDIST WITHCOORD";
    return example === withArgsFlipped ? example.replace("WITHDIST WITHCOORD", "WITHCOORD WITHDIST") : example;
}

function fixKeyWeightsOverlyComplexParsingIssue(code: string) {
    return code.match(/(zunionstore|zinterstore).*WEIGHTS/)
        ? `// @ts-expect-error (not smart enough to deal with numkeys)
        ${code}`
        : code;
}

function catchDecrOutOfRange(filename: string) {
    if (filename.endsWith("decr.md")) {
        const catchable = `outputs.r3 = await client.decr("mykey")`;
        return (code: string) => code.replace(catchable, catchable + `.catch(e => e)`);
    }
    return (code: string) => code;
}
