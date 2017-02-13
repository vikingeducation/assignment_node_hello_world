var _ = require("lodash");
var chalk = require("chalk");
var logger = require("./lib/logger");
var data = require("./data/logs");


var names = ["Jerry", "Maggie", "Emily"];
_.each(names, function(name) {
  console.log(chalk.cyan("Hello %s!"), name);
});

console.log("Testing logger:");
logger.log("Here's some info", "info");
logger.log("Here's a warning", "warning");
logger.log("Total failure!", "error");

console.log("Outputting logs:");
_.each(data, function(item) {
  logger.log(item.message, item.level)
});
