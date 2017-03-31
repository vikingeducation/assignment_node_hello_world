var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger.js');
var logs = require('./data/logs');

//console.log(logs);

// logger.log('milk', 'INFO');
// logger.log('eggs', 'WARNING');
// logger.log('bread', 'ERROR');

_.each(logs, function(log) {
  logger.log(log.message, log.level);
});



