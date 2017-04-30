import test from "ava";
import { createHandyClient } from "../src";

test("create client", t => {
    t.truthy(createHandyClient());
});
