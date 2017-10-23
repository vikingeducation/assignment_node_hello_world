const chalk = require('chalk');

LEVEL_COL = {
  info: 'blue',
  warning: 'yellow',
  error: 'red'
}

var log = function(message, level) {
    if (level.toLowerCase() == "info") {
      console.log(chalk.blue(message));
    } else if (level.toLowerCase() == "warning")  {
      console.log(chalk.yellow(message));
    } else if (level.toLowerCase() == "error")  {
      console.log(chalk.red(message));
    }
};

module.exports = log;
