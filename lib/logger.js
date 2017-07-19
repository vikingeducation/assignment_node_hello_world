// Log method that takes two parameters:
// 1. message to log
// 2. string specifying the logging level (info, warning, error)

const chalk = require('chalk');

var logger = {
  log: function(message, level) {
    level = level.toLowerCase();

    if (level === 'info') {
      return logger.info(message);
    }
    else if (level === 'warning') {
      return logger.warning(message);
    }
    else {
      return logger.error(message);
    }
  },

  info: function(message) {
    console.log(chalk.blue(message));
  },

  warning: function(message) {
    console.log(chalk.yellow(message));
  },

  error: function(message) {
    console.log(chalk.red(message));
  }
};

module.exports = logger;
