let chalk = require("chalk");

let logger = {
  log: function(message, level) {
    switch(level.toLowerCase()) {
      case "info":
      return console.log(this.info(message));
      case "warning":
      return console.log(this.warning(message));
      case "error":
      return console.log(this.error(message));
    }
  },
  info: function(message) {
    return chalk.blue(message);
  },
  warning: function(message) {
    return chalk.yellow(message);
  },
  error: function(message) {
    return chalk.red(message);
  }
}

module.exports = logger;
