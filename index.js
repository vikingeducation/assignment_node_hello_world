
const chalk = require("chalk");
var _ = require("lodash");
var logger = require("./lib/logger");
var record = require("./data/logs");

console.log("Hello World!");
console.log(chalk.red("chalk"));
console.log(_.name);

_.each([1, 2, 3], function(value) {
  console.log(value);
});

logger.log("test", "info");
logger.log("123", "warning");
logger.log("abc", "error");

_.each(record, function(value) {
  logger.log(value.message, value.level);
});
