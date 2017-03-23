var _ = require('lodash');
chalk = require('chalk');
var Logger = require('./lib/logger');

var logger = new Logger;
logger.log("Message logged at INFO level", "INFO");
logger.log("Message logged at WARNING level", "WARNING");
logger.log("Message logged at ERROR level", "ERROR");