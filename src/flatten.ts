export const flattenDeep = (args: any[]): any[]  => {
    if (!Array.isArray(args)) {
        return args;
    }
    return [].concat(...args.map(flattenDeep) as any);
};
