var chalk = require('chalk');

var logger = {
  log: function(level, message) {
    switch(level) {
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
