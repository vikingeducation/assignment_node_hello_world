var logger = require("./lib/logger");
var chalk = require('chalk');
var _ = require('lodash');
var json = require("./data/logs.json");

_.each(json, function(data){
	logger.log(data.message, data.level);
})


