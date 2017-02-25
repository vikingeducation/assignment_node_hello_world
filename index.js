var chalk = require ('chalk');
var _ = require ('lodash');
var logger = require('./lib/logger');

console.log('Hello world!');
console.log(chalk.blue('Hello world!'));

_.each([1,2,3], function(value){
  console.log(value);
});

logger.log("Hello world!", "warning");