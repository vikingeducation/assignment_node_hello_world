chalk = require('chalk');

var logger = {

  log: function(message,level){
    
    var lvl = level.toUpperCase();

    switch (lvl) {
      case "INFO":
        this.info(message);
        break;
      case "WARNING":
        this.warning(message);
        break;
      case "ERROR":
        this.error(message);
        break;
    }
  },

  info: function(inputMessage){
    console.log(chalk.bold.blue(inputMessage));
  },

  warning: function(inputMessage){
    console.log(chalk.bold.yellow(inputMessage));
  },

  error: function(inputMessage){
    console.log(chalk.bold.red(inputMessage));
  }

};

module.exports = logger;
