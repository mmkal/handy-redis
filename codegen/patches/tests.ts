/**
 * Apply patches which fix generated test code. The tests are reverse-engineered from
 * markdown commands, and un-flattening the commands is pretty complex. It's not user-
 * facing, so these are mostly shortcuts to avoid the reverse engineering from being too
 * "smart". It's already pretty complex (much more complex than the client generation),
 * and making it _perfect_ isn't really worth it.
 */
export const fixupGeneratedTests = (filename: string) => {
    const fixers = [
        fixKeyWeightsOverlyComplexParsingIssue,
        catchDecrOutOfRange(filename),
        commentOutFutureReleaseFeatures(filename),
        commentOutNonDeterministicCommands(filename),
    ];
    return (code: string): string => {
        fixers.forEach(fix => (code = fix(code)));

        return code;
    };
};

/**
 * at time of writing, redis have only released 6.0.8 on dockerhub. These features
 * aren't available in that image
 */
function commentOutFutureReleaseFeatures(filename: string) {
    const unsupported = [
        "lmove",
        "lpos",
        "smismember",
        "zinter",
        "zmscore",
        "zunion",
        "zdiff",
        "zdiffstore",
        "zintercard",
        "sintercard",
        "expiretime",
    ];
    const match = unsupported.find(u => filename.endsWith(`${u}.md`));
    if (match) {
        return (code: string) => `// ${match} not supported by node_redis! ${code}`;
    }

    const v7Overloads = {
        expire: [`"XX"`, `"NX"`],
        pexpire: [`"XX"`, `"NX"`],
    };

    const entry = Object.entries(v7Overloads).find(e => filename.endsWith(`${e[0]}.md`));

    if (entry) {
        return (code: string) =>
            entry[1].some(s => code.includes(s)) ? `// ${entry[1]} not supported in redis v6! ${code}` : code;
    }

    return (code: string) => code;
}

/**
 * at time of writing, redis have only released 6.0.8 on dockerhub. These features
 * aren't available in that image
 */
function commentOutNonDeterministicCommands(filename: string) {
    const commands = ["zrandmember", "hrandfield"];
    const match = commands.find(u => filename.endsWith(`${u}.md`));
    if (match) {
        return (code: string) => `// ${match} gives a non-deterministic output! ${code}`;
    }

    return (code: string) => code;
}

/**
 * zunionstore and zinterstore use a special `numkeys 3 weights 1 2 3` format which the decoder
 * isn't smart enough to handle. Just throw a ts-expect-error on there
 */
function fixKeyWeightsOverlyComplexParsingIssue(code: string) {
    if (code.match(/(zunionstore|zinterstore).*WEIGHTS/)) {
        return [`// @ts-expect-error (not smart enough to deal with numkeys)`, code].join("\n");
    }
    if (code.match(/(zunion|zinter|zdiff)\b.*"zset1","zset2"/)) {
        return code.replace(`"zset1","zset2"`, `["zset1", "zset2"]`);
    }
    return code;
}

/** The `decr.md` example shows an error scenario. Explicitly handle it */
function catchDecrOutOfRange(filename: string) {
    if (filename.endsWith("decr.md")) {
        const catchable = `outputs.r3 = await client.decr("mykey")`;
        return (code: string) => code.replace(catchable, catchable + `.catch(e => e)`);
    }
    return (code: string) => code;
}
