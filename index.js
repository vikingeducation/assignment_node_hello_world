var _ = require('lodash');
const chalk = require('chalk');
var logs = require('./data/logs');

var log = require('./lib/logger');
log('This is error message', 'ERROR');
log('This is warning message', 'WARNING');
log('This is info message', 'INFO');

var info = function(message) {
  console.log(message, 'info');
}

var warning = function(message) {
  console.log(message, 'warning');
}

var error = function(message) {
  console.log(message, 'error');
}

_.each(logs, function(element) {
  debugger;
  log(element.message, element.level);
});
