var chalked = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var logs = require("./data/logs");

logger.log("Information", "info");
logger.log("Warning", "warning");
logger.log("Error", "error");

_.each(logs, function(obj){
  logger.log(obj.message, obj.level);
})
