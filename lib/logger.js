var chalk = require('chalk');

var logger = {
  log: function (level, message) {
    switch (level.toUpperCase() ) {
      case 'INFO':
        this.info(message);
        break;
      case 'WARNING':
        this.warning(message);
        break;
      case 'ERROR':
        this.error(message);
        break;
      default:
        this.error(message);
    }
  },
  info: function (message) {
    var blue = chalk.blue;
    console.log(blue(message));
  },
  warning: function (message) {
    var yellow = chalk.yellow;
    console.log(yellow(message));
  },
  error: function (message) {
    var red = chalk.red;
    console.log(red(message));
  }
};

module.exports = logger;
