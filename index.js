var chalk = require('chalk');
var _ = require('lodash');
// var array = require('lodash/array');

console.log(chalk.blue("hello world"));

_.each([1,2,3], function(num) {
  console.log(chalk.blue(num));
})