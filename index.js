var logger = require('./lib/logger');

logger.log('a blue info message', 'info');
logger.log('a yellow warning message', 'warning');
logger.log('a red error message', 'error');
logger.log('bad logging level', 'bad');
