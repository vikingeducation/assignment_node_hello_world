var chalk = require("../node_modules/chalk");

var logger = {
  log: function(message, level) {
    switch(level) {
      case "info":
        console.log(chalk.blue(message));
        break;
      case "warning":
        console.log(chalk.yellow(message));
        break;
      case "error":
        console.log(chalk.red(message));
        break;
      default:
        console.log(chalk.red("ERROR: did you specify a log level?"));
        break;
    }
  }
};

module.exports = logger;
