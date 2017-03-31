var chalk = require('chalk');

var logger = {
  log: function(strMessage, strLogLevel) {
    if (strLogLevel === 'info') {
      return this.info(` ${strMessage} logged at the ${strLogLevel} level`);
    } else if (strLogLevel === 'warning') {
      return this.warning(` ${strMessage} logged at the ${strLogLevel} level`);
    } else {
      return this.error(` ${strMessage} logged at the ${strLogLevel} level`);
    }
  },
  info: (message) => {
    console.log( chalk.blue(message) );
  },
  warning: (message) => {
    console.log( chalk.yellow(message) );
  },
  error: (message) => {
    console.log( chalk.red(message) );
  }
};

module.exports = logger;