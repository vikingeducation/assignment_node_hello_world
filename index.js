// const chalk = require('chalk');
// const _ = require('lodash');
const logger = require('./lib/logger');

// console.log(chalk.blue('Hello world!'));

// const arr = [1, 2, 3, 4, 5];

// _.each(arr, value => console.log(value));

logger.info('Info level');
logger.warning('Warning');
logger.error('Error');