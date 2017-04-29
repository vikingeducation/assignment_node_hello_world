var chalk = require('chalk');
var _ = require('lodash');

var testArray = ["Tyler", "Mattie", "Cora", "Katie", "Carl"];
console.log(chalk.blue('Hello world!'));
_.each(testArray, function(name) {
  console.log(chalk.red(name));
});
