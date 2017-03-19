var _       = require('lodash'),
    logger  = require('./lib/logger'),
    data    = require('./data/logs');

_.each(data, function(data){
  var level = data.level;
  var message = data.message;
  logger.log(message, level);
});

logger.info("Information test");
logger.warn("Warning test");
logger.error("Error test");
