var chalk = require('chalk');

var logger = {

  log: function(str, level){
    level(str);
  },

  info: function(str){
    console.log(chalk.blue(str));
  },

  warning: function(str){
    console.log(chalk.yellow(str));
  },

  error: function(str){
    console.log(chalk.red(str));
  }

}

module.exports = logger;
