
let _ = require("lodash");
let chalk = require("chalk");
let logger = require("./lib/logger");
let list = require("./data/logs");

console.log(chalk.blue("hello world"));

let simpleArray = [1, 2, 3];

_.each(simpleArray, (num) => {
  console.log(num);
});

logger.log("blue", "INFO");
logger.log("yellow", "WARNING");
logger.log("red", "ERROR");

_.each(list, function(obj, idx) {
  logger.log(obj.message, obj.level);
});
