/* istanbul ignore file */
import { Argument } from "./command";
import { get } from "lodash";

export const getOverloads = (args: Argument[]): Argument[][] => {
    if (args.length <= 1) {
        const overloads = [args];
        if (get(args, "[0].optional")) {
            overloads.push([]);
        }
        return overloads;
    }
    const first = args[0];
    const theRest = args.slice(1);
    let variations = new Array<Argument[]>();
    const overloadsOfTheRest = getOverloads(theRest);
    const argListsWithFirst = overloadsOfTheRest.map(argsSubList => [
        first,
        ...argsSubList
    ]);
    variations = variations.concat(argListsWithFirst);
    if (first.optional) {
        variations = variations.concat(overloadsOfTheRest);
    }

    const variationsWithMultipleTuplesFlattened = variations
        .filter(v => {
            const last = v[v.length - 1];
            return last && last.multiple && Array.isArray(last.type);
        })
        .map(v => {
            const last = v[v.length - 1];
            const types: typeof last.type[] = last.type as any;
            return v.slice(0, -1).concat(types.map((t, i) => ({ ...last, name: last.name.split("_")[i], type: t, multiple: false })));
        });

    variations = variationsWithMultipleTuplesFlattened.concat(variations);

    return variations;
};
