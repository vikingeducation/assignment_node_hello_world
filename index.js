const _ = require('lodash');
const chalk = require('chalk');

console.log(chalk.blue('Hello World!'));
console.log(chalk.bgRed(chalk.gray('Happy Halloween')));

_.each([1, 2, 3], function(x) {
  console.log(x * 2);
});
