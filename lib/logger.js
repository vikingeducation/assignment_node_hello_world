var chalk = require('chalk');

var logger = {
  log: function(message,level) {
    str = level.toLowerCase();
if(str === "info"){ console.log(chalk.blue(message ));}
    if(str === "error"){ console.log(chalk.red(message ));}
    if(str === "warning"){ console.log(chalk.yellow(message ));}

  }
};
module.exports = logger;
