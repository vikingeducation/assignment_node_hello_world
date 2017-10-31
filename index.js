'use strict';

let _ = require('lodash');
let chalk = require('chalk');
let logger = require('./lib/logger.js');
let messages = require('./data/logs.json');

// logger.log('INFO level message', 'info');
// logger.log('WARNING level message', 'warning');
// logger.log('ERROR level message', 'error');

_.each(messages, function(x) {
  return logger.log(x.level, x.message);
});
