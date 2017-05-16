var logger = require('./lib/logger.js');
var chalk = require('chalk');
var error = chalk.bold.red;

var _ = require('lodash');


_([1, 2]).forEach(function(n) {
  console.log(n);
});

console.log(error('Error!'));
console.log(chalk.blue('hello world!'));
console.log(chalk.blue('Hello') + ' ' + 'World' + chalk.red('!'));
logger.log('whats up Node!');
console.log("hello World!");