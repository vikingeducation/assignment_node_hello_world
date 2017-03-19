var chalk = require('chalk');
var info = chalk.blue;
var warning = chalk.yellow;
var err = chalk.red;

module.exports = {

  log: function(message, type) {
    if (type === 'info'){
      this.info(message);
    } else if (type === 'warning'){
      this.warn(message);
    } else {
      this.error(message);
    }
  },

  info: function(message) {
    console.log(info(message));
  },

  warn: function(message) {
    console.log(warning(message));
  },

  error: function(message) {
    console.log(err(message));
  }

}
