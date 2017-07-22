var chalk = require('chalk');

var logger = {
  log: function(message, level) {
    if (level === 'info') {
      console.info(chalk.blue(message));
    } else if (level === 'warning') {
      console.warn(chalk.yellow(message));
    } else if (level === 'error') {
      console.error(chalk.red(message));
    }
  },
  info: function(message) {
    console.info(chalk.blue(message));
  },
  warning: function(message) {
    console.warn(chalk.yellow(message));
  },
  error: function(message) {
    console.error(chalk.red(message));
  }
};

module.exports = logger;
