module.exports = {
    preset: "ts-jest",
    globals: {
        "ts-jest": { diagnostics: false },
    },
    testMatch: ["**/*.test.ts"],
    testPathIgnorePatterns: ["/node_modules/", "temp/"],
};
