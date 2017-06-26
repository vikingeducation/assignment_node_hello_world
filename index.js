var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');

console.log(chalk.blue('Hello world!'));

_.each([1,2,3,4,5], function(n) {
	console.log(n);
})

logger.log('hello info', 'info');
logger.info('information');
logger.warning('danger');
logger.error('uh oh');