// import { test } from "ava";
import { identity, find, isFinite } from "lodash";

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
export const _typeOf = simplify(function typeOf(thing) { return typeof thing; });
export const _sorted = simplify(function sorted(arr: any[]) { return JSON.stringify(arr.sort()); });
export const _firstTwoCharacters = simplify(function firstTwoCharacters(thing) {
    const str = `${thing}`;
    return str.substring(0, 2) + "*".repeat(Math.max(0, str.length - 2));
});
export const _arrayLength = simplify(function arrayLength(x: any[]) { return x.length; });

addOverride("/lastsave.md", outputs => outputs.map(simplify(isFinite)));
addOverride("/time.md", outputs => outputs.map(_isFinite));
addOverride("/srandmember.md", outputs => outputs.map(o => Array.isArray(o) ? _arrayLength(o) : _typeOf(o)));
addOverride("/spop.md", outputs => outputs.map(o => Array.isArray(o) ? _arrayLength(o) : _typeOf(o)));
addOverride("/psetex.md", outputs => outputs.map(_firstTwoCharacters));
addOverride("/pexpireat.md", outputs => outputs.map(_typeOf));
addOverride("/pexpire.md", outputs => outputs.map(_firstTwoCharacters));
addOverride("/info.md", outputs => outputs.map(_typeOf));
addOverride("/pttl.md", outputs => outputs.map(_firstTwoCharacters));
