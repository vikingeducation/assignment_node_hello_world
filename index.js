var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');
var logs = require('./data/logs');

_.each(logs, function(logEntry) {
  logger.log(logEntry.message, logEntry.level);
});
