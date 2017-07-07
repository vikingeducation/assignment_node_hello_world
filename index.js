// var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var data = require('./data/logs');

_.each(data, function (value) {
	logger (value.message, value.level);
});

/****
// TEST LOGGER
logger ('info message should be blue', 'info');
logger ('warning message should be yellow', 'warning');
logger ('error message should be red', 'error');
****/
/***
// TEST EXTERNAL PACKAGES
console.log(chalk.blue("Hello world!"));
_.each([1, 2, 3], function(value) {
	console.log(value);
});
***/