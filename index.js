var _ = require('lodash');
const chalk = require('chalk');
var logger = require('./lib/logger');
var logs = require('./data/logs');

logger.info('Logged at info level');
logger.warning('logged at warning level');
logger.error('logged at error level');


_.each(logs, function(current){
  let level = current.level;
  let message = current.message;
  switch (level) {
    case 'error': logger.error(message);
    break;
    case 'warning': logger.warning(message);
    break;
    case 'info': logger.info(message);
    break;

  }

});
