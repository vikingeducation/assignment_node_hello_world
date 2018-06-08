var _ = require("lodash");
var logger = require("./lib/logger");
var messages = require('./data/logs');

_.each(messages, function(message){
  logger.log(message.message, message.level)
})
