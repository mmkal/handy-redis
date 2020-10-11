import { createHandyClient } from "../../../src";
import { fuzzify } from "../../fuzzify";

const client = createHandyClient();

beforeAll(async () => {
    await client.ping();
});

beforeEach(async () => {
    await client.flushall();
});

test("docs/redis-doc/commands/command-getkeys.md example 1", async () => {
    const outputs: Record<string, unknown> = {};

    // Error decoding command `COMMAND GETKEYS MSET a b c d e f`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,MSET,a,b,c,d,e,f
    // ---
    // Error decoding command `COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,EVAL,not consulted,3,key1,key2,key3,arg1,arg2,arg3,argN
    // ---
    // Error decoding command `COMMAND GETKEYS SORT mylist ALPHA STORE outlist`:

    // decoding COMMAND overload 0 ():
    // Tokens remain but no target args left! Tokens: GETKEYS,SORT,mylist,ALPHA,STORE,outlist
    // ---

    expect(fuzzify(outputs, __filename)).toMatchInlineSnapshot(`Object {}`);
});
