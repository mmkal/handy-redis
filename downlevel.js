const childProcess = require("child_process");
const fs = require("fs");

const main = () => {
    const tempFolder = `temp/downlevel`;
    childProcess.execSync(`rm -rf ${tempFolder}`, { stdio: "inherit" });
    fs.mkdirSync(`${tempFolder}`, { recursive: true });
    childProcess.execSync(`cp -r dist ${tempFolder}/0`, { stdio: "inherit" });
    for (let i = 1; i < 10; i++) {
        const [prev, next] = [i - 1, i].map(n => `${tempFolder}/${n}`);
        console.log(`downleveling into ${next}`);
        childProcess.execSync(`downlevel-dts ${prev} ${next} --to=3.4`, { stdio: "inherit" });

        const [prevResult, nextResult] = [prev, next].map(folder =>
            fs.readFileSync(`${folder}/generated/interface.d.ts`).toString()
        );
        if (prevResult === nextResult) {
            if (i <= 2) {
                throw new Error(
                    `downleveling stabilised too quickly, maybe https://github.com/sandersn/downlevel-dts/issues/50 has been fixed?`
                );
            }
            const target = `ts34/dist`;

            console.log(`downleveling stabilised after ${i} iterations, copying to ${target}.`);
            childProcess.execSync(`rm -rf ${target}`, { stdio: "inherit" });

            fs.mkdirSync("ts34", { recursive: true });

            childProcess.execSync(`cp -r ${next} ${target}`, { stdio: "inherit" });

            console.log(`Replacing push implementation incompatible with typescript < 4`);
            childProcess.execSync(`mv ${target}/push.ts34.d.ts ${target}/push.d.ts`, { stdio: "inherit" });

            console.log(`Running old version of typescript on output`);
            childProcess.execSync(`npx -p typescript@3.8 tsc ts34/dist/index.d.ts --noEmit`, { stdio: "inherit" });

            console.log(`Removing temporary files`);
            childProcess.execSync(`rm -rf ${tempFolder}`, { stdio: "inherit" });

            console.log("Done.");
            return;
        }
        console.log({ prev, next }, "had different outputs, running again");
    }
    throw new Error(`Downleveling failed!`);
};

main();
