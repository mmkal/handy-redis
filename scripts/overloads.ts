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

    const overloadsWithFlattenedTailTuples = overloads
        .filter(v => {
            const last = v[v.length - 1];
            return last && last.multiple && Array.isArray(last.type);
        })
        .map(v => {
            const last = v[v.length - 1];
            const types: typeof last.type[] = last.type as any;
            return v.slice(0, -1).concat(types.map((t, i) => ({ ...last, name: last.name.split("_")[i], type: t, multiple: false })));
        });

    overloads.unshift(...overloadsWithFlattenedTailTuples);

    return overloads;
};
