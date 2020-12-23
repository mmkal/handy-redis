import * as lodash from "lodash";
import * as util from "util";

// some of the auto-generated snapshot tests produce non-deterministic data
// e.g. memory usage information, random keys, or unsorted set operations.
// this file defines 'overrides' for the tests of those commands which reduce
// the noise in their outputs.

type OutputModifier = (originalOutput: unknown) => unknown;

type Fuzzable = (input: unknown) => unknown;

const fuzzifyOutput = (func: Fuzzable) => (input: unknown) => {
    const result = func(input);
    return JSON.stringify(result) === JSON.stringify(input) ? result : `${func.name} => ${result}`;
};

const getFuzzers = <T extends Record<string, Fuzzable>>(record: T) => lodash.mapValues(record, fuzzifyOutput);

export const fuzzers = getFuzzers({
    typeOf: thing => (Array.isArray(thing) ? "array" : typeof thing),
    sorted: (arr: unknown[]) => util.inspect(arr.sort()),
    firstTwoCharacters: thing => {
        const str = `${thing}`;
        return str.substring(0, 2) + "*".repeat(Math.max(0, str.length - 2));
    },
    arrayLength: (arr: unknown[]) => arr.length,
    someNumberValue: o => (/^\d+$/.test(`${o}`) ? "[a number]" : o),
    sortArrays: o => (Array.isArray(o) ? util.inspect(o.sort()) : o),
    ignoreNumbers: o =>
        typeof o === "number" ? "???" : JSON.parse(JSON.stringify(o).replace(/(\d+)(\.(\d+))?/g, () => "???")),
    ignoreDecimals: o => JSON.parse(JSON.stringify(o).replace(/(\d+)\.(\d+)/g, number => number.split(".")[0] + ".??")),
    ignoreStreamIds: ((streamIds: string[]) => (o: any) =>
        JSON.parse(
            JSON.stringify(o).replace(/(\d+)-(\d+)/g, val => {
                streamIds.push(val);
                return `<<stream_${streamIds.indexOf(val)}>>`;
            })
        ))([]),
    jsonify: JSON.stringify,
});

const outputOverrides: { [testRegex: string]: OutputModifier } = {
    "/lastsave.test.ts": fuzzers.ignoreNumbers,
    "/time.test.ts": fuzzers.ignoreNumbers,
    "/srandmember.test.ts": o => (Array.isArray(o) ? fuzzers.arrayLength(o) : fuzzers.typeOf(o)),
    "/spop.test.ts": o => (Array.isArray(o) ? fuzzers.arrayLength(o) : fuzzers.typeOf(o)),
    "/psetex.test.ts": fuzzers.someNumberValue,
    "/command.test.ts": fuzzers.typeOf,
    "/dump.test.ts": fuzzers.typeOf,
    "/command-count.test.ts": fuzzers.someNumberValue,
    "/pttl.test.ts": fuzzers.someNumberValue,
    "/pexpireat.test.ts": fuzzers.typeOf,
    "/pexpire.test.ts": fuzzers.someNumberValue,
    "/info.test.ts": fuzzers.typeOf,
    "/(sunionstore|sadd|smembers|sunion|smove|srem|spop|sinterstore|sdiffstore|sdiff).test.ts": fuzzers.sortArrays,
    "/keys.test.ts": fuzzers.sortArrays,
    "/geo(\\w+).test.ts": fuzzers.ignoreDecimals,
    "/(xadd|xack|xlen|xrange|xrevrange|xtrim).test.ts": fuzzers.ignoreStreamIds,
    "/(setbit|setrange).test.ts": JSON.stringify,
};

export const fuzzify = (outputs: Record<string, unknown>, testFileName: string) => {
    const overrideFn = lodash.find(outputOverrides, (value, key) =>
        new RegExp(key).test(testFileName.replace(/\\/g, "/"))
    );
    return lodash.mapValues(outputs, overrideFn || (x => x));
};
