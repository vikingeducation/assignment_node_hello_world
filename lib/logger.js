var chalk = require('chalk');
var logger = {
  log: function(msg, level) {
    switch(level) {
      case "INFO":
        logger.info(msg);
        break;
      case "WARNING":
        logger.warning(msg);
        break;
      case "ERROR":
        logger.error(msg);
        break;
    }

  },
  info: function(msg) {
    console.log(chalk.blue(msg));
  },
  warning: function(msg) {
    console.log(chalk.yellow(msg));
  },
  error: function(msg) {
    console.log(chalk.red(msg));
  }
};

module.exports = logger

