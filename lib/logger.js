var chalk = require('chalk');

var logger = {
  log: function(message, loggingLevel) {
    switch(loggingLevel.toLowerCase()) {
      case 'info':
        this.info(message);
        break;
      case 'warning':
        this.warning(message);
        break;
      case 'error':
        this.error(message);
        break;
      default:
        console.log(message);
        break;
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
