var chalk = require( 'chalk' );
var logger = {
  log: function(message, level) {
    var chalkColor = getChalkColor(level);
    console.log(chalkColor(message));
  },

  info: function(message) {
    this.log(message, 'info');
  },
  warning: function(message) {
    this.log(message, 'warning');
  },
  error: function(message) {
    this.log(message, 'error');
  }
};

function getChalkColor (level) {
  switch (level) {
    case 'info':
      return chalk.blue;
      break;
    case 'warning':
      return chalk.yellow;
      break;
    case 'error':
      return chalk.red;
      break;
    default:
      return console.log('invalid level');
  };
};



module.exports = logger;



