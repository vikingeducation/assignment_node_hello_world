const _ = require('lodash');
const logger = require('./lib/logger');

let messageLevel = ['info', 'warning', 'error'];

_.each(messageLevel, (level) => {
    logger.log(`Message logged at ${level.toUpperCase()} level`, level);
});