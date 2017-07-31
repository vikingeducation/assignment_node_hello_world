var logger = require('./lib/logger');
var logdata = require('./data/logs');
var _ = require('lodash');

logger.log('a blue info message', 'info');
logger.log('a yellow warning message', 'warning');
logger.log('a red error message', 'error');
logger.log('bad logging level', 'bad');

console.log("\n");

_.each(logdata, function(elem) {
	logger.log(elem.message, elem.level);
});
