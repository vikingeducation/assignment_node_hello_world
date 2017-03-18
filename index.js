
var _ = require('lodash');
var Logger = require('./lib/logger.js');

Logger.dispatch('this is a string', 'info');
Logger.dispatch('this is a string', 'warning');
Logger.dispatch('this is a string', 'error');

