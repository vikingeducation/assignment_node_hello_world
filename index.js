var logger = require('./lib/logger.js');
var chalk = require('chalk');
var _ = require('lodash');


// logger.log(chalk.blue ('Message logged at INFO level'));
// logger.log(chalk.yellow ('Message logged at WARNING level'));
console.log(chalk.red('Message logged at ERROW level'));

logger.log('hello', 'info');
logger.log('red', 'error');
logger.log('yellow', 'warning');
lo
