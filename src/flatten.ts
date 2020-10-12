export const flattenDeep = (array: any[]): any[] => {
    const flat = [] as any[];
    for (const item of array) {
        if (Array.isArray(item)) {
            for (const val of flattenDeep(item)) {
                flat.push(val);
            }
        } else {
            flat.push(item);
        }
    }
    return flat;
};
