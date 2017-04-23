const chalk = require('chalk');

const logger = {
  LEVEL_COLOR_MAP: {
    'info': 'blue',
    'warning': 'yellow',
    'error': 'red'
  },

  log: function(msg, level) {
    const color = this.LEVEL_COLOR_MAP[level]

    console.log(chalk[color](msg));
  }
}

module.exports = logger;
