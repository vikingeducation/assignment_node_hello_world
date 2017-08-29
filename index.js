var _ = require('lodash');
var logger = require('./lib/logger');

// var messages = ["Message logged at INFO level",
//                 "Message logged at WARNING level",
//                 "Message logged at ERROR level"];

// _.each(messages, function(element) {
//   logger.error(element);
// });

logger.info("Message logged at INFO level");
logger.warning("Message logged at WARNING level");
logger.error("Message logged at ERROR level");

logger.log("Message logged at INFO level", "INFO");
logger.log("Message logged at WARNING level", "WARNING");
logger.log("Message logged at ERROR level", "ERROR");
