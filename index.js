const _ = require('lodash');
const chalk = require('chalk');
const logger = require('./lib/logger');
const logs = require('./data/logs');


// test array for requires
var testArray = [1,2,3,"..."];

console.log(chalk.red.bold('Hello World!'));

_.each(testArray, function(arrayItem){
  console.log(arrayItem + ' ');
});

// testing logger module
logger.log("test message info", "INFO");

logger.log("test message warn", "WARNING");

logger.log("test message error", "ERROR");


// testing against JSON data
_.each(logs, function(logline){
  logger.log(logline.message, logline.level.toUpperCase())
});
