var chalk = require('chalk');

var logger = {
  log: function(message, logLevel) {
    if (logLevel === 'INFO') {
     console.log(chalk.blue(message + ' logged at ' + logLevel + ' level'));
    } else if (logLevel === 'WARNING') {
      console.log(chalk.yellow(message + ' logged at ' + logLevel + ' level'));
    } else if (logLevel === 'ERROR') {
      console.log(chalk.red(message + ' logged at ' + logLevel + ' level'));
    }
  },
  info: function(message) {
    return this.log(message, 'INFO');
  },

  warning: function(message) {
    return this.log(message, 'WARNING');
  },
  error: function(message) {
    return this.log(message, 'ERROR');
  }
};

module.exports = logger;