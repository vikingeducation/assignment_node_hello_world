var logger = require("./lib/logger");
var lodash = require("./node_modules/lodash");
var logs = require("./data/logs");

lodash._.forEach(logs, function(log){
  logger.log(log.message, log.level);
});
