/*jshint esversion: 6 */
const chalk = require('chalk');
var _ = require('lodash');

var logger = require('./lib/logger');
var data = require('./data/logs');

logger.log('Message logged at the INFO level', 'INFO');
logger.log('Message logged at the WARNING level', 'WARNING');
logger.log('Message logged at the ERROR level', 'ERROR');

_.each(data, function(data) {
  logger.log(data.message, data.level.toUpperCase());
});
