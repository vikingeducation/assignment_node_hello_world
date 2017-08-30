var _ = require("lodash");					//get lodash
var logs = require("./data/logs");			
var logger = require("./lib/logger");

//loop through the logs and print to console
_.each(logs, function(log){
	logger.log(log.message, log.level);
});