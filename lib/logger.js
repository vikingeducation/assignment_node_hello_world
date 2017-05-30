const chalk = require('chalk');

const loggingFunctions = {
  log(message, level) {
    if (level === 'info') {
      console.log(chalk.blue(message));
    }
    if (level === 'warning') {
      console.log(chalk.yellow(message));
    }
    if (level === 'error') {
      console.log(chalk.red(message));
    }
  },

  info(message) {
    loggingFunctions.log(message, 'info');
  },

  warning(message) {
    loggingFunctions.log(message, 'warning');
  },

  error(message) {
    loggingFunctions.log(message, 'error');
  },
};

module.exports = loggingFunctions;
