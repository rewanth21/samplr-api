"use strict";

const forky = require('forky');

forky({
  path: __dirname + '/worker.js',
  workers: process.env.WEB_CONCURRENCY || 1,
  enable_logging: true
});
