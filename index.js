var _ = require('lodash');
// const chalk = require('chalk');
var logs = require('./data/logs');
var logger = require('./lib/logger');

/* Lines 2, 7 through 13 were tests for chalk and lodash
console.log(chalk.blue('Hello ') + 'World' + chalk.red('!'));

var sampleArr = ["this", "is", "a", 6, "index", "array"];

 _.each(sampleArr, function(sampleArr) {
  console.log(sampleArr);
});

Lines 16 through 20 were another test

logger.log("Message logged at INFO level.", 'info');
logger.log("Message logged at WARNING level.", 'WARNING');
logger.log("Message logged at ERROR level.", 'eRROR');
*/

_.each(logs, function(logs) {
  logger.log(logs.message, logs.level);
});
