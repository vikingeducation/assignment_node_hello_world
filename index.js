var _ = require('lodash');
const chalk = require('chalk');

var log = require('./lib/logger');
log('This is error message', 'ERROR');
log('This is warning message', 'WARNING');
log('This is info message', 'INFO');

// console.log(chalk.blue('Hello World!'));
//
// var arr = [1,2,3,4];
//
// _.each(arr, function(element) {
//   console.log(element);
// });
