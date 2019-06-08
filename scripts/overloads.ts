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

    return variations;
};
