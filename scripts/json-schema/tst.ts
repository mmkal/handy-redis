const explode = (args: any[]): any[][] => {
    if (args.length === 0) {
        return [];
    }
    const [{ optional, ...first }, ...tail] = args;
    if (optional) {
        const xyz = explode(tail).flatMap(array => [first, ...array]);
    }
    return [];
};
