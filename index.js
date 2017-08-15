const chalk = require('chalk');
const _ = require('lodash');
const logger = require('./lib/logger');
const data = require('./data/logs');


_.each(data, function(text) {
	logger.log(text.message, text.level);
});