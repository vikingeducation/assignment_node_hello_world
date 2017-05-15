var chalk = require('chalk');

var logger = {
  log: (msg, level) => {
    switch (level) {
      case 'warning':
        return console.log(chalk.yellow(msg));
      case 'error':
        return console.log(chalk.red(msg));
      default:
        return console.log(chalk.blue(msg));
    }
  },
  info: msg => logger.log(msg, 'info'),
  warn: msg => logger.log(msg, 'warning'),
  error: msg => logger.log(msg, 'error'),
}

module.exports = logger;
