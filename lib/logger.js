const chalk = require('../node_modules/chalk');


var logger = {

  info: function(message) {
    console.log(chalk.blue(message));
    //outputs at info level
  },

  warning: function(message) {
    console.log(chalk.yellow(message));
    //outputs at warning level
  },

  error: function(message) {
    console.log(chalk.red(message));
    //outputs at error level
  },

  log: function(message, level){
    if(level == "info"){
      logger.info(message);
    } else if (level == "warning") {
      logger.warning(message);
    }else if (level == "error") {
      logger.error(message);
    };
  },
}

module.exports = logger;
