var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var logs = require('./data/logs');

_.each(logs, function(object) {
  logger.log(object.message, object.level.toUpperCase());
});
