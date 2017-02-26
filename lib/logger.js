var chalk = require('chalk');

function Logger() {
  this.log = function(message, level) {
    level = level.toLowerCase();
    switch (level) {
      case 'info':
        message = chalk.blue(message);
        break;
      case 'warning':
        message = chalk.yellow(message);
        break;
      case 'error':
        message = chalk.red(message);
        break;
      default:
        message = 'Please enter a valid message level.';
    }
    return message;
  };
}

module.exports = Logger;
