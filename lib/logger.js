'use strict';

let chalk = require('chalk');

let methods = {

  info: function(message) {
    console.log(chalk.blue(message));
  },

  warning: function(message) {
    console.log(chalk.yellow(message));
  },

  error: function(message) {
    console.log(chalk.red(message));
  },

  log: function(message, level) {
    switch(level) {
      case 'INFO':
        methods.info(message);
        break;
      case 'WARNING':
        methods.warning(message);
        break;
      case 'ERROR':
        methods.error(message);
        break;
      default:
        methods.warning(`Warning: '${level}' is an invalid log level`);
    }
  }

}

module.exports = methods;
