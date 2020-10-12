import { addNodeRedisCommand, createNodeRedisClient } from "../src";

test("add command works", async () => {
    const oldClient = createNodeRedisClient();

    await oldClient.rpush("mylist", "a", "b", "c", "1", "2", "3", "c", "c");

    expect(() => oldClient.lpos("mylist", "c")).toThrowError(/oldClient.lpos is not a function/);

    addNodeRedisCommand("lpos");

    const newClient = createNodeRedisClient();

    expect(await newClient.lpos("mylist", "c")).toEqual(2);

    oldClient.end(true);
    newClient.end(true);
});
