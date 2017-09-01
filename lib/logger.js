var chalk = require('../node_modules/chalk');

var logger = {
  log: function(message, logLevel) {
    if (logLevel == "INFO") {
      logger.info(message);
    } else if (logLevel == "WARNING") {
      logger.warning(message);
    } else if (logLevel == "ERROR") {
      logger.error(message);
    } else {
      console.log(chalk.red(log_level + " is not a valid log level. Please use either INFO, WARNING, OR ERROR."));
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
}

module.exports = logger;
