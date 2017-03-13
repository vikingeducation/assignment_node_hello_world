var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');

// var error = chalk.bold.red;
// console.log(error('Error!'));
// console.log(chalk.blue('Hellow blue world!'));
// console.log('Hello world!');
//
// var numbers = [1, 5, 10, 50];
// var log = function (element) {
//   console.log(element);
// };
//
// _(numbers).forEach(log);
//
// console.log(_.includes([1, 2, 3], 5));

// logger.log("This is info", "info");
// logger.log("This is a warning", "warning");
// logger.log("This is an error", "error");

logger.log("cat", "info");
logger.log("dog", "warning");
logger.log("soup", "error");
