var _ = require('lodash');
var Logger = require('./lib/logger.js');
var data = require('./data/logs');

// Logger.dispatch('this is a string', 'info');
// Logger.dispatch('this is a string', 'warning');
// Logger.dispatch('this is a string', 'error');

_.each(data, function(data){
  Logger.dispatch(data.message, data.level);
})
