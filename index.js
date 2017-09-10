const chalk = require('chalk');
// Load the full build. 
var _ = require('lodash');
// Load the core build. 
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods. 
var fp = require('lodash/fp');
 
// Load method categories. 
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles. 
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

console.log(chalk.blue('hello world!'));

var teams = require('./lib/favoriteTeams');
var logger = require('./lib/logger');
var infoV = require('./lib/logger');
var warningV = require('./lib/logger');
var errorV = require('./lib/logger');


console.log(teams);
console.log();

_.each(teams, function(teams) {
  logger.log(teams);
});

console.log(chalk.blue('infoV'))
