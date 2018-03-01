
console.log("Hello World!");

const chalk = require('chalk');
console.log(chalk.red('I am chalk'));

var _ = require('lodash');
console.log(_.name);

_.each([1, 2, 3], function(value) {
  console.log(value);
});
