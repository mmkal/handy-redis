import { EOL } from "os";
import { tab, twotabs, buildScript, writeFile } from "./util";
import { getFullCommands } from "./generate-usages";

const generateClientInterface = async (getCommands: typeof getFullCommands) => {
    const typescriptCommands = await getCommands();

    const interfaceDeclarations = typescriptCommands.map(commandInfo => {
        const argList = commandInfo.args
            .map(a => `${a.name}: ${a.type}`)
            .join(`,${EOL}${twotabs}`);

        const argDeclaration = argList.length > 0
            ? [EOL, twotabs, argList, EOL, tab].join("")
            : "";

        return [
            `/**`,
            ` * ${commandInfo.docs}`,
            ` */`,
            `${commandInfo.name}(${argDeclaration}): Promise<${commandInfo.returnType}>;`,
        ].map(line => `    ${line}`).join(EOL);
    });
    const interfaceContents = [
        `import { RedisClient } from "redis";`,
        `export interface IHandyRedis {`,
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

    writeFile(interfaceFile, "export interface IHandyRedis { /* placeholder */ }");

    writeFile(interfaceFile, await generateClientInterface(getFullCommands));
});
