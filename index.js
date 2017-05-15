const _ = require('lodash');
const logger = require('./lib/logger');
const logs = require('./data/logs');

// Iterate
logger.info("Iterating over JSON file...");
_.each(logs, (entry) => {
  logger.log(entry.message, entry.level);
});
