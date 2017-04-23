const chalk = require('chalk');
const _ = require('lodash');

const messages = require('./data/logs');

const logger = {
  level: {
    'info': function(msg) { return chalk.blue(msg) },
    'warning': function(msg) { return chalk.yellow(msg) },
    'error': function(msg) { return chalk.red(msg) }
  },

  print: function(msg, level) { console.log(logger.level[level](msg)); }
};

_.each(messages, (msg) => {
  logger.print(msg.message, msg.level);
});
