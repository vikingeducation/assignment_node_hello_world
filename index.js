var chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger");
var file = require("./data/logs");

// var testArr = [1, 2, 3, 4, 5, 6];
// console.log(chalk.blue("hello world"));
_.each(file, function(item) {
  logger.log(item.message, item.level);
});

//logger.log("what is this thing", "ERROR");
