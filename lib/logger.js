var chalk = require("chalk");

var logger = {
  log: function(message){

    if(message.level === "error"){
      console.log("Level: " + chalk.red(message.level), "message: " + chalk.red(message.message));
    }else if(message.level === "warning"){
      console.log("Level: " + chalk.yellow(message.level), "message: " + chalk.yellow(message.message));      
    }else {
      console.log("Level: " + chalk.blue(message.level), "message: " + chalk.blue(message.message));
    }

  }
};


module.exports = logger;