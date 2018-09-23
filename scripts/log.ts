import { load } from "dotenv-extended";

load();

const maybeLog = (logFn: Function, regex: string | undefined) => (...args: any[]) => {
    if (process.env.VERBOSE || regex === "" || args.join(" ").match(regex || ".*")) {
        logFn(...args);
    }
};
// tslint:disable no-console
export const warn = maybeLog(console.warn, process.env.WARN_REGEX);
export const log = maybeLog(console.log, process.env.LOG_REGEX);
export const error = maybeLog(console.error, process.env.ERROR_LOG_REGEX);
