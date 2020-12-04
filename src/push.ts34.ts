// Typescript <4 doesn't support ... at the beginning of tuples, so this just creates an array with a union of all types
export type Push<A extends unknown[], B> = Array<A[number] | B>;
