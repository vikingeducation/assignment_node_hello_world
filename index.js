var _ = require('lodash');
var logger = require('./lib/logger.js');



var infoMsg = "Logging message at INFO level";
var warningMsg = "Logging message at WARNING level";
var errorMsg = "Logging message at ERROR level";

logger.log(infoMsg, 'info');
logger.log(warningMsg, 'warning');
logger.log(errorMsg, 'error');
