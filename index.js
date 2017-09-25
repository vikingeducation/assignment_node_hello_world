var logger = require('./lib/logger');
var _ = require('lodash');
var messages = require('./data/logs');

logger.log('Message logged at INFO level', 'iNfO');
logger.log('Message logged at WARNING level', 'WaRnIng');
logger.log('Message logged at ERROR level', 'erRoR');

_.each(messages, function(message) {
  logger.log(message.message, message.level);
});