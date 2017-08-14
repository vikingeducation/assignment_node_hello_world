console.log('hello world')

var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');
var logs = require('./data/logs');

console.log(chalk.blue('Hello World!'))

//use lodash to iterate through array
var simpleArray = ['red', 'green', 'blue']

_.each(simpleArray, function(str){
  console.log(str);
});

//testing logging levels
logger.log('logging some info', logger.info);
logger.log('logging an error', logger.error);
logger.log('logging a warning', logger.warning);

//logging from JSON

_.each(logs, function(entry){
  logger.log(entry.message, logger[entry.level]);
})
