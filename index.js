var _ = require("lodash");
var data = require('./data/logs');
var logger = require('./lib/logger');



_.each(data, function(message){
  logger.log(message);
});

