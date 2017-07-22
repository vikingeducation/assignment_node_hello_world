var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');

console.log(chalk.blue('Hello world!'));

_.each([1, 2], function(val) {
  console.log(val);
});

logger.log('hi', 'INFO');
logger.log('hi', 'WARNING');
logger.log('hi', 'ERROR');
logger.info('hi');
logger.warning('hi');
logger.error('hi');
