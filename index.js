'use strict';

let _ = require('lodash');
let logger = require('./lib/logger.js');
let logs = require('./data/logs.json');

_.each(logs, function(log) {
  logger[log.level](log.message);
} )
