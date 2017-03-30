const chalk = require('chalk');

var logger = {
  log: function(message, level) {
      switch (level) {
        case "INFO":
          logger.info(message);
          break;
        case "WARNING":
          logger.warn(message);
          break;
        case "ERROR":
          logger.error(message);
          break;
        default:
          console.log(level + ": " + message);

      }
  },
  info: function(message) {
    console.log(chalk.blue(message));
  },
  warn: function(message) {
    console.log(chalk.yellow(message));
  },
  error: function(message) {
    console.log(chalk.red(message));
  }
};

module.exports = logger;
