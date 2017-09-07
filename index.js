var chalk = require("chalk");
var _ = require("lodash");

console.log(chalk.yellow.bgCyan("Oh heyyyyyyyyy"));
_.forEach([12, 19, 1988], function(value) {
  console.log(value);
});
