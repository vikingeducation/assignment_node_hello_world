var _ = require('lodash');
var logger = require('./lib/logger');
var logs = require('./data/logs');

_.each(logs, function(element) {
  logger.log(element.message, element.level);
});
