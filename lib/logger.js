let chalk = require('chalk');

class Logger {
  constructor() {}
  
  info(message) {
    return chalk.blue(message);
  }
  warning(message) {
    return chalk.yellow(message);
  }
  error(message) {
    return chalk.red(message);
  }
  log(message, level) {
    switch(level.toLowerCase()) {
      case "info":
      return console.log(this.info(message));
      case "warning":
      return console.log(this.warning(message));
      case "error":
      return console.log(this.error(message));
    }
  }
}
 
module.exports = Logger;
