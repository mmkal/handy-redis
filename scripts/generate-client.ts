import { EOL } from "os";
import * as _ from "lodash";
import { tab, twotabs, buildScript, writeFile } from "./util";
import { getFullCommands } from "./generate-usages";
import { getBasicCommands, FullCommandInfo } from "./command/index";
import * as tsc from "typescript";
import { resolve } from "path";

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
            `${commandInfo.name}(${argDeclaration}): Promise<${commandInfo.returnType}>;`, // todo get return type cleverly
        ].map(line => `    ${line}`).join(EOL);
    });
    const interfaceContents = [
        `import { RedisClient } from "redis";`,
        `export interface IHandyRedis {`,
        `   redis: RedisClient;`,
        ...interfaceDeclarations,
        `}`,
        ``,
    ].join(EOL);

    return interfaceContents;
};

const generateClientImplementation = async (getCommands: typeof getFullCommands) => {
    const typescriptCommands = await getCommands();

    const methods =  _.uniqBy(typescriptCommands, c => c.name).map(commandInfo => {
        return [
            `/**`,
            ` * ${commandInfo.docs}`,
            ` */`,
            `${commandInfo.name}(...args: any[]) {`,
            `    const flattenedArgs = flattenDeep(args);`,
            `    return new Promise<any>((resolve, reject) => {`,
            `       (this.redis as any).${commandInfo.name}.apply(`,
            `           this.redis,`,
            `           [`,
            `               ...flattenedArgs,`,
            `               (err: any, data: any) => err ? reject(err) : resolve(data),`,
            `           ]`,
            `       );`,
            `   });`,
            `}`,
        ].map(line => `    ${line}`).join(EOL);
    });

    return [
        `import { flattenDeep } from "../flatten";`,
        `import { RedisClient } from "redis";`,
        `import { IHandyRedis } from "./interface";`,
        `class HandyRedis implements IHandyRedis {`,
        `    constructor(public redis: RedisClient) {}`,
        ...methods.filter(x => x),
        `}`,
        `export const createHandyClient = (redis: RedisClient): IHandyRedis => new HandyRedis(redis);`,
        ``,
    ].join(EOL);
};

buildScript(module, async () => {
    // first create a placeholder client, without return types. This client is used to get return types
    // for example commands
    const getPlaceholderCommands = async () => getBasicCommands().map(command => <FullCommandInfo> {
        ...command,
        returnType: "any",
        sampleReturnValues: [],
    });

    const [interfaceFile, clientFile] = ["interface", "client"].map(f => `src/generated/${f}.ts`);

    writeFile(interfaceFile, await generateClientInterface(getPlaceholderCommands));
    writeFile(clientFile, await generateClientImplementation(getPlaceholderCommands));

    // compile the placeholder client so it can be used
    const tsconfig = require(resolve("tsconfig.json"));
    const program = tsc.createProgram([interfaceFile, clientFile], tsconfig.compilerOptions);
    program.emit();

    writeFile(interfaceFile, await generateClientInterface(getFullCommands));
    writeFile(clientFile, await generateClientImplementation(getFullCommands));
});
