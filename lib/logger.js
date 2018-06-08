var chalk = require('chalk');

var LEVEL_COLOR_MAP = {
  info: 'blue',
  warning: 'yellow',
  error: 'red'
};


var log = function(message, level) {
  var color = LEVEL_COLOR_MAP[level];
  message = chalk[color](message);
  console.log(message)
};


var info = function(message) {
  log(message, 'info');
};


var warning = function(message) {
  log(message, 'warning');
};


var error = function(message) {
  log(message, 'error');
};


module.exports = {
  log: log,
  info: info,
  warning: warning,
  error: error
};
