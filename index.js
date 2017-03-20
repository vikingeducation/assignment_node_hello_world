var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger.js');

var json = require('./data/logs.json')





_.each(json, function(data) {
  logger(data.message, data.level)
});