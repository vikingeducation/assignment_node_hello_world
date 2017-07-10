var _ = require('lodash');
var logs = require('./data/logs');
var logger = require('./lib/logger');



_.each(logs, function(log){

	if (log.level === 'info') {
		logger.info(log.message);
	}

	else if (log.level === 'warning') {
		logger.warning(log.message);
	}

	else if (log.level === 'error') {
		logger.error(log.message);
	}

	else {
		logger.log(log.level, log.message);
	}

});