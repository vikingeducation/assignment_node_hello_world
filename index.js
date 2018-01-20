var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');

console.log(chalk.blue('hey there'));

var colors = ['red', 'blue', 'green'];

_.each(colors, function(color){
  console.log(color);
})

// var levels = ['info', 'warning', 'error']
//
// _.each(levels, function(level){
//   logger.level("This is a message of type " + level);
// })

logger.info("this is an info message");
logger.warning("this is a warning message");
logger.error("this is an error message");
