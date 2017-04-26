var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger")
var data = require("./data/logs")

// chalk test
console.log(chalk.bold.magenta("hello world"))


// lodash test
var nums = [1,2,3];
_.each(nums, function(num) {
  console.log(chalk.underline.white("Number " + num));
});

// logger module
logger.log("hello world", "info")
logger.log("hello world", "warning")
logger.log("hello world", "error")

// logging JSON file
_.each(data, function(item) {
  logger.log(item.message, item.level);
});