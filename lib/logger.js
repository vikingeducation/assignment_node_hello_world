var chalk = require('chalk');
var logger = {
  log: function(message, level) {
    console.log(message);
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
