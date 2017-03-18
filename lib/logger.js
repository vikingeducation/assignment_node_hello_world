var chalk = require('chalk');

var Logger = {
  dispatch: function (str,level){
    switch(level) {
      case 'info':
        this.info(str);
        break;
      case 'warning':
        this.warning(str);
        break;
      case 'error':
        this.error(str);
        break;
    }
  },
  info: function(str){
    return console.log(chalk.blue(str))
  },
  warning: function(str){
    return console.log(chalk.yellow(str))
  },
  error: function(str){
    return console.log(chalk.red(str))
  }
}

module.exports = Logger;