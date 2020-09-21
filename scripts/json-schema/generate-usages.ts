import { schema } from ".";
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs";

const extractCliExamples = (markdown: string) => {
    const eolMarker = " END_OF_LINE_MARKER ";
    const singleLine = markdown.replace(/\r?\n/g, eolMarker);

    const tripleBacktick = "```";
    const cliBlock = (body: string) => `${tripleBacktick}cli${eolMarker}${body}${tripleBacktick}`;
    const cliRegex = new RegExp(cliBlock(".+?"), "g");
    const matches = singleLine.match(cliRegex) || [];

    return matches.map((m, index) => {
        const lines = m
            .replace(/```(cli)?/g, "")
            .split(eolMarker)
            .map(line => line.trim())
            .filter(Boolean);

        return { index, lines };
    });
};

const findMarkdownFiles = () => glob.sync("**/*.md", { cwd: path.join(__dirname, "..") });

const extractAllCliExamples = () => {
    const markdownFiles = findMarkdownFiles();
    return markdownFiles.flatMap(file => {
        const content = fs.readFileSync(file).toString();
        const examples = extractCliExamples(content);
        return examples.map(ex => ({ file, ...ex }));
    });
};

type ExtractedCliExample = ReturnType<typeof extractAllCliExamples>[number];

const tokenizeCliExample = (ex: ExtractedCliExample) => {
    return {
        ...ex,
        commands: ex.lines.map(x => {
            if (x.includes('"')) throw Error(`CLI example tokenizer is too stupid to deal with quotes/escapes`)
            return {argv: x.split(' ')}
        }),
    };
};

const usages = Object.keys(schema).map(command => {});
