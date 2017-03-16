var _ = require('lodash');
var chalk = require('chalk');
var logger = require('./lib/logger');
var data = require('./data/logs');

_.each(data, function(el){
	logger.log(el.message, el.level);
});