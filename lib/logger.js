var chalk = require("chalk");

var logger = {

  log: function(msg, level) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.log(chalk.yellow(msg));
    } else if (level === "error") {
      console.log(chalk.red(msg));
    }
  }
}

module.exports = logger;
