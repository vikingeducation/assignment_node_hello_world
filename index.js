var _ = require('lodash');
const chalk = require('chalk');
var logger = require('./lib/logger');

// Lines 5 through 12 were tests for chalk and lodash
// console.log(chalk.blue('Hello ') + 'World' + chalk.red('!'));

// var sampleArr = ["this", "is", "a", 6, "index", "array"];

/* _.each(sampleArr, function(sampleArr) {
  console.log(sampleArr);
}); */

logger.log("Message logged at INFO level.", 'info');
logger.log("Message logged at WARNING level.", 'WARNING');
logger.log("Message logged at ERROR level.", 'eRROR');
