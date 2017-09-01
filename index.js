var _ = require('./node_modules/lodash');
var logger = require('./lib/logger');
var logs = require('./data/logs');

_.each(logs, function(log) {
  logger.log(log.message, log.level.toUpperCase());
});
