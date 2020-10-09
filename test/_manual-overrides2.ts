import { identity, find, isFinite, mapValues } from "lodash";
import { inspect } from "util";

// some of the auto-generated snapshot tests produce non-deterministic data
// e.g. memory usage information, random keys, or unsorted set operations.
// this file defines 'overrides' for the tests of those commands which reduce
// the noise in their outputs.

type OutputModifier = (originalOutput: unknown) => unknown;

const outputOverrides: { [testRegex: string]: OutputModifier } = {};

const addOverride = (testRegex: string, modifyOutputs: OutputModifier) => {
    outputOverrides[testRegex] = modifyOutputs;
};

type Simplifiable = (input: unknown) => unknown;
const getSimplifiers = <T extends Record<string, Simplifiable>>(record: T) => mapValues(record, simplify);

const simplify = (func: Simplifiable) => (input: unknown) => {
    const result = func(input);
    return result === input ? result : `${func.name} => ${result}`;
};

const simplifiers = getSimplifiers({
    isFinite,
    typeOf: thing => (Array.isArray(thing) ? "array" : typeof thing),
    sorted: (arr: unknown[]) => inspect(arr.sort()),
    firstTwoCharacters: thing => {
        const str = `${thing}`;
        return str.substring(0, 2) + "*".repeat(Math.max(0, str.length - 2));
    },
    arrayLength: (arr: unknown[]) => arr.length,
    someNumberValue: o => (/^\d+$/.test(`${o}`) ? "[a number]" : o),
    sortArrays: o => (Array.isArray(o) ? inspect(o.sort()) : o),
    ignoreDecimals: o => JSON.parse(JSON.stringify(o).replace(/(\d+)\.(\d+)/g, number => number.split(".")[0] + ".??")),
    ignoreStreamIds: ((streamIds: string[]) => (o: any) =>
        JSON.parse(
            JSON.stringify(o).replace(/(\d+)-(\d+)/g, val => {
                streamIds.push(val);
                return `<<stream_${streamIds.indexOf(val)}>>`;
            })
        ))([]),
});

addOverride("/lastsave.ts", simplifiers.isFinite);
addOverride("/time.ts", simplifiers.isFinite);
addOverride("/srandmember.ts", o => (Array.isArray(o) ? simplifiers.arrayLength(o) : simplifiers.typeOf(o)));
addOverride("/spop.ts", o => (Array.isArray(o) ? simplifiers.arrayLength(o) : simplifiers.typeOf(o)));
addOverride("/psetex.test.ts", simplifiers.someNumberValue);
addOverride("/command.ts", simplifiers.typeOf);
addOverride("/dump.ts", simplifiers.typeOf);
addOverride("/command-count.ts", simplifiers.someNumberValue);
addOverride("/pttl.ts", simplifiers.someNumberValue);
addOverride("/pexpireat.ts", simplifiers.typeOf);
addOverride("/pexpire.ts", simplifiers.someNumberValue);
addOverride("/info.ts", simplifiers.typeOf);
addOverride(
    "/(sunionstore|sadd|smembers|sunion|smove|srem|spop|sinterstore|sdiffstore|sdiff).ts",
    simplifiers.sortArrays
);
addOverride("/keys.ts", simplifiers.sortArrays);
addOverride("/geo(\\w+).ts", simplifiers.ignoreDecimals);
addOverride("/(xadd|xack|xlen|xrange|xrevrange|xtrim).ts", simplifiers.ignoreStreamIds);

export const override = (outputs: Record<string, unknown>, testFileName: string) => {
    const override = find(outputOverrides, (value, key) => new RegExp(key).test(testFileName.replace(/\\/g, "/")));
    return mapValues(outputs, override || identity);
};
