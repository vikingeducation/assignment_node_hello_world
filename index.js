var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger");
var logs = require("./data/logs");

logger.log("This is a string", "INFO");
logger.log("This is a warning", "WARNING");
logger.log("This is an error", "ERROR");

logger.error("This is an error");
logger.info("This is some info");
logger.warning("this is a warning");

_.forEach(logs, function(key) {
  logger.log(key.message, key.level.toUpperCase());
});