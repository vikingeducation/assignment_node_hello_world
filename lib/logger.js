var chalk = require("chalk");

var logger = {
  log: function(message, level) {
    switch(level) {
      case "info":
        console.log(chalk.bold.blue(message));
        break;
      case "warning":
        console.log(chalk.bold.yellow(message));
        break;
      case "error":
        console.log(chalk.bold.red(message));
        break;
    }
  }
};

module.exports = logger;