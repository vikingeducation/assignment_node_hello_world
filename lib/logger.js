// Require chalk
const chalk = require('chalk');
// Logger module
const logger = {

// Log method
// First parameter is the message to log
// Second parameter is the string specifying levels
// i.e. 'INFO', 'WARNING', 'ERROR'
  log( message, string ){
    if( string === 'info' ){
      this.info( message );
    }

    if( string === 'warning') {
      this.warning( message );
    }

    if( string === 'error' ) {
      this.error( message );
    }
  },

  info( message ) {
    console.log( chalk.hex('#5A3FF6')( message ) );
  },

  warning( message ) {
    console.log( chalk.hex('#AEAC33')( message ) );
  },

  error( message ) {
    console.log( chalk.hex('#C13828')( message ) );
  }

};

module.exports = logger;
