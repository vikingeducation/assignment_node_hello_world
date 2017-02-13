var _ = require("lodash");
var chalk = require("chalk");
var logger = require("./lib/logger");


var names = ["Jerry", "Maggie", "Emily"];
_.each(names, function(name) {
  console.log(chalk.cyan("Hello %s!"), name);
});

console.log("Testing logger:");
logger.log("Here's some info", "INFO");
logger.log("Here's a warning", "WARNING");
logger.log("Total failure!", "ERROR");
