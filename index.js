var chalk = require('chalk');
var _ = require('lodash');
var data = require('./data/logs');
var logger = require('./lib/logger');



_.each(data, function(item){
	logger.log(item.message, item.level);
});