var _ = require('lodash');
var logger = require('./lib/logger.js');
var chalk = require('chalk');
var logs = require('./data/logs.json');

_.each(logs, function(logs) {
  logger.log(logs["message"], logs["level"]);
});

logger.log('hello', 'info');
logger.log('red', 'error');
logger.log('yellow', 'warning');

