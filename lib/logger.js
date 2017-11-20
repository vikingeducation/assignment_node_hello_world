var chalk = require("chalk");

var logger = {
  log: function(message, messageType) {
    if (messageType === "ERROR") {
      console.log(chalk.red(message));
    } else if (messageType === "WARNING") {
      console.log(chalk.yellow(message));
    } else if (messageType === "INFO") {
      console.log(chalk.blue(message));
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