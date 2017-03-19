var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.red('hello, world'));

var arr = [1,2,3,4,5];

_.each(arr, function(num) {
  console.log(chalk.yellow(num));
})