var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger")

// chalk test
console.log(chalk.bold.magenta("hello world"))


// lodash test
var nums = [1,2,3];
_.each(nums, function(num) {
  console.log(chalk.underline.white("Number " + num));
});

// logger module
logger.log("hello world", "INFO")
logger.log("hello world", "WARNING")
logger.log("hello world", "ERROR")