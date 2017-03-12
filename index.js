var _ = require('lodash');
var logger = require('./lib/logger');
var json = require('./data/logs');

_.each(json, function(obj) {
  logger.log(obj.level, obj.message);
});
