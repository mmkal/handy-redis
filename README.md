# handy-redis
A wrapper around [node_redis](https://npmjs.com/package/redis) with Promise and TypeScript support.

[![Node CI](https://github.com/mmkal/handy-redis/workflows/CI/badge.svg)](https://github.com/mmkal/handy-redis/actions?query=workflow%3ACI)
[![codecov](https://codecov.io/gh/mmkal/handy-redis/branch/master/graph/badge.svg)](https://codecov.io/gh/mmkal/handy-redis)
![npm](https://img.shields.io/npm/dm/handy-redis)
![npm](https://img.shields.io/npm/v/handy-redis)

## Motivation

[node_redis](https://npmjs.com/package/redis) doesn't support Promises out-of-the-box - you have to use bluebird's `promisifyAll`, which has the side effect of removing all TypeScript/intellisense support from the package.

This package is a wrapper around node_redis and exclusively uses Promises. It publishes TypeScript types generated from the official redis documentation and examples, so it's much easier to know what parameters a command expects, and how to use the return values.

## Usage

```cli
npm install --save redis handy-redis
```

ES6/TypeScript:
```JavaScript
import { createNodeRedisClient } from 'handy-redis';

(async function() {
    const client = createNodeRedisClient();
    // or, call createNodeRedisClient(opts) using opts for https://www.npmjs.com/package/redis#rediscreateclient
    // or, call createNodeRedisClient(oldClient) where oldClient is an existing node_redis client.

    await client.set('foo', 'bar');
    const foo = await client.get('foo');
    console.log(foo);
})();
```

Vanilla JS, no async/await:

```JavaScript
const { createNodeRedisClient } = require('handy-redis');

const client = createNodeRedisClient();

client
    .set('foo', 'bar')
    .then(() => client.get('foo'))
    .then(foo => console.log(foo));
```

The package is published with TypeScript types, with the redis documentation and response type attached to each command:
![](./docs/intellisense.png)

### Adding new commands

Note that the [`redis`](https://npmjs.com/package/redis) package should be installed separately. If you need to use recent redis commands (e.g. `lpos` (recent at time of writing, at least)), which is not included in the [`redis`](https://npmjs.com/package/redis) package by default, you can use `addNodeRedisCommand`:

```js
import { addNodeRedisCommand, createNodeRedisClient } from 'handy-redis'

addNodeRedisCommand('lpos')

const client = createNodeRedisClient(...)
```

If there's a command without a type, a new version of this library will need to be released - [raise an issue](https://github.com/mmkal/handy-redis/issues) if you come across one.

### Accessing the underlying client

Some features of node_redis are not duplicated in this library, such as `watch`, pubsub and events generally. To use them, get the underlying client via `.nodeRedis`:

```js
import { createNodeRedisClient } from 'handy-redis'

const client = createNodeRedisClient(...)

client.nodeRedis.on('error', err => console.error(err))
client.nodeRedis.publish('a_channel', 'a message')
```

### v1.x compatibility

Some aliases exist for backwards-compatibility with v1.x:
- `createNodeRedisClient` (preferred) is aliased to `createHandyClient`
- `WrappedNodeRedisClient` (preferred) is aliased to `IHandyRedis`
- `client.nodeRedis` (preferred) is aliased to `client.redis`

### Examples

See the [snapshot tests](./test/generated/commands) for tons of usage examples.

### Multi

Most members of node_redis's `multi` type don't need to be promisified, because they execute synchronously. Only `exec` is async. Usage example:

```JavaScript
import { createNodeRedisClient } from 'handy-redis';

(async function() {
    const client = createNodeRedisClient();

    const result = await client.multi().set("z:foo", "987").keys("z:*").get("z:foo").exec();

    console.log(result); // ["OK", ["z:foo"], "987"]
})();
```

The resolved value returned by `exec` is a tuple type, which keeps track of the commands that have been queued. In the above example, the type will be `[string, string[], string]`.

Note: `multi` results are strongly-typed only when using typescript 4.0 and above - for lower typescript versions they will gracefully fall back to a union type (for the example above, it'll be `Array<string | string[]>`).

`client.batch()` also works, with the same API. See [node_redis docs](https://www.npmjs.com/package/redis#clientbatchcommands) for details.

#### Migrating from v1.x

The client no longer has an `execMulti` function. Use the `.exec()` method on the multi instance.

___

## Development

Most of the package is generated by running sample commands from the redis documentation repo.

<details>
<summary>How it works</summary>

The client is generated from the [redis-doc](https://github.com/redis/redis-doc) repo.

- `yarn codegen` generates code:
  - `generate-schema`:
    - [commands.json](./docs/redis-doc/commands.json) is used to output a commands file with json-schema arguments and return types.
    - Argument lists are modeled as arrays, which are flattened when sent to the underlying client. e.g. `SET` might have args `['foo', 'bar', ['EX', 60]]` corresponding to the CLI command `SET foo bar EX 60`
    - the markdown documentation for each command is parsed for the return type 
  - `generate-client`:
    - the json-schema from the previous step is parsed and used to generate a [typescript interface of commands](./src/generated/interface.ts)
  - `generate-tests`:
    - the markdown docs for each command are parsed and transformed into typescript calls. e.g. `SET FOO BAR EX 60` is decoded into `client.set('foo', 'bar', ['EX', 60])`
    - these typescript calls are put into jest tests and their outputs are snapshotted
    - these tests are internal only and are not included in the published package

At each stage, there are some [patches](./codegen/patches) to plug gaps and inconsistencies in redis-doc and node_redis.

From all the code-generation only the [interface file](./src/generated/interface.ts) is exported. When a client is created, each command on the node_redis client prototype is added as a method on handy-redis's client, a wrapped and promisified version of the equivalent node_redis method.

</details>

```cli
git clone https://github.com/mmkal/handy-redis
cd handy-redis
yarn
```
Make sure you have docker installed and `docker-compose` is on your path, and start up a redis server in the background with `yarn redis:up -d`.

To fully test the package as it is on your machine, the same way CI does:

```cli
yarn ci
```

`yarn ci` runs the build, test and lint scripts. It removes all generated code before, and after checks that your git status is clean. This is to allow tracking changes to the generated client over time, to make what the published package contains more visible, and to make sure that generated code hasn't been modified without auditing first. You should not manually edit any files under a `*/generated/*` path. If `yarn ci` fails for you because you deliberately changed the way the codegen works, take a look at the git changes, check them in and run `yarn ci` again.

The `build` script generates the client before using TypeScript to compile it. If you want to run the tests without rebuilding, use `npm test`.

There are some more scripts in `package.json` which can be useful for local development.

Redis doc was added via `git subtree add --prefix docs/redis-doc https://github.com/redis/redis-doc master --squash` following [this guide](https://www.atlassian.com/git/tutorials/git-subtree). Here's how they say it can be updated:

```
git subtree pull --prefix docs/redis-doc https://github.com/redis/redis-doc master --squash
```

### Testing

If a snapshot test fails, it's possible it just needs to be updated. Make sure your git status is clean and run `yarn test -u`.

Types are tested using [expect-type](https://npmjs.com/package/expect-type).
