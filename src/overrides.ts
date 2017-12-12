import { IHandyRedis } from "./generated/interface";
import { Multi } from "redis";

export const useUnderlyingImpl = new Set<keyof IHandyRedis>([
    "multi"
]);

export const additionalFunctions = {
    /** promisified multi execution */
    execMulti: <T = {}>(multi: Multi) => new Promise<T[]>(
        (resolve, reject) => multi.exec((err, data) => err ? reject(err) : resolve(data))
    ),
};

export type AdditionalFunctions = typeof additionalFunctions;
