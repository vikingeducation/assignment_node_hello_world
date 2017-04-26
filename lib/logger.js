var chalk = require("chalk");

var logger = {
  log: function(message, level) {
    switch(level) {
      case "INFO":
        console.log(chalk.bold.blue(message));
        break;
      case "WARNING":
        console.log(chalk.bold.yellow(message));
        break;
      case "ERROR":
        console.log(chalk.bold.red(message));
        break;
    }
  }
};

module.exports = logger;