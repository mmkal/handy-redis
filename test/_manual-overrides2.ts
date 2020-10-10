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

addOverride("/lastsave.test.ts", simplifiers.isFinite);
addOverride("/time.test.ts", simplifiers.isFinite);
addOverride("/srandmember.test.ts", o => (Array.isArray(o) ? simplifiers.arrayLength(o) : simplifiers.typeOf(o)));
addOverride("/spop.test.ts", o => (Array.isArray(o) ? simplifiers.arrayLength(o) : simplifiers.typeOf(o)));
addOverride("/psetex.test.ts", simplifiers.someNumberValue);
addOverride("/command.test.ts", simplifiers.typeOf);
addOverride("/dump.test.ts", simplifiers.typeOf);
addOverride("/command-count.test.ts", simplifiers.someNumberValue);
addOverride("/pttl.test.ts", simplifiers.someNumberValue);
addOverride("/pexpireat.test.ts", simplifiers.typeOf);
addOverride("/pexpire.test.ts", simplifiers.someNumberValue);
addOverride("/info.test.ts", simplifiers.typeOf);
addOverride(
    "/(sunionstore|sadd|smembers|sunion|smove|srem|spop|sinterstore|sdiffstore|sdiff).test.ts",
    simplifiers.sortArrays
);
addOverride("/keys.test.ts", simplifiers.sortArrays);
addOverride("/geo(\\w+).test.ts", simplifiers.ignoreDecimals);
addOverride("/(xadd|xack|xlen|xrange|xrevrange|xtrim).test.ts", simplifiers.ignoreStreamIds);

export const override = (outputs: Record<string, unknown>, testFileName: string) => {
    const override = find(outputOverrides, (value, key) => new RegExp(key).test(testFileName.replace(/\\/g, "/")));
    return mapValues(outputs, override || identity);
};
