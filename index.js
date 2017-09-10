var chalk = require('chalk');
var _ = require('lodash');


console.log(chalk.blue('hello world'));

_.each([1, 2, 3], function(el) {
  console.log(el);
})
