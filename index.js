var logger = require('./lib/logger');
var _ = require('lodash');

_.forEach([1, 2, 3], function(value) {
  console.log(value);
});

logger.log('Message logged at INFO level', 'iNfO');
logger.log('Message logged at WARNING level', 'WaRnIng');
logger.log('Message logged at ERROR level', 'erRoR');