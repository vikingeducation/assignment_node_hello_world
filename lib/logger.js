var chalk = require('chalk');
var levels = {"INFO": "blue",
              "WARNING": "yellow",
              "ERROR": "red"};

var logger = {
  log: function(message, level) {
    let color = chalk.keyword(levels[level]);
    console.log(color(message));
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
}

module.exports = logger;
