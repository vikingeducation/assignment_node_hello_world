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
    switch(level) {
      case "INFO":
      return this.info(message);
      case "WARNING":
      return this.warning(message);
      case "ERROR":
      return this.error(message);
    }
  }
}
 
module.exports = Logger;
