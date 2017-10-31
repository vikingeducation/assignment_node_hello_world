'use strict';
let chalk = require('chalk');

let logger = {
  log: function(level, message) {
    switch (level) {
      case 'info':
        return this.info(message);
        break;
      case 'warning':
        return this.warning(message);
        break;
      case 'error':
        return this.error(message);
        break;
      default:
        console.log(chalk.red('logLevel must be info, warning, or error'));
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
