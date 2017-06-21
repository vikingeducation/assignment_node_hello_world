var lodash = require('lodash');
var array = require('lodash/array');
var chalk = require('chalk');
var logger = require('./lib/logger');
var salutations = "hey you";
console.log(chalk.blue('Hello world!'));
lodash.each();
for(var i = 0; i < 5; i++) {
    console.log(i);
}
logger.log(salutations,0);
logger.log(salutations,2);
logger.log(salutations,1);
