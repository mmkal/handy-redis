import { EOL } from "os";
import { tab, twotabs, buildScript, writeFile } from "./util";
import { getFullCommands } from "./generate-usages";
import { useUnderlyingImpl } from "../src/overrides";

const generateClientInterface = async (getCommands: typeof getFullCommands) => {
    const typescriptCommands = await getCommands();

    // hack: hset now can set multiple hash keys at once, so the generated type is (string, ...[string, string])
    // it used to be (string, string, string) - explicitly allow that here.
    // todo: remove this hack in next major version. Or earlier, if there's a better way to handle this class of command
    const hsetIndex = typescriptCommands.findIndex(c => c.name === "hset");
    typescriptCommands.splice(hsetIndex, 0, {
        ...typescriptCommands[hsetIndex],
        args: ["key", "field", "value"].map(name => ({ name, type: "string" }))
    });

    const interfaceDeclarations = typescriptCommands.map(commandInfo => {
        const docs = [
            `/**`,
            ` * ${commandInfo.docs}`,
            ` */`,
        ];
        if (useUnderlyingImpl.has(commandInfo.name as any)) {
            return [
                ...docs,
                `${commandInfo.name}: RedisClient["${commandInfo.name}"];`,
            ].map(line => `    ${line}`).join(EOL);
        }

        const argList = commandInfo.args
            // hack: setbit allowed a string as the last argument at one point.
            // for backwards compatibility, continue allowing it even though redis-doc has updated
            // todo: remove this hack in v2
            .map(a => commandInfo.name === "setbit" && a.name === "value" ? { ...a, type: "number | string" } : a)
            .map(a => `${a.name}: ${a.type}`)
            .join(`,${EOL}${twotabs}`);

        const argDeclaration = argList.length > 0
            ? [EOL, twotabs, argList, EOL, tab].join("")
            : "";

        return [
            ...docs,
            `${commandInfo.name}(${argDeclaration}): Promise<${commandInfo.returnType}>;`,
        ].map(line => `    ${line}`).join(EOL);
    });
    const interfaceContents = [
        `import { RedisClient } from "redis";`,
        `import { AdditionalFunctions } from "../overrides";`,
        `export interface IHandyRedis extends AdditionalFunctions {`,
        `    /** the underlying node_redis client */`,
        `    redis: RedisClient;`,
        ...interfaceDeclarations,
        `}`,
        ``,
    ].join(EOL);

    return interfaceContents;
};

buildScript(module, async () => {
    const interfaceFile = `src/generated/interface.ts`;

    writeFile(interfaceFile, "export type IHandyRedis = any; // placeholder");

    writeFile(interfaceFile, await generateClientInterface(getFullCommands));
});
