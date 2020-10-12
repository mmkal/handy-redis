/**
 * In some cases, the cli block's in redis-doc's markdown is "wrong". Or at least,
 * it's slightly inconsistent with the way commands.json specifies arguments. See
 * the linked pull request - this might not be fixed
 */
export const fixMarkdownExampleLine = (line: string) => {
    line = fixGeoradiusExample(line);
    line = fixLposExample(line);

    return line;
};

/** commands.json specifies WITHCOORD before WITHDIST. https://github.com/redis/redis-doc/pull/1414 */
function fixGeoradiusExample(line: string) {
    const withArgsFlipped = "GEORADIUS Sicily 15 37 200 km WITHDIST WITHCOORD";
    return line === withArgsFlipped ? line.replace("WITHDIST WITHCOORD", "WITHCOORD WITHDIST") : line;
}

/** commands.json specifies RANK before COUNT. No PR since the other one hasn't been accept ATOW */
function fixLposExample(line: string) {
    const withArgsFlipped = `LPOS mylist 3 COUNT 0 RANK 2`;
    return line === withArgsFlipped ? line.replace("COUNT 0 RANK 2", "RANK 2 COUNT 0") : line;
}
