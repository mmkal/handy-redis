export const flattenDeep = (array: any[]): any[]  => {
    const flat = [] as any[];
    for (const item of array) {
        Array.isArray(item) ? flat.push(...flattenDeep(item)) : flat.push(item);
    }
    return flat;
};
