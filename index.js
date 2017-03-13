var chalk = require('chalk');
var _ = require('lodash');

var error = chalk.bold.red;
console.log(error('Error!'));
console.log(chalk.blue('Hellow blue world!'));
console.log('Hello world!');

var numbers = [1, 5, 10, 50];

console.log(_.includes([1, 2, 3], 5));
