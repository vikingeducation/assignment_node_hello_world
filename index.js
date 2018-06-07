const chalk = require("chalk");
var _ = require("lodash");

console.log("Hello World!");
console.log(chalk.blue('Hello world!'));

_.forEach([1, 2], function(value) {
  console.log(value);
});
