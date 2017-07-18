// Log method that takes two parameters:
// 1. message to log
// 2. string specifying the logging level (info, warning, error)

const chalk = require('chalk');

var logger = {
  log: function(messageStr, typeOfMsg) {
    typeOfMsg = typeOfMsg.toLowerCase();

    if (typeOfMsg == 'info') {
      return logger.info(messageStr);
    }
    else if (typeOfMsg == 'warning') {
      return logger.warning(messageStr);
    }
    else {
      return logger.error(messageStr);
    }
  },

  info: function(messageStr) {
    console.log(chalk.blue(messageStr));
  },

  warning: function(messageStr) {
    console.log(chalk.yellow(messageStr));
  },

  error: function(messageStr) {
    console.log(chalk.red(messageStr));
  }
};

module.exports = logger;
