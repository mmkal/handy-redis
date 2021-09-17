import { overloads, formatOverloads } from "../generate-client";
import { schema } from "..";

test("overloads", () => {
    expect(
        overloads([
            { name: "optionalA", optional: true, schema: {} },
            { name: "requiredB", optional: false, schema: {} },
            { name: "requiredC", optional: false, schema: {} },
            { name: "optionalD", optional: true, schema: {} },
            { name: "requiredE", optional: false, schema: {} },
        ]).map(args => args.map(a => a.name).join(","))
    ).toMatchInlineSnapshot(`
        Array [
          "requiredB,requiredC,requiredE",
          "requiredB,requiredC,optionalD,requiredE",
          "optionalA,requiredB,requiredC,requiredE",
          "optionalA,requiredB,requiredC,optionalD,requiredE",
        ]
    `);
});

test("formatOverloads", () => {
    expect(formatOverloads("LATENCY RESET", schema["LATENCY RESET"])).toMatchInlineSnapshot(`
        Array [
          "
                        /**
                         * Reset latency data for one or more events.
                         * - _group_: server
                         * - _complexity_: undefined
                         * - _since_: 2.8.13
                         *
                         * [Full docs](https://redis.io/commands/latency-reset)
                         */
                        latency(latency_subcommand: \\"RESET\\", ...event: Array<string>):
                            Result<unknown, Context>
                    ",
        ]
    `);
    expect(formatOverloads("SET", schema.SET)).toMatchInlineSnapshot(`
        Array [
          "
                        /**
                         * Set the string value of a key
                         * - _group_: string
                         * - _complexity_: O(1)
                         * - _since_: 1.0.0
                         *
                         * [Full docs](https://redis.io/commands/set)
                         */
                        set(key: string, value: string, get?: \\"GET\\"):
                            Result<(\\"OK\\") | (string) | (null), Context>
                    ",
          "
                        /**
                         * Set the string value of a key
                         * - _group_: string
                         * - _complexity_: O(1)
                         * - _since_: 1.0.0
                         *
                         * [Full docs](https://redis.io/commands/set)
                         */
                        set(key: string, value: string, condition?: \\"NX\\"|\\"XX\\", get?: \\"GET\\"):
                            Result<(\\"OK\\") | (string) | (null), Context>
                    ",
          "
                        /**
                         * Set the string value of a key
                         * - _group_: string
                         * - _complexity_: O(1)
                         * - _since_: 1.0.0
                         *
                         * [Full docs](https://redis.io/commands/set)
                         */
                        set(key: string, value: string, expiration?: ([ex_px_exat_pxat: (\\"EX\\"|\\"PX\\"|\\"EXAT\\"|\\"PXAT\\"), number: (number)]) | (\\"KEEPTTL\\"), get?: \\"GET\\"):
                            Result<(\\"OK\\") | (string) | (null), Context>
                    ",
          "
                        /**
                         * Set the string value of a key
                         * - _group_: string
                         * - _complexity_: O(1)
                         * - _since_: 1.0.0
                         *
                         * [Full docs](https://redis.io/commands/set)
                         */
                        set(key: string, value: string, expiration?: ([ex_px_exat_pxat: (\\"EX\\"|\\"PX\\"|\\"EXAT\\"|\\"PXAT\\"), number: (number)]) | (\\"KEEPTTL\\"), condition?: \\"NX\\"|\\"XX\\", get?: \\"GET\\"):
                            Result<(\\"OK\\") | (string) | (null), Context>
                    ",
        ]
    `);
});
