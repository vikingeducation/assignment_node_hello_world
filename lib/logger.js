var chalk = require('chalk');

  var logger = function(message, logLevel) {
    if (logLevel == "info") {
      info(message);
    } else if (logLevel == "warning") {
      warning(message);
    } else if (logLevel == "error") {
      error(message);
    };
  };

  var info = function(message) {
    console.log(chalk.blue(message + ' logged at INFO level'));
  };

  var warning = function(message) {
    console.log(chalk.yellow(message + ' logged at WARNING level'));
  };

  var error = function(message) {
    console.log(chalk.red(message + ' logged at ERROR level'));
  };


module.exports = logger;