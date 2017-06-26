var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');
var json = require('./data/logs.json');

_.each(json, function(el) {
	if (el.level === 'error') {
		logger.error(el.message);
	} else if (el.level === 'warning') {
		logger.warning(el.message);
	} else if (el.level === 'info') {
		logger.info(el.message);
	} else {
		console.log(el.message);
	}
})


// basic tests
console.log(chalk.blue('Hello world!'));

_.each([1,2,3,4,5], function(n) {
	console.log(n);
})

logger.log('hello info', 'info');
logger.info('information');
logger.warning('danger');
logger.error('uh oh');