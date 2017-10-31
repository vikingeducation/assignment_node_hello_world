'use strict';

let _ = require('lodash');
let chalk = require('chalk');
let logger = require('./lib/logger.js');

logger.log('INFO level message', 'info');
logger.log('WARNING level message', 'warning');
logger.log('ERROR level message', 'error');
