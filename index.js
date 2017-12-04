/*jshint esversion: 6 */
const chalk = require('chalk');
var _ = require('lodash');

// let arr=["hi", 2, false];
//
// function log(el) {
//   console.log(el);
// }
// _.each(arr, log);


var logger = require('./lib/logger');

logger.log('Message logged at the INFO level', 'info');
logger.log('Message logged at the WARNING level', 'warning');
logger.log('Message logged at the ERROR level', 'error');
