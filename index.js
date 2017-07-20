const chalk = require('chalk');
const lodash = require('lodash');
const logger = require('./lib/logger.js');
const json = require('./data/logs.json');

console.log(chalk.red('Hello world!'));

lodash._.each([1, 2], function(value) {
  console.log(value);
});

logger.info("hello");

lodash._.each(json, function(value) {
	switch(value.level){
	case "info":
		logger.info(logger.log(value.message, value.level));
		break;
	case "warning":
		logger.warning(logger.log(value.message, value.level));
	case "error":
		logger.error(logger.log(value.message, value.level));
		break;
	}
});


