# Worker Pool

*See* [Using `AsyncResource` for a `Worker` thread pool](https://nodejs.org/api/async_context.html#using-asyncresource-for-a-worker-thread-pool) 

1. `npm install`
1. `npm run pool`
    1. will trigger `npm run lint`
    1. will trigger `npm run build`
1. optionally run `npm run pool:cjs` for CommonJS as top-level file.
- *Note:* Both ESM and CJS will load `dist/task_processer.js` as an ESM file.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
