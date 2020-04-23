export const flattenDeep = (array: any[]): any[]  => {
    const flat = [] as any[];
    for (const item of array) {
      const values = Array.isArray(item) ? flattenDeep(item) : [item];
      for (const val of values) {
        flat.push(val);
      }
    }
    return flat;
};
