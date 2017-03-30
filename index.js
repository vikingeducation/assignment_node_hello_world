const _ = require('lodash');
const chalk = require('chalk');
const logger = require('./lib/logger');
var testArray = [1,2,3,"..."];

console.log(chalk.red.bold('Hello World!'));

_.each(testArray, function(arrayItem){
  console.log(arrayItem + ' ');
});

logger.log("test message info", "INFO");

logger.log("test message warn", "WARNING");

logger.log("test message error", "ERROR");
