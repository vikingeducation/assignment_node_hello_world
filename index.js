var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var messages = require('./data/logs')

console.log(chalk.blue('hey there'));

var colors = ['red', 'blue', 'green'];

_.each(colors, function(color){
  console.log(color);
})

logger.info("this is an info message");
logger.warning("this is a warning message");
logger.error("this is an error message");

_.each(messages, function(message){
  logger.log(message.message, message.level)
})
