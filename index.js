var lodash = require('lodash');
var array = require('lodash/array');
var chalk = require('chalk');
var logger = require('./lib/logger');
var salutations = "hey you";
var json = require('./data/logs');
console.log(chalk.blue('Hello world!'));
lodash.each();

logger.log(salutations,"INFO");
logger.log(salutations,"ERROR");
logger.log(salutations,"WARNING");
console.log(json.length);
console.log(json.length);
  for(var i = 0; i < json.length; i++) {
      logger.log(json[i].message,json[i].level);
  }
