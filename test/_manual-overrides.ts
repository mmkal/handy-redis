import { identity, find, isFinite } from "lodash";
import { inspect } from "util";

// some of the auto-generated snapshot tests produce non-deterministic data
// e.g. memory usage information, random keys, or unsorted set operations.
// this file defines 'overrides' for the tests of those commands which reduce
// the noise in their outputs.

type OutputModifier = (originalOutputs: any[]) => any;

const snapshotTestOverrides: { [testRegex: string]: OutputModifier } = {};

const addOverride = (testRegex: string, modifyOutputs: OutputModifier) => {
    snapshotTestOverrides[testRegex] = modifyOutputs;
};

export const getOverride = (testName: string) => {
    const override = find(snapshotTestOverrides, (value, key) => new RegExp(key).test(testName));
    return override || identity;
};

const simplify = (func: (...args: any[]) => string | number | boolean | null | undefined) =>
    (...args: any[]) => `${func.name} => ${func(...args)}`;

export const _isFinite = simplify(isFinite);
export const _typeOf = simplify(function typeOf(thing) { return Array.isArray(thing) ? "array" : typeof thing; });
export const _sorted = simplify(function sorted(arr: any[]) { return inspect(arr.sort()); });
export const _firstTwoCharacters = simplify(function firstTwoCharacters(thing) {
    const str = `${thing}`;
    return str.substring(0, 2) + "*".repeat(Math.max(0, str.length - 2));
});
export const _arrayLength = simplify(function arrayLength(x: any[]) { return x.length; });
const noNumberValues = (o: any) => /^\d+$/.test(o) ? "[a number]" : o;
const sortArrays = (o: any) => Array.isArray(o) ? _sorted(o) : o;
const ignoreDecimals = (o: any) => JSON.parse(JSON.stringify(o).replace(/(\d+)\.(\d+)/g, number => number.split(".")[0] + ".??"));
const ignoreStreamIds = (streamIds: string[]) => (o: any) => JSON.parse(JSON.stringify(o).replace(/(\d+)-(\d+)/g, val => {
    streamIds.push(val);
    return `<<stream_${streamIds.indexOf(val)}>>`;
}));

addOverride("/lastsave.md", outputs => outputs.map(_isFinite));
addOverride("/time.md", outputs => outputs.map(_isFinite));
addOverride("/srandmember.md", outputs => outputs.map(o => Array.isArray(o) ? _arrayLength(o) : _typeOf(o)));
addOverride("/spop.md", outputs => outputs.map(o => Array.isArray(o) ? _arrayLength(o) : _typeOf(o)));
addOverride("/psetex.md", outputs => outputs.map(noNumberValues));
addOverride("/command.md", outputs => outputs.map(_typeOf));
addOverride("/dump.md", outputs => outputs.map(_typeOf));
addOverride("/command-count.md", outputs => outputs.map(noNumberValues));
addOverride("/pttl.md", outputs => outputs.map(noNumberValues));
addOverride("/pexpireat.md", outputs => outputs.map(_typeOf));
addOverride("/pexpire.md", outputs => outputs.map(noNumberValues));
addOverride("/info.md", outputs => outputs.map(_typeOf));
addOverride("/(sunionstore|sadd|smembers|sunion|smove|srem|spop|sinterstore|sdiffstore|sdiff).md", outputs => outputs.map(sortArrays));
addOverride("/keys.md", outputs => outputs.map(sortArrays));
addOverride("/geo(\\w+)\.md", outputs => outputs.map(ignoreDecimals));
addOverride("/(xadd|xack|xlen|xrange|xrevrange|xtrim).md", outputs => outputs.map(ignoreStreamIds([])));
