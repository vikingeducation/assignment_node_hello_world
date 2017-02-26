var _ = require('lodash');
var logs = require('./data/logs');
var Logger = require('./lib/logger');
var logger = new Logger();

_.each(logs, function(log) {
  console.log(logger.log(log.message, log.level));
});
