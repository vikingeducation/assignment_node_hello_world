var chalk = require('chalk');

var logger = {
  log: function(message, level) {
    if (level == "INFO") {
      console.log(chalk.blue(message));
    } else if (level == "WARNING") {
      console.log(chalk.yellow(message));
    } else if (level == "ERROR") {
      console.log(chalk.red(message));
    } else {
      console.log("Error!");
    }
  },

  info: function(message) {
    this.log(message, "INFO");
  },

  warning: function(message) {
    this.log(message, "WARNING");
  },

  error: function(message) {
    this.log(message, "ERROR");
  }
}

module.exports = logger;
