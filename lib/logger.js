var chalk = require("chalk");

var logger = {
  log: function(message, level) {
    switch (level) {
      case "INFO":
        console.log(chalk.blue(message));
        break;
      case "WARNING":
        console.log(chalk.yellow(message));
        break;
      case "ERROR":
        console.log(chalk.red(message));
        break;
    }
  }
};

module.exports = logger;
