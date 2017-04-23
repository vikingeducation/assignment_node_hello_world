const _ = require('lodash');

const logger = require('./lib/logger.js');
const logs = require('./data/logs.json');

_.each(logs, (log) => {
  logger.log(log.message, log.level);
});
