// Require lodash
const _ = require('lodash');

// Require logger
const LOGGER = require('./lib/logger');

// Require logs
const LOGS = require('./data/logs'); 

// Iterate though messages in logs.json 
_.each( LOGS, log => {
  // Call appropriate method based on the level
  // and pass in the message
  LOGGER[log.level]( log.message );
});


