var _ = require('lodash');
var logger = require('./lib/logger');
var salutations = require('./lib/salutations');

logger.log("Message logged at INFO level", "info");
logger.log("Message logged at WARNING level", "warning");
logger.log("Message logged at ERROR level", "error");
