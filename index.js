var _ = require('lodash');
const chalk = require('chalk');

console.log(chalk.blue('Hello World!'));

var arr = [1,2,3,4];

_.each(arr, function(element) {
  console.log(element);
});
