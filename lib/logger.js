var chalk = require('chalk')

var logger = {
  log: function(message, messageType){
    if (messageType.toLowerCase() === 'info'){
      console.log(chalk.blue(message))
    }
    else if (messageType.toLowerCase() === 'warning'){
      console.log(chalk.yellow(message));
    }
    else if (messageType.toUpperCase() === 'ERROR'){
      console.log(chalk.red(message))
    }
  },
  info: function(message){
    
  },
  warning: function(message){

  },
  error: function(message){

  }
}


module.exports = logger;
