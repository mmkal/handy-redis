/* istanbul ignore file */
import { Argument } from "./command";
import { get } from "lodash";

export const getOverloads = (args: Argument[]): Argument[][] => {
    if (args.length <= 1) {
        return get(args, "[0].optional") ? [args, []] : [args];
    }
    const head = args[0];
    const tailOverloads = getOverloads(args.slice(1));
    const overloads = tailOverloads.map(argsSubList => [head, ...argsSubList]);
    if (head.optional) {
        overloads.push(...tailOverloads);
    }

    return overloads;
};
