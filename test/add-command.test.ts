import { addNodeRedisCommand, createNodeRedisClient } from "../src";

// skipped because the latest version of node_redis does now support lpos. Keeping the test around as documentation
// or in case a new command comes out that node_redis takes a while to adopt.
test.skip("add command works", async () => {
    const oldClient = createNodeRedisClient();

    await oldClient.rpush("mylist", "a", "b", "c", "1", "2", "3", "c", "c");

    expect(() => oldClient.lpos("mylist", "c")).toThrowError(/oldClient.lpos is not a function/);

    addNodeRedisCommand("lpos");

    const newClient = createNodeRedisClient();

    expect(await newClient.lpos("mylist", "c")).toEqual(2);

    oldClient.end(true);
    newClient.end(true);
});
