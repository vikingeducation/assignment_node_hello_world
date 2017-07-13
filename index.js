const chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.blue('Hello World!'));

_.forEach([1, 2, 3], function(value) {
  console.log(value);
});