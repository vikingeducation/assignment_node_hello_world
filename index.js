const _ = require('lodash');
const logger = require('./lib/logger');
const data = require('./data/logs');

let messageLevel = ['info', 'warning', 'error'];

_.each(messageLevel, (level) => {
    logger.log(`Message logged at ${level.toUpperCase()} level`, level);
});

_.each(data, (data) => {
    logger.log(data.message, data.level);
});