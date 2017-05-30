const _ = require('lodash');
const logger = require('./lib/logger');
const logs = require('./data/logs');

// console.log(chalk.blue('Hello world!'));

// const arr = [1, 2, 3, 4, 5];

// _.each(arr, value => console.log(value));

// logger.info('Info level');
// logger.warning('Warning');
// logger.error('Error');

_.each(logs, entry => logger.log(entry.message, entry.level));
