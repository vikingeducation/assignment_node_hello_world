var chalk = require("chalk");
var _ = require("lodash");

// chalk test
console.log(chalk.bold.magenta("hello world"))


// lodash test
var nums = [1,2,3];
_.each(nums, function(num) {
  console.log(chalk.underline.white("Number " + num));
});