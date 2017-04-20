

var chalk=require('chalk');

var logger = {
  info: function(message){
    console.log(chalk.blue(message+" logged at INFO level") );
  },
  warning: function(message)
  {
    console.log(chalk.yellow(message+" logged at WARNING level"));
  },

  error: function(message)
  {
    console.log(chalk.red(message+" logged at ERROR level"));
  },
  log: function(message,level){
    switch(level){
      case"info":
        this.info(message);
        break;
      case "warning":
        this.warning(message);
        break;
      case "error":
        this.error(message);
        break;
    }
  }
}

module.exports = logger;
