var chalk = require ('chalk');
var _ = require ('lodash');
var logger = require('./lib/logger');
var logs = require('./data/logs');

console.log('Hello world!');
console.log(chalk.blue('Hello world!'));

_.each([1,2,3], function(value){
  console.log(value);
});

_.each(logs, function(entry){
  logger.log(entry.message, entry.level);
});