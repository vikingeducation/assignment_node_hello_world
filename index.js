var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');

console.log(chalk.red('Hello ')+ chalk.blue('World!'));

var arr = [1,2,3,4,5];

_.each(arr, function(arr) {
	console.log(arr);
});


logger.info('Info level log');
logger.warning('Warning level log');
logger.error('Error level log');
