var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger.js');

console.log(chalk.blue("hello world"));

_.each([1,2,3], function(num) {
  console.log(chalk.blue(num));
});

logger("hello there", "info");
logger("oh boy", "warning");
logger("shit shit shit", "error")