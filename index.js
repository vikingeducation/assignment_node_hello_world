var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var json = require('./data/logs');

console.log(chalk.red('Hello ')+ chalk.blue('World!'));

var arr = [1,2,3,4,5];

_.each(arr, function(arr) {
	console.log(arr);
});


logger.info('INFO level log');
logger.warning('WARNING level log');
logger.error('ERROR level log');

_.each(json, function(obj) {
	logger.log(obj.message, obj.level)

});
