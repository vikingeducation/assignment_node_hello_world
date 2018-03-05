
const chalk = require('chalk');

var logger = {
  log: function(message, level) {
    if (level == "info") {
      this.info(message);
    } else if (level == "warn") {
      this.warn(message);
    } else if (level == "error") {
      this.error(message);
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
