var _ = require('lodash');
var chalk = require('chalk');

var myArray = ["yes", "no", "maybe"];
_.each(myArray, function(element) {
  console.log(chalk.green(element));
});
