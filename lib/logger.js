var chalk = require('chalk');

var logger = {
  log: function(message, logType) {
    switch(logType) {
      case "info":
        console.info(chalk.blue(message));
        break;
      case "warning":
        console.warn(chalk.yellow(message));
        break;
      case 'error':
        console.error(chalk.red(message));
    }
  }
};

module.exports = logger;
