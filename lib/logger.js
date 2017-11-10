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
      return console.log(this.info(message));
      case "WARNING":
      return console.log(this.warning(message));
      case "ERROR":
      return console.log(this.error(message));
    }
  }
}
 
module.exports = Logger;
