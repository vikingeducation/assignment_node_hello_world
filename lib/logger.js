// Require chalk
const CHALK = require('chalk');

// Logger module
const LOGGER = {

  // Color map for levels
  color_map: {
    info: '#5A3FF6',
    warning: '#AEAC33',
    error: '#C13828'
  },

  log( message, level ){
    // Get hex value from color map based on level
    const COLOR = this.color_map[level];

    // Get colored message
    message = CHALK.hex(COLOR)(message);

    console.log( message );
  },

  // Called when log.level is 'info'
  info( message ) {
    this.log( message, 'info' );
  },

  // Called when log.level is 'warning'
  warning( message ) {
    this.log( message, 'warning' );
  },

  // Called when log.level is 'error'
  error( message ) {
    this.log( message, 'error' );
  }
};

// Export logger obj when `required`
module.exports = LOGGER;
