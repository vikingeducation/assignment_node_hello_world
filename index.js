var _ = require('lodash');
var logger = require('./lib/logger.js');
var dataLogs = require('./data/logs.json');


// Logging from logger.js
var infoMsg = "Logging message at INFO level";
var warningMsg = "Logging message at WARNING level";
var errorMsg = "Logging message at ERROR level";

logger.log(infoMsg, 'info');
logger.log(warningMsg, 'warning');
logger.log(errorMsg, 'error');


// Logging from logs.json
_.each(dataLogs, function(dataLog) {
  var msg = dataLog.message;
  var level = dataLog.level;

  logger.log(msg, level);
});
