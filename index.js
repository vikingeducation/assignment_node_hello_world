var logger = require('./lib/logger');
var logs = require('./data/logs');
var _ = require('lodash');


_.each(logs, function(x) {
	var message = logger.log(x.message, x.level);
});



