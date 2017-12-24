// Require lodash
const _ = require('lodash');

// Require logger
const logger = require('./lib/logger');

// Require logs
const logs = require('./data/logs'); 

// Log all messages in logs
_.each( logs, log => {
  logger.log( log.message, log.level );
});


