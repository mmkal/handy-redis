# handy-redis
A wrapper around node_redis with Promise and TypeScript support.

[![Build Status](https://travis-ci.org/mmkal/hodor.svg?branch=master)](https://travis-ci.org/mmkal/handy-redis)

## Using

```cli
npm install --save handy-redis
```

```JavaScript
import { createClient } from 'handy-redis';

(async function() {
    const client = createClient(); // or call createClient(opts) using opts for https://npmjs.com/package/redis

    await client.set('foo', 'bar');
    const foo = await client.get('foo');
})();
```
