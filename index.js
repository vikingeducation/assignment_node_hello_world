const _ = require("lodash");
const logger = require("./lib/logger");
const logs = require("./data/logs")

logger.log("This is getting logged!!!!!", "INFO");
logger.log("This is getting logged!!!!!", "WARNING");
logger.log("This is getting logged!!!!!", "ERROR");

_.each(logs, function(log) {
	logger.log(log.message, log.level);
});