import { commandDoc, readdirWithPaths } from "./util";
import { readFileSync } from "fs";
import * as _ from "lodash";
import * as spawn from "cross-spawn";

export const getExampleRuns = async () => {
    const examples = getCliExamples();
    const redisCli = spawn("docker", ["exec", "-i", "handy_redis", "redis-cli", "--no-raw"], { env: process.env });
    redisCli.stdin.setDefaultEncoding("utf-8");
    const redisInteractor = {
        onstdout: (data: string) => console.log(data),
        onstderr: (data: string) => console.warn(data),
        sendCommand: (command: string) => new Promise<Output>((resolve, reject) => {
            redisInteractor.onstdout = data => {
                console.log(data);
                resolve(parseCommandOutput(command, data, null));
            };
            redisInteractor.onstderr = data => {
                console.error(data);
                resolve(parseCommandOutput(command, null, data));
            };
            console.log(">", command);
            redisCli.stdin.write(`${command}\n`);
        }),
    };

    redisCli.stdout.on("data", data => redisInteractor.onstdout(data.toString()));
    redisCli.stderr.on("data", data => redisInteractor.onstderr(data.toString()));

    const runs = new Array<CliExampleRun>();
    for (const example of examples) {
        await redisInteractor.sendCommand("FLUSHALL"); // clear database before each example
        const outputs = new Array<Output>();
        for (const line of example.lines) {
            const output = await redisInteractor.sendCommand(line);
            outputs.push(output);
        }

        runs.push({
            example,
            outputs
        });
    }
    redisCli.kill();
    return runs;
};

export const getCliExamples = () => {
    const eolMarker = " END_OF_LINE_MARKER ";
    const moreExamplesDir = "scripts/more-cli-examples";
    const filesWithExamples = _.flatten([commandDoc, moreExamplesDir].map(readdirWithPaths));
    const allExamples = _.flatten(filesWithExamples
        .map(file => {
            const contents = readFileSync(file, "utf8")
                .split(/\r?\n/)
                .join(eolMarker)
                ;

            const tripleBacktick = "```";
            const cliBlock = (body: string) => `${tripleBacktick}cli${eolMarker}${body}${tripleBacktick}`;
            const cliRegex = new RegExp(cliBlock(".+?"), "g");
            const matches = contents.match(cliRegex) || [];

            // allow for files in "more examples" dir to contain only commands
            if (matches.length === 0 && file.startsWith(moreExamplesDir)) {
                matches.push(contents);
            }

            return matches.map((m, index) => ({
                file,
                index,
                lines: m
                    .replace(/```(cli)?/g, "")
                    .split(eolMarker)
                    .map(line => line.trim())
                    .filter(line => line),
            }) as CliExample);
        })
    );

    return allExamples;
};

const parseCommandOutput = (command: string, stdout: string | null, stderr: string | null): Output => {
    stdout = stdout ? stdout.trim() : "";
    stderr = stderr ? stderr.trim() : "";
    if (stderr) {
        return { command, type: "catastrophic-failure", value: stdout };
    }
    if (stdout === "OK") {
        return { command, type: stdout, value: stdout };
    }
    for (const type of ["error", "integer"] as Array<Output["type"]>) {
        const prefix = `(${type}) `;
        if (stdout.startsWith(prefix)) {
            return { command, type, value: stdout.substring(prefix.length) };
        }
    }
    return { command, type: "any", value: stdout };
};

export interface CliExample {
    /**
     * The name of the file the example was found in
     */
    file: string;
    /**
     * The zero-based index of the example in the file
     */
    index: number;
    /**
     * The lines the example consists of
     */
    lines: string[];
}

export interface CliExampleRun {
    example: CliExample;
    outputs: Output[];
}

export interface Output {
    command: string;
    type: "string" | "integer" | "error" | "any" | "OK" | "catastrophic-failure";
    value: any;
}
