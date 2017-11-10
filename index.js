let _ = require('lodash');
let chalk = require('chalk');
let Logger = require('./lib/logger');

let logger = new Logger();

console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));

_.each([1,2,3], function(el, idx) {
  console.log(el);
});

console.log("hello world");

console.log(logger.log("This should be blue", "INFO"));
console.log(logger.log("This should be yellow", "WARNING"));
console.log(logger.log("This should be red", "ERROR"));

