// Variadic tuple prefixes only work in ts>4. To support lower typescript versions, check if the feature works
// this means we need ts-ignore, not ts-expect-error because it's _not_ an error in ts>4
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Push_ts4<A extends unknown[], B> = [...A, B];
type VariadicTuplesPrefixesSupported = Push_ts4<[1, 2], 3> extends [1, 2, 3] ? "yes" : "no";

/**
 * @example
 * Push<[1, 2], 3> // resolves to [1, 2, 3] for typescript>=4, or (1 | 2 | 3)[] for typescript<4
 */
export type Push<A extends unknown[], B> = VariadicTuplesPrefixesSupported extends "yes"
    ? Push_ts4<A, B>
    : Array<A[number] | B>;
