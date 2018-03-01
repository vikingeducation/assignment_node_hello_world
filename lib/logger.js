var clr = require('chalk');

var logger = {
  output: function(message, level){
    switch(level) {
      case "info":
        logger.info(message);
        break;
      case "warning":
        logger.warning(message);
        break;
      case "error":
        logger.error(message);
        break;
      default:
        console.log('Something broke!');
        break;
    }
  },
  info: function(message) {
    console.log(clr.blue('Message logged at level, INFO: ' + message));
  },
  warning: function(message) {
    console.log(clr.yellow('Message logged at level, WARNING: ' + message));
  },
  error: function(message) {
    console.log(clr.red('Message logged at level, ERROR: ' + message));
  }
};

module.exports = logger;
