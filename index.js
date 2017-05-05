var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var salutations = require('./lib/salutations');

_.each(salutations, function(salutation) {
    logger.log(salutation);
});
