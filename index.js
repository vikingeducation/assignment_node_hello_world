var _ = require('lodash');
var logger = require('./lib/logger');
var data = require("./data/logs")

_.each(data, function(logs){
    logger.log(logs.level, logs.message);
});
