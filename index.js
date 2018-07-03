var _ = require('lodash');
var _chalk = require('chalk');
var salutations = require('./lib/salutations');
var logger = require('./lib/logger');

console.log(_chalk.blue('Hello world!'));

_.each(salutations, function(salutation) {
	logger.log(salutation);
});

