var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');


logger.info("message at info level");
logger.warning("message at warning level");
logger.error("message at error level");