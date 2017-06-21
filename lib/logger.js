var chalk = require('chalk');

var logger = {
  log: function(message,level) {
if(level === 1){ console.log(chalk.yellow(message + " guys"));}
    if(level === 2){ console.log(chalk.red(message + " guys"));}
    if(level === 0){ console.log(chalk.blue(message + " guys"));}

  }
};
module.exports = logger;
