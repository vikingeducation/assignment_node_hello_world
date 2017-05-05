var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger')
var logs = require('./data/logs')

_.each(logs, function(log){
  logger.log(log.message, log.level)
})
