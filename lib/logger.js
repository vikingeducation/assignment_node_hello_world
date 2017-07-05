const chalk = require('chalk');
const log = console.log;


var logger = {
  log: function(style, message) {
    switch (style.toLowerCase()) {
      case "info":
        this.info(message);
        break;
      case "warning":
        this.warning(message);
        break;
      case "error":
        this.error(message);
        break;
      default:
        this.error("style not found in looger.js switch statement");
    }
  },
  info: function(message) {
    log(chalk.blue(message));
  },
  warning: function(message) {
    log(chalk.yellow(message));
  },
  error: function(message) {
    log(chalk.red(message));
  }
}

module.exports = logger;
