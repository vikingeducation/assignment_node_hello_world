//var chalk = require('chalk');
var _ = require('lodash');
var logs = require('./data/logs.json');

var logger = require('./lib/logger.js');

// logger.info('blue');
// logger.warning('yellow');
// logger.error('red');

_.each(logs, function(log) {
  if (log.level === "info") {
    logger.info(log.message);
  }
  if (log.level === "warning") {
    logger.warning(log.message);
  }
  if (log.level === "error") {
    logger.error(log.message);
  }
});




