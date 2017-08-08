var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');

logger.log("Message logged at INFO level", 'INFO');
logger.log("Message logged at WARNING level", 'WARNING');
logger.log("Message logged at ERROR level", 'ERROR');

_.each(["hello", "hola", "merhaba", "ni hao"], function(greeting) {
  console.log(greeting);
});
