const logger = require('./lib/logger.js');
const json = require('./data/logs.json');
const lodash = require('lodash');


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


